
// ACNHOR --> IMPORTS REACT
import { useCallback, useContext, useEffect } from "react";
import { VariaveisContext } from "../../context/VariaveisContext";
// END REACT

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS

// ANCHOR --> IMPORTS COMPONENTS
import { BarraLateral } from "../../components/barraLateral";
import { Agentes } from "../../components/agentes";
import { InputTexto } from "../../components/inputs/inputComp";
import { Input } from "../../components/inputs";
// END COMPONENTS

export const Inicio = () => {

    // SECTION --> VARIAVEL PARA GUARDAR VALOR PESQUISADO PESQUISA
    const { termoPesquisa, setTermoPesquisa } = useContext(VariaveisContext);

    // SECTION --> VARIÁVEIS VINDAS DO CONTEXT PARA CONTROLAR NOTIFICAÇÕES
    const { setMensagemNotificacao, setTipoNotificacao, setDispararNotificacao } = useContext(VariaveisContext);

    // SECTION --> LIMPAR NOTIFICAÇÕES DEPOIS DE 4 SEGUNDOS
    const clearNotification = useCallback(() => {
        
        setTimeout(() => {

            // STUB --> CONFIGURAÇÃO DE NOTIFICAÇÃO
            setTipoNotificacao(null);
            setMensagemNotificacao("");
            setDispararNotificacao(false);
        }, 1000)

    }, [setTipoNotificacao, setMensagemNotificacao, setDispararNotificacao]);

    useEffect(() => {
        clearNotification();

    }, [clearNotification]);

    return(
        <>
            <ContainerHome>
                <BarraLateral />

                <Content>
                    <InputTexto busca={true}>
                        <Input 
                            placeholder="Busque um Agente" 
                            value={termoPesquisa}
                            onChange={(e) => setTermoPesquisa(e.target.value)}
                        />
                    </InputTexto>
                    
                    <Agentes />
                </Content>
            </ContainerHome>
        </>
    );
};

const ContainerHome = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
`;

const Content = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`;