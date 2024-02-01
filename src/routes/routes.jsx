
// ANCHOR --> IMPORTS REACT
import { useContext } from "react";
import { VariaveisContext } from "../context/VariaveisContext";
// END REACT

// ANCHOR --> IMPORTS REACT ROUTER DOM
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// END REACT ROUTER DOM

// ANCHOR --> IMPORTS COMPONENTES
import { NotFound } from "../pages/err";
import { Login } from "../pages/auth";
import { RecuperacaoSenha } from "../pages/recuperacaoSenha";
import { Inicio } from "../pages/home";
import { PerfilAgente } from "../pages/perfilAgente/perfilAgente";
// END COMPONENTES

export const Paths = () => {

    const { tokenUsuario } = useContext(VariaveisContext);

    return (
        <>
            <BrowserRouter>
                <Routes>

                    {/* LINK ------------------ ROTAS PÚBLICAS  ------------------------------ */}
                    
                        {/* SECTION --> PÁGINA LOGIN */}
                        { tokenUsuario ? (
                            <>
                                <Route path="/" element={<Inicio />} />
                            </>
                            
                            ) : (
                                // Redireciona para LOGIN se o usuário não estiver autenticado
                                <Route path="*" element={<Navigate to="/login" />} />
                            )
                        }

                        {/* SECTION --> PÁGINA DE RECUPERAÇÃO DE SENHA */}
                        <Route path="/recuperacao" element={<RecuperacaoSenha />} />

                    {/* ---------------------------------------------------------------------- */}


                    {/* LINK ------------------ ROTAS PRIVADAS  ------------------------------ */}
                        
                        {/* SECTION --> PÁGINA INICIAL */}
                        { tokenUsuario ? (
                            <>
                                <Route path="/agentes" element={<Inicio />} />
                            </>
                            
                            ) : (
                                // Redireciona para LOGIN se o usuário não estiver autenticado
                                <Route path="*" element={<Navigate to="/login" />} />
                            )
                        }

                        {/* SECTION --> PÁGINA INICIAL */}
                        { tokenUsuario ? (
                            <>
                                <Route path="/perfil-agente" element={<PerfilAgente />} />
                            </>
                            
                            ) : (
                                // Redireciona para LOGIN se o usuário não estiver autenticado
                                <Route path="*" element={<Navigate to="/login" />} />
                            )
                        }

                    {/* ---------------------------------------------------------------------- */}


                    {/* SECTION --> ROTA PADRÃO PARA LOGIN */}
                    <Route
                        path="/login"
                        element={
                            tokenUsuario ? (
                                // Se estiver logado, redireciona para "/agentes"
                                <Navigate to="/agentes" />
                            ) : (
                                // Se não estiver logado, exibe o componente de login
                                <Login />
                            )
                        }
                    />

                    {/* SECTION --> NOT FOUND */}
                    <Route path="*" element={<NotFound to="/agentes" />} />

                </Routes> 
            </BrowserRouter>
        </>
    );
}
