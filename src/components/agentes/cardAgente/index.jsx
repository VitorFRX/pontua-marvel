
// ANCHOR --> IMPORTS REACT ROUTER
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { VariaveisContext } from "../../../context/VariaveisContext.jsx";
// END REACT ROUTER

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS

// ANCHOR --> IMPORTS HELPERS
import { abreviaTexto } from "../../../helpers/abreviacao.js";
// END HELPERS

// ANCHOR --> IMPORTS PROPTYPES
import { number, string } from "prop-types";
// END PROPTYPES

export const CardAgente = ({ fotoAgente, nomeAgente, descricao, agenteID }) => {

    const { setAgenteID, setActiveTab } = useContext(VariaveisContext);

    const navigate = useNavigate();

    const handleIDAgente = () => {
        setAgenteID(agenteID);
    };

    return(
        <>
            <CardContainer onClick={() => {navigate("/perfil-agente", { replace: true }); handleIDAgente(); setActiveTab('visao_geral');}}>
                <FotoAgente src={fotoAgente} alt="Foto do Agente" />

                <NomeDescricaoContainer>
                    <NomeAgente>{nomeAgente}</NomeAgente>

                    <DescricaoAgente>
                        {
                            abreviaTexto(descricao, 114, 114)
                        }
                    </DescricaoAgente>
                </NomeDescricaoContainer>
            </CardContainer>
        </>
    );
};
CardAgente.propTypes = {
    nomeAgente: string,
    descricao: string,
    fotoAgente: string,
    agenteID: number,
};

const CardContainer = styled.div`
    max-width: 100%;
    width: 310px;

    padding: 20px;

    display: flex;
    align-items: center;

    border-radius: 10px;

    background-color: ${props => props.theme.cores.cinza.gray100};

    column-gap: 15px;

    cursor: pointer;

    @media (max-width: 768px) {
        width: 280px;
        flex-direction: column;

        row-gap: 10px;
    }
`;

const FotoAgente = styled.img`
    width: 83px;
    height: 119px;

    border-radius: 10px;
`;

const NomeDescricaoContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    row-gap: 10px;
`;

const NomeAgente = styled.h3`
    ${props => props.theme.tipografia.body16bold};
    color: ${props => props.theme.cores.auxiliares.preta};
`;

const DescricaoAgente = styled.p`
    ${props => props.theme.tipografia.body12regular};

    color: ${props => props.theme.cores.auxiliares.preta};
`;