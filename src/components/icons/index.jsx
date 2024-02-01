
// ANCHOR --> IMPORTS ICONS
import login_icon from "../../assets/svg/icons/login_alt.svg";
import escudo_icon from "../../assets/svg/icons/interrogatorio-de-escudo.svg";
// END ICONS

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS

// ANCHOR --> IMPORTS REACT SVG
import { ReactSVG } from "react-svg";
// END REACT SVG


export const LoginOutIcon = () => {

    return(
        <>
            <Icon src={login_icon} alt={"Ícone Login"} />
        </>
    );
};

const Icon = styled(ReactSVG)`
    svg {
        width: 13px;
        height: 13px;
    }
`;


export const EscudoIcon = () => {

    return(
        <>
            <Icon src={escudo_icon} alt={"Ícone Login"} />
        </>
    );
};