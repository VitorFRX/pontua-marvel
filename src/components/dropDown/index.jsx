
// ANCHOR --> IMPORTS PROP TYPES
import { bool, element, string } from "prop-types";
// END PROP TYPES

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS


export const DropDownConta = ({ label, children, show }) => {

    return(
        <>
            <ContainerDropDown $show={show}>
                { label ? <TituloDropDown>{label}</TituloDropDown> : '' }

                {children}
            </ContainerDropDown>
        </>
    );
};
DropDownConta.propTypes = {
    label: string,
    children: element,
    show: bool,
};

const ContainerDropDown = styled.div`
    width: 100%;
    width: 300px;

    display: ${ props => props.$show ? "flex" : "none" };
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 20px;

    position: absolute;
    top: 86px;
    right: 30px;

    border: 1px solid ${props => props.theme.cores.neutras.neutral_color_400};
    border-radius: 6px;

    background: ${props => props.theme.cores.bgColor.bgSelecionado};

    transition: .3s ease;
    
    gap: 20px;
`;


const TituloDropDown = styled.p`
    ${props => props.theme.tipografia.body16regular};

    color: ${props => props.theme.cores.neutras.neutral_color_700};
`;