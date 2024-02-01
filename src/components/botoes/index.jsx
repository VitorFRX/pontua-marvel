// ANCHOR --> IMPORTS REACT ROUTER
import { Link } from "react-router-dom";
// END REACT ROUTER

// ANCHOR --> IMPORTS PROP TYPES
import { bool, func, string } from "prop-types";
// END PROP TYPES

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS


// BOTÃO PRIMÁRIO GRANDE
export const ButtonPrimario = styled.button`
  width: 100%;
  height: 44px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${props => props.theme.tipografia.body16semibold};
  
  color: ${props => props.theme.cores.cinza.gray100};
  
  background-color: ${props => props.theme.cores.laraja.orange400};
  
  border-radius: 6px;
  
  column-gap: 8px;
  
  cursor: pointer;

  transition: .4s ease-in;

  &:hover:not(:disabled) {
    color: ${props => props.theme.cores.cinza.gray100};

    background-color: ${props => props.theme.cores.cinza.gray100};

    border: 1px solid ${props => props.theme.cores.cinza.gray100};
  }

  &:disabled {
    pointer-events: none;
    background-color: ${props => props.theme.cores.cinza.gray500};  
    color: ${props => props.theme.cores.cinza.gray100};
  }

  svg {
    font-size: 24px;
  }
`;


export const ButtonPrimarioLink = styled(Link)`
  width: 100%;
  height: 57px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 10px;
  
  ${props => props.theme.tipografia.body16semibold};
  color: ${props => props.theme.cores.cinza.gray100};
  
  background-color: ${props => props.theme.cores.azuis.blue600};
  
  cursor: pointer;
  
  column-gap: 8px;

  transition: .4s ease;
  
  &:hover:not(:disabled){
    background-color: ${props => props.theme.cores.azuis.blue200};
  }

  &:disabled{
    pointer-events: none;
    background-color: ${props => props.theme.cores.cinza.gray100};  
    color: ${props => props.theme.cores.cinza.gray100};
  }
 
  svg {
    font-size: 24px;
  }
`;

export const ButtonSecundarioOutlined = styled.button`
  width: 100%;
  height: 44px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 1px solid ${props => props.theme.cores.laraja.orange400};
  border-radius: 6px;
  
  ${props => props.theme.tipografia.body16semibold};
  color: ${props => props.theme.cores.laranja.orange400};
  
  background-color: transparent;
  
  cursor: pointer;
  
  column-gap: 8px;

  transition: .4s ease;
  
  &:hover:not(:disabled){
    background-color: ${props => props.theme.cores.laraja.orange400};
    color: ${props => props.theme.cores.cinza.gray100};
  }

  &:disabled{
    pointer-events: none;

    color: ${props => props.theme.cores.cinza.gray500};
    
    border: 1px solid ${props => props.theme.cores.cinza.gray500};
  }
 
  svg {
    font-size: 24px;
  }
`;


export const ButtonPrimarioLinkOutlined = styled(Link)`
  width: 100%;
  height: 44px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 1px solid ${props => props.theme.cores.laraja.orange400};
  border-radius: 6px;
  
  ${props => props.theme.tipografia.body16semibold};
  color: ${props => props.theme.cores.laranja.orange400};
  
  /* background-color: transparent; */
  
  cursor: pointer;
  
  column-gap: 8px;

  transition: .4s ease;
  background-image: url("../../assets/img/1.png");
  
  &:hover:not(:disabled){
    background-color: ${props => props.theme.cores.laraja.orange400};
    color: ${props => props.theme.cores.cinza.gray100};
  }

  &:disabled{
    pointer-events: none;
    background-color: ${props => props.theme.cores.cinza.gray500};  
    color: ${props => props.theme.cores.cinza.gray100};
  }
 
  svg {
    font-size: 24px;
  }
`;

export const ButtonPrimarioLinkCustom = ({ label, to, disabled, comp }) => {
  
  return(
    <>
      <ButtonContainer disabled={disabled} onClick={comp}>
        <LinkButton to={to} disabled={disabled}>{label}</LinkButton>
      </ButtonContainer>
    </>
  );
};
ButtonPrimarioLinkCustom.propTypes = {
  label: string,
  to: string,
  disabled: bool,
  comp: func,
};

const ButtonContainer = styled.button`
  border-radius: 6px;

  &:disabled {
    pointer-events: none;
    background-color: ${props => props.theme.cores.cinza.gray500};  
    color: ${props => props.theme.cores.cinza.gray100};
  }
`;

const LinkButton = styled(Link)`
  width: 100%;
  height: 44px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${props => props.theme.tipografia.body16semibold};
  
  color: ${props => props.theme.cores.cinza.gray100};
  
  background-color: ${props => props.disabled ? props.theme.cores.cinza.gray100 : props.theme.cores.laraja.orange400};
  
  border-radius: 6px;
  
  column-gap: 8px;
  
  cursor: pointer;

  transition: .2s ease-in;

  &:hover:not(:disabled) {
    background-color: ${props => props.theme.cores.laranja.orange400};
    color: ${props => props.theme.cores.cinza.gray500};
  }

  &:disabled {
    pointer-events: none;
    background-color: ${props => props.theme.cores.cinza.gray500};  
    color: ${props => props.theme.cores.cinza.gray100};
  }

  svg {
    font-size: 24px;
  }
`;