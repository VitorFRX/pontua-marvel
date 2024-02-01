
// ANCHOR --> IMPORTS REACT
import { useContext, useState } from "react";
import { VariaveisContext } from "../../context/VariaveisContext";
// END REACT

// ANCHOR --> IMPORTS REACT ICONS MD
import { MdOutlineRemoveRedEye, MdRemoveRedEye, MdOutlineCheck  } from "react-icons/md";
import buscaIcon from "../../assets/svg/icons/busca_icon.svg";
import emailIcon from "../../assets/svg/icons/email_icon.svg";
// END REACT ICONS MD

// ANCHOR --> IMPORTS PROP TYPES
import { array, bool, element, func, object, oneOfType, string } from "prop-types";
// END PROP TYPES

// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS

// ANCHOR --> IMPORTS REACT SVG
import { ReactSVG } from "react-svg";
// END REACT SVG


export const InputTexto = ({ children, senha = false, busca = false, email = false, }) => {

    const { mostrarSenha, setMostrarSenha } = useContext(VariaveisContext);

    const apresentarSenha = () => {
        if(mostrarSenha) { 
            setMostrarSenha(false);
        
        } else {
            setMostrarSenha(true);
        }
    };

    return(
        <>
            <InputContainer>
                { busca ?
                    <MostrarIcone>
                        <Icon src={buscaIcon} alt={"Icone Busca"} />
                    </MostrarIcone>
                    
                    : ''
                }

                { email ?
                    <MostrarIcone>
                        <Icon src={emailIcon} alt={"Icone E-Mail"} />
                    </MostrarIcone>
                    
                    : ''
                }

                {children}
                
                { senha ?
                    <MostrarSenha onClick={ () => apresentarSenha()}>
                        { mostrarSenha ? <MdRemoveRedEye /> : <MdOutlineRemoveRedEye />}
                    </MostrarSenha>
                    
                    : ''
                }
            </InputContainer>
        </>
    );

};
InputTexto.propTypes = {
    placeholder: string,
    senha: bool,
    busca: bool,
    email: bool,
    data: bool,
    children: element,
};

const InputContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid ${props => props.theme.cores.cinza.gray100};
    border-radius: 6px;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    };

    input[type=number] {
        appearance: none;
       -moz-appearance: textfield;
    };
`;

const MostrarSenha = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 24px;

    svg {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
`;

const MostrarIcone = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 24px;
        height: 24px;

        margin-left: 12px;

        cursor: pointer;
    }
`;

const Icon = styled(ReactSVG)`
    svg {
        width: 15px;
        height: 15px;
    };
`;

export const InputCheckBox = ({ checked, labelCheck }) => {

    const { marcado, setMarcado, setDispararNotificacao } = useContext(VariaveisContext);

    const handleMarcado = () => {
        setMarcado(!marcado);
        setDispararNotificacao(false);
    };

    return(
        <>
            <Container>
                <CheckBoxContainer onClick={handleMarcado} checked={checked}>
                    { checked ? <MdOutlineCheck /> : '' }

                </CheckBoxContainer>
            
                <LabelCheckBox>{ labelCheck }</LabelCheckBox>
            </Container>
        </>
    );
};
InputCheckBox.propTypes = {
    checked: bool,
    labelCheck: string,
};

const Container = styled.div`
    display: flex;
    
    column-gap: 10px;
`;

const CheckBoxContainer = styled.div`
  width: 21px;
  height: 21px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.checked ? props.theme.cores.laranja.orange400 : ''};

  border-radius: 4px;   
  border: 1px solid ${props => props.checked ? '' : props.theme.cores.cinza.cinza500};
  
  appearance: none;
  -webkit-appearance: none;
  
  outline: none;
  
  cursor: pointer;

  svg {
    fill: ${props => props.checked ? props.theme.cores.cinza.gray100 : ''};
  };
`;

const LabelCheckBox = styled.p`
    ${props => props.theme.tipografia.body14regular}

    color: ${props => props.theme.cores.cinza.gray500};
`;

export const InputSelect = ({ options, nome, onSelect }) => {

    // eslint-disable-next-line no-unused-vars
    const [selectedOption, setSelectedOption] = useState(null);
    const [labelOption, setLabelOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option, labelOption) => {
        setSelectedOption(option);
        setLabelOption(labelOption);
        setIsOpen(false);

        onSelect && onSelect({ nome: nome, formaPagamento: option });
    };

    return (
        <DropdownContainer>
            <SelectedOption onClick={() => setIsOpen(!isOpen)}>
                { labelOption || "Selecione uma opção" }
            </SelectedOption>

            { isOpen && (
                <OptionsList>
                {
                    options?.map((option, index) => (
                        <Option key={index} onClick={() => handleOptionClick(option.option, option.label)}>
                            {option.label}
                        </Option>
                    ))
                }
                </OptionsList>
            )}
        </DropdownContainer>
    );
};
InputSelect.propTypes = {
    options: array,
    nome: string,
    onSelect: oneOfType([func, object]),
};
  
const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const SelectedOption = styled.div`
    ${props => props.theme.tipografia.body14regular};

    padding: 13px 16px;
    
    border: 1px solid ${props => props.theme.cores.cinza.cinza500};
    border-radius: 6px;
    
    cursor: pointer;
    `;

const OptionsList = styled.ul`
    width: 100%;

    padding: 0;
    margin: 0;
    
    position: absolute;
    top: 100%;
    left: 0;
    
    background-color: ${props => props.theme.cores.cinza.gray100};
    
    border-radius: 6px;
    border: 1px solid #ccc;
    
    list-style-type: none;
    
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    z-index: 1;
`;

const Option = styled.li`
    padding: 10px;

    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.cores.laranja.orange400};
        color: ${props => props.theme.cores.cinza.gray100};
    }
`;