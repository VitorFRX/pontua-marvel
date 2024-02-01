// ANCHOR --> IMPORTS PROP TYPES
import { string } from "prop-types";
// END PROP TYPES

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS

// ANCHOR --> IMPORTS COMPONENTS
import { ButtonPrimarioLink } from "../../components/botoes";
// END COMPONENTS

// ANCHOR --> IMPORTS IMAGES
import Logo from "../../assets/svg/logo/pontua_normal.svg";
// END IMAGES

export const NotFound = ({to = '/agentes'}) => {

  return (
    <NotFoundMain>
      <LogoPontua src={Logo} />
      <NotFoundDiv>
        <NotFoundH1>404</NotFoundH1>
        <NotFoundP>Pedimos desculpas! Não foi possível encontrar a página que você estava procurando.</NotFoundP>
      </NotFoundDiv>

      <BotaoVoltar to={to}>Voltar</BotaoVoltar>
    </NotFoundMain>
  );
}
  
NotFound.propTypes = {
  to: string.isRequired,
};

  
const NotFoundMain = styled.div`
  width: 100%;
  height: 100%;
  height: 100vh;

  display: flex;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 28px;
`;

const LogoPontua = styled.img`
  height: 90px;

  margin-bottom: 50px;

  svg {
    fill: ${props => props.theme.cores.secundaria.preto};
  }

  @media (max-width: 768px) {
    height: 73px;
  }
`;

const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 679px;
`;

const NotFoundH1 = styled.h1`
  ${props => props.theme.tipografia.tituloh4};
  font-size: 116px;
  color: ${props => props.theme.cores.laranja.orange500};
`;

const NotFoundP = styled.p`
  text-align: center;
  ${props => props.theme.tipografia.subTitulo2};
  color: ${props => props.theme.cores.secundaria.preto};
`;

const BotaoVoltar = styled(ButtonPrimarioLink)`
  width: 296px;
  margin-top: 30px;

  color: ${props => props.theme.cores.auxiliares.white};
`;