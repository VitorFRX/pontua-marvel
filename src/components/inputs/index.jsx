
// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled, { css } from "styled-components";
// END STYLED COMPONENTS


export const Input = styled.input`
  width: 100%;
  height: 48px;
  
  padding: 30px 16px;
  
  background-color: transparent;
  
  ${props => props.theme.tipografia.body14bold}
  
  color: ${props => props.theme.cores.azuis.blue500};

  &::-ms-reveal {
    display: none;
  }

  &:disabled{
    color: ${props => props.theme.cores.cinza.gray100};
    background-color: ${props => props.theme.cores.cinza.gray100};
    border: none; 
  }

  &::placeholder{
    color: ${props => props.theme.cores.cinza.gray500};
    ${props => props.theme.tipografia.body14regular};
  }

  &[type="password"]{
    ${props => props.theme.tipografia.body14regular}
    letter-spacing: 3px;

    &::placeholder{
      transform: translateY(-1px);
      letter-spacing: 0;      
    }
  }

  &[type="number"]{
    ${props => props.theme.tipografia.body14regular}

    appearance: none;
    margin: 0;

    &::placeholder{
      transform: translateY(-1px);
      letter-spacing: 0;      
    }
  }

  ${props => props.erro && css`
    color: ${props => props.theme.cores.alertas.perigo};
    border: 1px solid ${props => props.theme.cores.alertas.perigo};
    
    &::placeholder{
      color: ${props => props.theme.cores.alertas.perigo};
    }
  `};

  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`;