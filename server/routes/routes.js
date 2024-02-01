// ANCHOR --> IMPORT - EXPRESS
import express from "express";

// ANCHOR --> IMPORTS MIDDLEWARES
// import { checkToken } from "../middlewares/checkToken.js";
// END MIDDLEWARES

// ANCHOR --> IMPORTS - MÉTODOS COM REQUISIÇÕES HTTP
import { loginUsuário } from "../controllers/auth.js";
import { postEmail } from "../controllers/nodemailer.js";
// END HTTP

const router = express.Router();


// SECTION --> ROTAS TIPO - POST -------------------- //

    // LINK ----------------------- USUARIOS --------------------------- //

        // STUB --> Verificação de Login
        router.post("/login", loginUsuário);

    // ---------------------------------------------------------------- //


    // FIXME --> ROTA DE TESTE PARA ENVIO DE E-MAIL
    router.post("/email", postEmail);

// ------------------------------------------------- //

export default router;