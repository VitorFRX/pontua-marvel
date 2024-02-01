
// ANCHOR --> IMPORTS SYLED COMPONENTS
import { ThemeProvider } from "styled-components"
import { theme } from "./themes/index";
// END COMPONENTS

// ANCHOR --> IMPORTS MUI
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "dayjs/locale/pt-br";
// END MUI

//NOTE --> IMPORTS REACT E REACT ROUTER
import { VariaveisContext } from "./context/VariaveisContext";
import { useContext } from "react";
import { Paths } from "./routes/routes";
// END REACT E REACT ROUTER

// ANCHOR --> IMPORTS NOTIFICAÇÃO
import { Notificacao } from "./components/notification";
// END NOTIFICAÇÃO

function App() {

  const { mensagemNotificacao, tipoNotificacao } = useContext(VariaveisContext);


  return (
    <>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} dateFormats={{keyboardDate: "DD/MM/YYYY"}} adapterLocale="pt-br">

          <Notificacao mensagem={mensagemNotificacao} tipoMensagem={tipoNotificacao} />

          <Paths />
        </LocalizationProvider>
      </ThemeProvider>
    </>
  )
}

export default App
