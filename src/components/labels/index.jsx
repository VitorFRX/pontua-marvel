// ANCHOR --> IMPORTS REACT ROUTER
import { Link } from "react-router-dom";
// END REACT ROUTER

// ANCHOR --> IMPORTS PROP TYPES
import { string } from "prop-types";
// END PROP TYPES

// ANCHOR --> IMPORTS COMPONENTS
import { EscudoIcon } from "../icons";
// END COMPONENTS

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS

// SECTION --> LABEL PARA TÍTULOS
export const LabelTitle = ({ titulo }) => {

    return(
        <>
            <TituloLabel>{titulo}</TituloLabel>
        </>
    );
}
LabelTitle.propTypes = {
    titulo: string,
};

const TituloLabel = styled.h1`
    ${props => props.theme.tipografia.body20regular};
`;

// SECTION --> LABEL PARA SUBTITULOS
export const LabelSubtitle = ({ subtitulo }) => {

    return(
        <>
            <SubtituloLabel>{subtitulo}</SubtituloLabel>
        </>
    );

}
LabelSubtitle.propTypes = {
    subtitulo: string,
};

const SubtituloLabel = styled.p`
    color: ${props => props.theme.cores.cinza.gray500};

    ${props => props.theme.tipografia.body14regular};
`;


// SECTION --> LABEL PARA LINKS DE RECUPERAÇÃO DE SENHA OU REENVIO DE CÓDIGOS
export const LabelLink = ({ texto, to,}) => {

    return(
        <>
            <ContainerIcon>
                <EscudoIcon /><LinkLabel to={to}>{texto}</LinkLabel>
            </ContainerIcon>
        </>
    );
};
LabelLink.propTypes = {
    texto: string,
    to: string,
    tituloLink: string,
};

const ContainerIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    column-gap: 4px;
`;

const LinkLabel = styled(Link)`
    ${props => props.theme.tipografia.body14regular}
    color: ${props => props.theme.cores.laranja.orange500};
`;


// SECTION --> LABEL CONVENCIONAL PERSONALIZADA
export const Label = styled.label`
    padding: 20px 14px;
`;