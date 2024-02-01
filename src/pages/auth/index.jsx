
// ANCHOR --> IMPORTS REACT
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VariaveisContext } from "../../context/VariaveisContext";
// END REACT

// ANCHOR --> IMPORTS COMPONENTS
import { ButtonPrimarioLink } from "../../components/botoes";
import { Input } from "../../components/inputs";
import { LabelLink, LabelSubtitle } from "../../components/labels";
import { InputTexto } from "../../components/inputs/inputComp";
// END COMPONENTS

// ANCHOR --> IMPORTS REACT SVG
import { ReactSVG } from "react-svg";
// END REACT SVG

// ANCHOR --> IMPORTS SVG's
import ilustracao from "../../assets/svg/ilustration/building.svg";
import pontua from "../../assets/svg/logo/pontua_branca.svg";
import { LoginOutIcon } from "../../components/icons";
// END SVG's

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS

// ANCHOR --> IMPORTS SERVICES
import { localAPI } from "../../services";
// END SERVICES


export const Login = () => {

    // SECTION --> VARIÁVEIS VINDAS DO CONTEXT
    const { mostrarSenha, setTokenUsuario } = useContext(VariaveisContext);

    // SECTION --> VARIÁVEIS VINDAS DO CONTEXT PARA CONTROLAR NOTIFICAÇÕES
    const { setMensagemNotificacao, setTipoNotificacao, setDispararNotificacao } = useContext(VariaveisContext);
    
    // SECTION --> OBJETO DOS INPUTS
    const [loginSenha, setLoginSenha] = useState();

    const navigate = useNavigate();


    // SECTION --> FUNÇÃO PARA COLOCAR DADOS DO INPUT EM UM OBJETO PARA ENVIAR NA API
    const handleValoresLogin = (nome, valor) => {
        setLoginSenha((prevValores) => ({
            ...prevValores,
            [nome]: valor,
        }));
    };

    
    // SECTION --> FUNÇÃO PARA CHAMAR A ROTA DE LOGIN
    const handleLogin = () => {
        
        localAPI.post("login", { email: loginSenha.email, senha: loginSenha.senha })
        .then(res => {
            if(res.status === 200) {
    
                // STUB --> CONFIGURAÇÃO DE NOTIFICAÇÃO
                setTipoNotificacao("sucesso");
                setMensagemNotificacao(res.data.mensagem);
                setDispararNotificacao(true);
                
                // STUB --> ATRIBUINDO TOKEN À VARIAVEL DO CONTEXT PARA SER UTILIZADA GLOBALMENTE
                setTokenUsuario(res.data.token);
    
                // STUB --> ATRIBUINDO TOKEN AO LOCAL STORAGE PARA MANTER SESSÃO
                localStorage.setItem("token", res.data.token);

                navigate("/agentes", {replace: true});
            
            }
        });

        setTipoNotificacao("erro");
        setMensagemNotificacao("Usuário ou senha incorretos.");
        setDispararNotificacao(true);
    };

    return(
        <>
            <Container>
                <LogoPontua src={pontua} alt={"Logomarca Pontua"} />
    
                <ContainerLogin>
                    <Ilustracao src={ilustracao} alt={"Ilustração"} />

                    <LoginForm>
                        <LabelBemVindo>
                            Bem-vindo<span>.</span>
                        </LabelBemVindo>

                        <LabelSubtitle subtitulo={"Informe as suas credenciais de acesso ao portal"} />

                        <InputTexto>
                            <Input name="email" placeholder="E-Mail" type={"email"} onChange={(data) => handleValoresLogin("email", data.target.value)} />
                        </InputTexto>

                        <InputTexto senha={true}>
                            <Input name="senha" placeholder="Senha" type={mostrarSenha ? "text" : "password"} onChange={(data) => handleValoresLogin("senha", data.target.value)} />
                        </InputTexto>
                        

                        <ButtonPrimarioLink onClick={() => {handleLogin();}}>
                            Entrar <LoginOutIcon />
                        </ButtonPrimarioLink>

                        <RecuperacaoSenhaContainer>
                            <LabelLink texto={"Esqueceu a senha?"} to={"/recuperacao"} />
                        </RecuperacaoSenhaContainer>
                    </LoginForm>
                </ContainerLogin>
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    background: ${props => props.theme.cores.azuis.blue800};
`;

const ContainerLogin = styled.div`
    width: 100%;
    height: 96vh;

    display: flex;
    justify-content: center;
    align-items: center;

    column-gap: 140px;
`;

const LogoPontua = styled(ReactSVG)`
    width: 157px;
    height: 38px;

    position: absolute;

    margin: 49px 0 0 106px;
`;

const LoginForm = styled.div`
    width: 100%;
    max-width: 380px;
    height: 460px;

    padding: 30px;

    display: flex;
    flex-direction: column;

    border-radius: 28px;

    background: ${props => props.theme.cores.auxiliares.white};
    
    align-items: center;

    gap: 24px;

    @media (max-width: 768px) {
        height: 400px;

        padding: 14px;
    };

    &:nth-child(2) {
        align-items: flex-start;
    }
`;

const LabelBemVindo = styled.p`
    ${props => props.theme.tipografia.tituloh6};
    color: ${props => props.theme.cores.azuis.blue600};

    span {
        ${props => props.theme.tipografia.tituloh5};
        color: ${props => props.theme.cores.laranja.orange500};
    }
`;

const Ilustracao = styled(ReactSVG)`
    width: 100%;
    max-width: 614px;
`;

const RecuperacaoSenhaContainer = styled.div`
    width: 100%;
`;