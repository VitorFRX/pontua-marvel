
// ANCHOR --> IMPORTS REACT ROUTER
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { VariaveisContext } from "../../context/VariaveisContext.jsx";
// END REACT ROUTER

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS

// ANCHOR --> IMPORTS PROPTYPES
import { array, string } from "prop-types";
// END PROPTYPES


export const CardPerfil = ({ fotoAgente, nomeAgente, descricao, comics, series, stories, events }) => {

    // SECTION --> VARIAVEIS VINDAS DO CONTEXT
    const { activeTab, larguraTela } = useContext(VariaveisContext);

    const navigate = useNavigate();

    return(
        <>           
            <CardContainer onClick={() => navigate("/perfil-agente", { replace: true })}>
                { activeTab === "visao_geral" ?
                    <>
                        <ContainerFotoNomeAgente $largura={larguraTela}>
                            <FotoAgente src={fotoAgente} alt="Foto do Agente" />
                            
                            <NomeDescricaoContainer>
                                <NomeAgente>{nomeAgente}</NomeAgente>
                                <DescricaoAgente>{descricao}</DescricaoAgente>
                            </NomeDescricaoContainer>
                        </ContainerFotoNomeAgente>
                    </>
                    :
                    ""
                }

                { activeTab === "comics" ?
                    <>
                        <ListaContainer>
                            {
                                comics?.map((data, index) => {
                                    return <Lista key={index}>{ data.name }</Lista>
                                })
                            }
                        </ListaContainer>
                    </>
                    :
                    ''
                }

                { activeTab === "participacoes" ?
                    <>
                        <ListaContainer>
                            {
                                series?.map((data, index) => {
                                    return <Lista key={index}>{ data.name }</Lista>
                                })
                            }
                        </ListaContainer>
                    </>
                    :
                    ""
                }

                { activeTab === "historias" ?
                    <>
                        <ListaContainer>
                            {
                                stories?.map((data, index) => {
                                    return <Lista key={index}>{ data.name }</Lista>
                                })
                            }
                        </ListaContainer>
                    </>
                    :
                    ""
                }

                { activeTab === "eventos" ?
                    <>
                        <ListaContainer>
                            { events.length ?
                                events?.map((data, index) => {
                                    return <Lista key={index}>{ data.name }</Lista>
                                })
                                :
                                "Não há eventos para este Agente."
                            }
                        </ListaContainer>
                    </>
                    :
                    ""
                }
            </CardContainer>
        </>
    );
};
CardPerfil.propTypes = {
    nomeAgente: string,
    descricao: string,
    fotoAgente: string,
    comics: array,
    series: array,
    stories: array,
    events: array,
};

const CardContainer = styled.div`
    max-width: 100%;
    width: 90%;

    padding: 20px;

    display: flex;
    align-items: center;

    border-radius: 10px;

    background-color: ${props => props.theme.cores.cinza.gray100};

    column-gap: 15px;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;

        row-gap: 10px;
    }
`;

const ContainerFotoNomeAgente = styled.div`
    display: flex;

    flex-direction: ${props => props.$largura <= 768 ? "column" : ""};
    justify-content: ${props => props.$largura <= 768 ? "center" : ""};
    align-items: ${props => props.$largura <= 768 ? "center" : ""};

    row-gap: ${props => props.$largura <= 768 ? "20px" : ""};
    column-gap: 20px;
`;

const FotoAgente = styled.img`
    width: 100px;

    border-radius: 50%;
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
    ${props => props.theme.tipografia.body14regular};

    color: ${props => props.theme.cores.auxiliares.preta};
`;

const ListaContainer = styled.ul`
    display: flex;
    flex-direction: column;

    padding: 0 20px;
`;

const Lista = styled.li`
    ${props => props.theme.tipografia.body14regular};

    color: ${props => props.theme.cores.cinza.gray500};

    list-style: disc;
`;