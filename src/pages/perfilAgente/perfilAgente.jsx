
// ANCHOR --> IMPORTS REACT
import { useContext } from "react";
import { VariaveisContext } from "../../context/VariaveisContext";
// END REACT

// ANCHOR --> IMPORTS COMPONENTS
import { BarraLateral } from "../../components/barraLateral/index.jsx";
// END COMPONENTS

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS

// ANCHOR --> IMPORTS COMPONENTS
import { NavegacaoAbas } from "../../components/navegacaoAbas";
import { CardPerfil } from "../../components/cardPerfil";
import { ButtonPrimarioLink } from "../../components/botoes";
// END COMPONENTS


export const PerfilAgente = () => {

    // SECTION --> VARIAVEIS VINDAS DO CONTEXT PARA ATUALIZAR ABA ATIVA
    const { agentes, agenteID } = useContext(VariaveisContext);

    const opcoesAbas = [
        {
            opcao: "visao_geral",
            label: "Visão Geral"
        },
        {
            opcao: "comics",
            label: "Quadrinhos"
        },
        {
            opcao: "participacoes",
            label: "Participações"
        },
        {
            opcao: "historias",
            label: "Histórias"
        },
        {
            opcao: "eventos",
            label: "Eventos"
        }
    ];

    console.log(agentes);

    return(
        <>
            <Container>
                <BarraLateral />
                
                {
                    agentes?.results?.map((data, index) => {
                        if(data.id === agenteID) {
                            return(
                                <ContainerPerfil key={index}>
                                    <Divider />
                                    
                                    <TituloNavContainer>
                                        <Titulo>
                                            <LabelPerfil>
                                                Pefil
                                            </LabelPerfil>

                                            <BarraPerfil>/</BarraPerfil>

                                            <TituloAgente>
                                                {data.name}
                                            </TituloAgente>
                                        </Titulo>

                                        <NavegacaoAbas abas={opcoesAbas} />
                                    </TituloNavContainer>

                                    <CardPerfil 
                                        fotoAgente={data.thumbnail.path + "." + data.thumbnail.extension} 
                                        nomeAgente={data.name} 
                                        descricao={data.description} 
                                        comics={data.comics.items} 
                                        series={data.series.items}
                                        stories={data.stories.items}
                                        events={data.events.items}
                                        key={index}
                                    />

                                    <BotaoVoltar to={"/agentes"}>Voltar</BotaoVoltar>
                                </ContainerPerfil>
                            );
                        }
                    })
                }
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
`;

const ContainerPerfil = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: ${props => props.$largura <= 768 ? "" : "100px 40px"};

    row-gap: 30px;
`;

const TituloNavContainer = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;

    row-gap: 24px;
`;

const Titulo = styled.div`
    display: flex;
    
    column-gap: 6px;
`;

const TituloAgente = styled.p`    
    color: ${props => props.theme.cores.cinza.gray500};

    ${props => props.theme.tipografia.body24light};
`;

const LabelPerfil = styled.p`
    color: ${props => props.theme.cores.azuis.blue800};
    ${props => props.theme.tipografia.body24bold};
`;

const BarraPerfil = styled.p`
    color: ${props => props.theme.cores.laranja.orange500};
    ${props => props.theme.tipografia.body24bold};
`;

const BotaoVoltar = styled(ButtonPrimarioLink)`
    width: 130px;
    height: 50px;
`;

const Divider = styled.div`
    border: 1px solid ${props => props.theme.cores.auxiliares.divider};
`;