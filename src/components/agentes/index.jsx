
// ANCHOR --> IMPORTS REACT
import { useCallback, useContext, useEffect, useState } from "react";
import { VariaveisContext } from "../../context/VariaveisContext";
// END REACT

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS

// ANCHOR --> IMPORTS ICONS
import setaDireita from "../../assets/svg/icons/seta_direita.svg";
import setaEsquerda from "../../assets/svg/icons/seta_esquerda.svg";
import load from "../../assets/svg/icons/loading_icon.svg";
// END ICONS 

// ANCHOR --> IMPORTS COMPONENTS
import { CardAgente } from "./cardAgente";
// END COMPONENTS

// ANCHOR --> IMPORTS SERVICES
import { marvelAPI } from "../../services";
// END SERVICES

// ANCHOR --> IMPORTS HELPERS
import { TimeStamp } from "../../helpers/timeStamp";
// END HELPERS

// ANCHOR --> IMPORTS MD5
import md5 from "md5";
import { ReactSVG } from "react-svg";
// END MD5


// SECTION --> INSTANCIANDO TIMESTAMP
const timeStamp = TimeStamp();

// SECTION --> CRIANDO UM HASH MD5
const hash = md5(timeStamp + import.meta.env.VITE_SECRET_K_MARVEL + import.meta.env.VITE_PUBLIC_K_MARVEL);

export const Agentes = () => {

    const { setAgentes, termoPesquisa, larguraTela } = useContext(VariaveisContext);

    // SECTION --> VARIÁVEL PARA GUARDAR DADOS
    const [agente, setAgente] = useState();

    // SECTION --> VARIAVEL PARA CONTROLAR LOADING CARREGAMENTO
    const [carregamento, setCarregamento] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // SECTION --> FUNÇÃO PARA FAZER REQUISIÇÃO PARA API
    const handleAgentes = useCallback(() => {

        const offset = (currentPage - 1) * itemsPerPage;

        marvelAPI.get(`characters?limit=${itemsPerPage}&offset=${offset}&ts=${timeStamp}&apikey=${import.meta.env.VITE_PUBLIC_K_MARVEL}&hash=${hash}`)
        .then(res => {

            // STUB --> COLOCANDO DADOS NO STATE LOCAL
            setAgente(res.data.data);

            // STUB --> COLOCANDO DADOS NO STATE GLOBAL
            setAgentes(res.data.data);

            // STUB --> ATUALIZANDO STATE DE CARREGAMENTO
            setCarregamento(false);
            
        });
        
    }, [currentPage, setAgentes]);
    
    // SECTION --> FUNÇÃO PARA LIMITAR PAGINATE A 10 POR CLIQUE
    const renderPageNumbers = () => {
        const totalPages = Math.ceil(agente?.total / itemsPerPage);
        
        if (totalPages <= 10) {
            return Array.from({ length: totalPages }, (_, index) => (
                <PageNumber key={index} onClick={() => setCurrentPage(index + 1)} $active={currentPage === index + 1}>
                    {index + 1}
                </PageNumber>
            ));
        } else {
            const visiblePages = larguraTela <= 768 ? 4 : 10;
            const pages = [];
            let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
            let end = Math.min(totalPages, start + visiblePages - 1);

            if (end - start < visiblePages - 1) {
                start = Math.max(1, end - visiblePages + 1);
            }

            if (start > 1) {
                pages.push(
                    <PageNumber key={1} onClick={() => setCurrentPage(1)}>
                        1
                    </PageNumber>
                );
                if (start > 2) {
                    pages.push(<Ellipsis key="start-ellipsis">...</Ellipsis>);
                }
            }

            for (let i = start; i <= end; i++) {
                pages.push(
                    <PageNumber key={i} onClick={() => setCurrentPage(i)} $active={currentPage === i}>
                        {i}
                    </PageNumber>
                );
            }

            if (end < totalPages) {
                if (end < totalPages - 1) {
                    pages.push(<Ellipsis key="end-ellipsis">...</Ellipsis>);
                }
                pages.push(
                    <PageNumber key={totalPages} onClick={() => setCurrentPage(totalPages)}>
                        {totalPages}
                    </PageNumber>
                );
            }

            return pages;
        }
    };

    // SECTION --> CALLBACK FILTRO AGENTES
    const agentesFiltrados = agente?.results.filter((agenteFiltrado) => {
        return agenteFiltrado?.name.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
        agenteFiltrado?.id.toString().toLowerCase().includes(termoPesquisa.toString().toLowerCase()) ||
        agenteFiltrado?.modified.toLowerCase().includes(termoPesquisa.toLowerCase())

    });

    useEffect(() => {
        handleAgentes();

    }, [handleAgentes]);

    return(
        <>
            { carregamento ?
                <ContainerLoad>
                    <LoadIcon src={load} alt={"carregando"} />
                    <LabelLoading>Chamando todos os Agentes...</LabelLoading>
                </ContainerLoad>
                
                :
                
                <>
                    <ContainerAgentes>
                        { agentesFiltrados?.length !== 0 ?

                            agentesFiltrados?.map((data, index) => {                      
                                return <CardAgente 
                                            fotoAgente={data.thumbnail.path + "." + data.thumbnail.extension} 
                                            nomeAgente={data.name} 
                                            descricao={data.description} 
                                            agenteID={data.id} 
                                            key={index} 
                                        />
                            })
                            :
                            agente?.results?.map((data, index) => {                      
                                return <CardAgente 
                                            fotoAgente={data.thumbnail.path + "." + data.thumbnail.extension} 
                                            nomeAgente={data.name} 
                                            descricao={data.description} 
                                            agenteID={data.id} 
                                            key={index} 
                                        />
                            })
                        }
                    </ContainerAgentes>

                    <Pagination>
                        <BotaoPaginateAnterior $largura={larguraTela} onClick={() => setCurrentPage(currentPage - 1)}>
                            <Seta src={setaEsquerda} /> <span>Anterior</span>
                        </BotaoPaginateAnterior>
                            
                        {renderPageNumbers()}

                        <BotaoPaginateProximo $largura={larguraTela} onClick={() => setCurrentPage(currentPage + 1)}>
                            <Seta src={setaDireita} /> <span>Próximo</span>
                        </BotaoPaginateProximo>
                    </Pagination>
                </>
            }
        </>
    );
};

const ContainerAgentes = styled.div`
    width: 100%;

    display: flex;
    flex-flow: row wrap;

    padding: 20px;

    gap: 10px;
`;

const Pagination = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 16px;

    margin: 0 auto;
`;

const BotaoPaginateAnterior = styled.button`
    padding: ${props => props.$largura <= 768 ? "11px 0px" : "11px 20px"};

    display: flex;
    align-items: center;

    column-gap: 10px;

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: 1px solid ${props => props.theme.cores.auxiliares.borda};

    cursor: pointer;

    span {
        display: ${props => props.$largura <= 768 ? "none" : ""}
    };

    svg {
        margin-right: 10px;
    };
`;

const BotaoPaginateProximo = styled.button`
    padding: ${props => props.$largura <= 768 ? "8px 0px" : "8px 20px"};

    display: flex;
    align-items: center;

    column-gap: 10px;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 1px solid ${props => props.theme.cores.auxiliares.borda};

    cursor: pointer;

    span {
        display: ${props => props.$largura <= 768 ? "none" : ""};
    };

    svg {
        margin-right: 10px;
    };
`;

const Seta = styled(ReactSVG)`
    margin-left: 10px;

    color: 1px solid ${props => props.theme.cores.azuis.blue800};
`;

const PageNumber = styled.div`
    border: 1px solid ${props => props.theme.cores.auxiliares.borda};

    padding: 11px 12px;

    font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  
    cursor: pointer;
`;

const Ellipsis = styled.div`
    margin: 0 5px;
    
    font-weight: bold;
    
    cursor: default;
`;

const ContainerLoad = styled.div`
    width: 100%;

    margin-top: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;

    column-gap: 10px;
`;

const LabelLoading = styled.p`
    ${props => props.theme.tipografia.body20regular};

    color: ${props => props.theme.cores.auxiliares.preto};
`;

const LoadIcon = styled(ReactSVG)`
    animation: loading 3s ease-in infinite alternate;

    margin-bottom: 20px;

    svg {
        width: 60px;
        height: 60px;
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(360deg);
        }

        100% {
            transform: rotate(720deg);
        }
    };
`;