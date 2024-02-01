
// ANCHOR --> IMPORTS REACT
import { useContext, useState } from "react";
import { VariaveisContext } from "../../context/VariaveisContext";
// END REACT

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS

// ANCHOR --> IMPORTS PROP TYPES
import { arrayOf, object } from "prop-types";
// END PROP TYPES

export const NavegacaoAbas = ({ abas }) => {

    // SECTION --> VARIAVEIS VINDAS DO CONTEXT PARA ATUALIZAR ABA ATIVA
    const { setActiveTab } = useContext(VariaveisContext);

    const [click, setClick] = useState(abas.map((data) => data.opcao === "visao_geral" ? true : false));
  
    const handleClick = (tabName, index) => {
        setActiveTab(tabName);

        const novoClick = click.map((_, i) => i === index);
        setClick(novoClick);
    };
  
    return (
        <>
            <ContainerAbas>
                {
                    abas?.map((data, index) => {
                        return <OpcaoAba 
                                    $click={click[index]} 
                                    onClick={() => handleClick(data.opcao, index)} 
                                    key={index}>{ data.label }
                                </OpcaoAba>
                    })
                }
            </ContainerAbas>
        </>
    );
};
NavegacaoAbas.propTypes = {
    abas: arrayOf(object),
};


const ContainerAbas = styled.div`
    width: 100%;
    
    display: flex;

    column-gap: 24px;

    @media (max-width: 768px) {
        width: 100%;

        flex-direction: column;
        align-items: center;
        justify-content: center;

        row-gap: 20px;
    }
`;

const OpcaoAba = styled.p`
    position: relative;
        
    color: ${props => props.theme.cores.azuis.blue800};
    ${props => props.theme.tipografia.body16regular};  
    
    transition: .3s ease;
    
    cursor: pointer;
    
    z-index: 1;

    transition: width .3s ease;

    &::after {
        width: ${props => props.$click ? "100%" : "0"};
        height: 2px;

        margin-top: 10px;

        content: "";

        display: ${props => props.$click ? "block" : "none"};

        background-color: ${props => props.theme.cores.azuis.blue800};    
    }  
`;