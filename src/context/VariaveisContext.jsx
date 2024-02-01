// ANCHOR --> IMPORTS REACT
import { createContext, useState } from "react";
// END REACT

// ANCHOR --> IMPORTS PROP TYPES
import { any } from "prop-types";
// END PROP TYPES

export const VariaveisContext = createContext();

export const ContextProvider = ({children}) => {
    
    // LINK --> STORAGE ------------------------------------------------------------------------------------------------ //

        // SECTION --> VARIÁVEL PARA GUARDAR TOKEN DO USUÁRIO AO LOGAR
        const [tokenUsuario, setTokenUsuario] = useState(localStorage.getItem('token'));

    // ----------------------------------------------------------------------------------------------------------------- //


    // STUB --> DADOS AGENTES ------------------------------------------------------------------------------------------- //

        // SECTION --> VARIÁVEL PARA GUARDAR DADOS DOS AGENTES VINDOS DA API
        const [agentes, setAgentes] = useState();

        // SECTION --> ID DO AGENTE QUNANDO CLICADO NO CARD
        const [agenteID, setAgenteID] = useState();  

    // ----------------------------------------------------------------------------------------------------------------- //


    // STUB --> NOTIFICAÇÕES -------------------------------------------------------------------------------------------- //

        // SECTION --> VARIÁVEL PARA PASSAR A MENSAGEM QUE IRÁ NA NOTIFICAÇÃO
        const [mensagemNotificacao, setMensagemNotificacao] = useState("");

        // SECTION --> VARIÁVEL QUE PASSA O TIPO DE NOTIFICAÇÃO QUE IRÁ EXECUTAR
        const [tipoNotificacao, setTipoNotificacao] = useState("");

        // SECTION --> VARIÁVEL QUE CONTROLA SE A NOTIFICAÇÃO DEVE SER EXECUTADO
        const [dispararNotificacao, setDispararNotificacao] = useState(false);

    // ----------------------------------------------------------------------------------------------------------------- //

    
    // SECTION --> VARIAVEL PARA CONTROLAR MOSTRAR SENHA OU NÃO
    const [mostrarSenha, setMostrarSenha] = useState(false);


    // SECTION --> VARIAVEL PARA CONTROLAR QUAL TAB (ABA) ESTÁ ATIVA
    const [activeTab, setActiveTab] = useState('visao_geral');


    // SECTION --> VARIAVEL PARA GUARDAR VALOR PESQUISADO
    const [termoPesquisa, setTermoPesquisa] = useState("");

    // SECTION --> VARIAVEL QUE CAPTURA A LARGURA ATUAL DA TELA
    const [larguraTela, setLarguraTela] = useState(window.innerWidth);


    const valores = {
        tokenUsuario, setTokenUsuario,
        agentes, setAgentes,
        agenteID, setAgenteID,
        mostrarSenha, setMostrarSenha,
        mensagemNotificacao, setMensagemNotificacao,
        tipoNotificacao, setTipoNotificacao,
        dispararNotificacao, setDispararNotificacao,
        activeTab, setActiveTab,
        termoPesquisa, setTermoPesquisa,
        larguraTela, setLarguraTela,
    };

    return(
        <VariaveisContext.Provider value={ valores }>
            {children}
        </VariaveisContext.Provider>
    );
};
ContextProvider.propTypes = {
    children: any,
}