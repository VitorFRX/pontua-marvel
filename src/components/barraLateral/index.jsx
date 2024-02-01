
// ANCHOR --> IMPORTS REACT
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VariaveisContext } from "../../context/VariaveisContext";
// END REACT

// ANCHOR --> IMPORTS ICONS
import Logo from "../../assets/svg/logo/pontua_normal.svg";
import favIcon from "../../assets/svg/icons/fav_barralateral.svg";
import homeIcon from "../../assets/svg/icons/home_icon.svg";
import perfilIcon from "../../assets/svg/icons/perfil_icon.svg";
import logoutIcon from "../../assets/svg/icons/logout_icon.svg";
// END ICONS

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS

// ANCHOR --> IMPORTS COMPONENTS
import { LarguraTela } from "../larguraTela";
// END COMPONENTS

// ANCHOR --> IMPORTS PROP TYPES
import { bool, func, number, string } from "prop-types";
// END PROP TYPES

// ANCHOR --> IMPORTS REACT SVG
import { ReactSVG } from "react-svg";
// END REACT SVG


// SECTION --> COMPONENTE AUXILIAR PARA OPÇÕES DA BARRA LATERAL
const Option = ({ id, icon, label, onSelect, selecionado, callback }) => {
    
    // SECTION --> FUNÇÃO DE CALLBACK PARA PEGAR O ESTADO MAIS ATUAL DA VARIÁVEL
    const handleOptionClick = () => {
        onSelect(id);

        callback();
    };

    return(
        <>
            <ContainerOption $selecionado={selecionado} onClick={handleOptionClick}>
                <Icon src={icon} alt={"icone"} /> <span>{ label }</span>
            </ContainerOption>
        </>
    );
};
Option.propTypes = {
    id: number.isRequired,
    icon: string,
    label: string,
    onSelect: func.isRequired,
    selecionado: bool,
    callback: func
};

const ContainerOption = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;

    padding: 7px 0 7px 8px;

    border-radius: 8px;
    
    color: ${props => props.$selecionado ? props.theme.cores.laranja.orange500 : ""};
    
    background: ${props => props.$selecionado ? props.theme.cores.cinza.gray100 : ""};
    
    transition: .3s ease;

    column-gap: 14px;

    cursor: pointer;

    span {
        @media (max-width: 768px) {
            display: none
        }
    }
`;

const Icon = styled(ReactSVG)`
    svg {
        width: 20px;
        height: 20px;   
    }
`;


export const BarraLateral = () => {

    const { larguraTela } = useContext(VariaveisContext);

    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

    const navigate = useNavigate();

    // SECTION --> FUNÇÃO PARA SABER QUAL OPÇÃO FOI CLICADA
    const handleOpcaoSelecionada = (id) => {
        setOpcaoSelecionada(id);
    };

    const opcoes = [
        { id: 1, icon: homeIcon, label: 'Home', callback: () => { navigate("/agentes", { replace: true}) }},
        { id: 2, icon: perfilIcon, label: 'Perfil'},
        { id: 3, icon: logoutIcon, label: 'Sair', callback: () => {localStorage.clear(); window.location.reload()}},
    ];

    return(
        <>
            <ContainerBarra $largura={larguraTela}>
                <ContainerLogo>
                    <LogoPontua src={larguraTela <= 768 ? favIcon : Logo} alt={"Logomarca Pontua"} />
                </ContainerLogo>

                <Divider />

                <ContainerOptions>
                {
                    opcoes.map((opcao, index) => (
                        <Option
                            key={index}
                            id={opcao.id}
                            icon={opcao.icon}
                            label={opcao.label}
                            onSelect={handleOpcaoSelecionada}
                            selecionado={opcaoSelecionada === opcao.id}
                            callback={opcao.callback}
                        />
                ))}
                </ContainerOptions>                
            </ContainerBarra>

            <LarguraTela />
        </>
    );
};

const ContainerBarra = styled.div`
    width: 100%;
    max-width: ${props => props.$largura <= 768 ? "78px" : "256px"};
    height: 100vh;

    display: flex;
    flex-direction: column;

    align-items: ${props => props.$largura <= 768 ? "center" : ""};

    padding: 20px;

    background: ${props => props.theme.cores.bgColor.bg};

    row-gap: 10px;
`;

const Divider = styled.div`
    border: 1px solid ${props => props.theme.cores.auxiliares.divider};
`;

const ContainerLogo = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
`;

const LogoPontua = styled.img`
    margin-left: 8px;

    svg {
        fill: ${props => props.theme.cores.secundaria.preto};
    }

    @media (max-width: 768px) {
    height: 20px;
    }
`;

const ContainerOptions = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    row-gap: 10px;
`;