
// ANCHOR --> IMPORTS REACT
import { useContext } from "react";
import { VariaveisContext } from "../../context/VariaveisContext";
// END REACT

// ANCHOR --> IMPORTS PROPTYPES
import { bool, string } from "prop-types";
// END PROPTYPES


// ANCHOR --> IMPORTS TOASTIFY
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// END TOASTIFY


export const Notificacao = ({ mensagem, tipoMensagem = "sucesso" }) => {

    const { dispararNotificacao } = useContext(VariaveisContext);

    if(tipoMensagem === "sucesso") {
        toast.success(mensagem, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    } else if(tipoMensagem === "alerta") {
        toast.warning(mensagem, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        
    } else if(tipoMensagem === "erro") {
        toast.error(mensagem, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return(
        <>
            { dispararNotificacao ? <ToastContainer /> : '' }
        </>
    );
};
Notificacao.propTypes = {
    mensagem: string,
    tipoMensagem: string,
    notificar: bool,
};