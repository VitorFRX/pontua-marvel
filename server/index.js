// ANCHOR --> IMPORTS EXPRESS
import express from "express";
// END EXPRESS

// ANCHOR --> IMPORTS CORS
import cors from "cors";
//END CORS

// ANCHOR --> IMPORTS - ROUTES
import routes from "./routes/routes.js";
// END ROUTES

// ANCHOR --> IMPORTS BODY PARSER
import bodyParser from "body-parser";
// END BODY PARSER


// SECTION --> CONFIGURAÇÕES DO EXPRESS, CORS e MAPEAMENTO DA PORTA
const app = express();
const port = process.env.PORT_EXPRESS || 3001;
// END CONFIGURAÇÕES

app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true, limit: '2mb' }));

app.use(cors());

app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '2mb' }));

app.use(routes);

// ----------------------------------------------------------------------------------- //

// ANCHOR --> CONFIGURAÇÃO DE AUDIÇÃO DA PORTA DO EXPRESS
app.listen(port, () => {
    try {
        console.log(`✅ API Rodando na porta ${port}`);
    
    } catch(e) {
        console.log(`❌ ${e}`);
    }
});