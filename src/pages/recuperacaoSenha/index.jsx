
// ANCHOR --> IMPORTS REACT
import { useContext, useState } from "react";
import { VariaveisContext } from "../../context/VariaveisContext";
// END REACT

// ANCHOR --> IMPORTS COMPONENTS
import { ButtonPrimarioLink } from "../../components/botoes";
import { Input } from "../../components/inputs";
import { LabelSubtitle } from "../../components/labels";
import { InputTexto } from "../../components/inputs/inputComp";
// END COMPONENTS

// ANCHOR --> IMPORTS API
import { localAPI } from "../../services";
// END API

// ANCHOR --> IMPORTS REACT SVG
import { ReactSVG } from "react-svg";
// END REACT SVG

// ANCHOR --> IMPORTS SVG's
import ilustracao from "../../assets/svg/ilustration/building.svg";
import pontua from "../../assets/svg/logo/pontua_branca.svg";
import load from "../../assets/svg/icons/loading_icon.svg";
// END SVG's

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS


export const RecuperacaoSenha = () => {

    // SECTION --> VARIÁVEIS VINDAS DO CONTEXT PARA CONTROLAR NOTIFICAÇÕES
    const { setMensagemNotificacao, setTipoNotificacao, setDispararNotificacao } = useContext(VariaveisContext);
    
    // SECTION --> OBJETO DOS INPUTS
    const [emailRecuperacao, setEmailRecuperacao] = useState();
    const [emailEnviado, setEmailEnviado] = useState(false);
    const [carregando, setCarregando] = useState(false);


    // SECTION --> FUNÇÃO PARA COLOCAR DADOS DO INPUT EM UM OBJETO PARA ENVIAR NA API
    const handleValoresRecuperacao = (nome, valor) => {
        setEmailRecuperacao((prevValores) => ({
            ...prevValores,
            [nome]: valor,
        }));
    };

    
    // SECTION --> FUNÇÃO PARA CHAMAR A ROTA DE EMAIL
    const handleRecuperar = () => {

        setCarregando(true);
        
        // STUB --> REQUISIÇÃO PARA TRAZER LOGIN
        localAPI.post("email", { email: emailRecuperacao.email })
        .then((res) => {
            if(res.status === 200) {
                
                // STUB --> DISPARAR NOTIFICAÇÃO DE LOGIN
                setTipoNotificacao("sucesso");
                setMensagemNotificacao("E-Mail enviado com sucesso");
                setDispararNotificacao(true);

                // STUB --> INFORMAR QUE EMAIL FOI ENVIADO
                setEmailEnviado(true);
                    
                // STUB --> FINALIZAR CARREGAMENTO
                setCarregando(false);
            } 
        })
        .catch(() => {
            setDispararNotificacao(true);
            setTipoNotificacao("erro");
            setMensagemNotificacao("Erro no envio do e-mail de recuperação");
        });
    };

    return(
        <>
            <Container>
                <LogoPontua src={pontua} alt={"Logomarca Pontua"} />
    
                <ContainerRecuperacao>
                    <Ilustracao src={ilustracao} alt={"Ilustração"} />

                    { !emailEnviado ?
                        <>
                            <RecuperacaoForm>
                                <LabelRecuperacao>
                                    Recuperar Senha<span>.</span>
                                </LabelRecuperacao>

                                <LabelSubtitle subtitulo={"Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha."} />

                                <InputTexto>
                                    <Input name="email" placeholder="E-Mail" type={"email"} onChange={(data) => handleValoresRecuperacao("email", data.target.value)} />
                                </InputTexto>

                                { carregando ?
                                    <ContainerLoad>
                                        <LoadIcon src={load} alt={"carregando"} />
                                        <LabelLoading>Enviando E-Mail</LabelLoading>
                                    </ContainerLoad>
                                    :
                                    ""
                                }

                                <ButtonPrimarioLink onClick={() => {handleRecuperar();}}>
                                    Enviar Link
                                </ButtonPrimarioLink>
                            </RecuperacaoForm>
                        </>

                        :

                        <RecuperacaoForm>
                            <LabelRecuperacao>
                                Tudo Certo <span>;)</span>
                            </LabelRecuperacao>

                            <LabelSubtitle subtitulo={"Foi enviado um e-mail para você com instruções de como redefinir a sua senha."} />

                            <ButtonPrimarioLink to={"/"}>
                                Voltar para o login
                            </ButtonPrimarioLink>
                        </RecuperacaoForm>
                    }

                </ContainerRecuperacao>
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    background: ${props => props.theme.cores.azuis.blue800};
`;

const ContainerRecuperacao = styled.div`
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

const RecuperacaoForm = styled.div`
    width: 100%;
    max-width: 380px;
    height: 433px;

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

const ContainerLoad = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    column-gap: 10px;
`;

const LabelLoading = styled.p`
    ${props => props.theme.tipografia.body12regular};

    color: ${props => props.theme.cores.auxiliares.preto};
`;

const LoadIcon = styled(ReactSVG)`
    animation: loading 3s ease-in infinite alternate;

    svg {
        width: 26px;
        height: 26px;
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(360deg);
        }

        100% {
            transform: rotate(720deg);
        }
    };
`;

const LabelRecuperacao = styled.p`
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