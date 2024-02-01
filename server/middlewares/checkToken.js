
// ANCHOR --> IMPORTS JWT
import jwt from "jsonwebtoken";
// END JWT

export const checkToken = (req, res, next) => {

    const token = req.headers["x-access-token"];

    if(!token) {
        return res.status(401).json({
            mensagem: "Acesso Negado ❌",
        });
    }

    try {
        const secret = process.env.SECRET;

        jwt.verify(token, secret, (err, decoded) => {
            if(err) {
                return res.status(401).json({
                    mensagem: "Acesso Negado ❌",
                });
            };

            req.usuario_id = decoded.usuario_id;
            next();
        });

    } catch(e) {
        res.status(400).json({
            mensagem: "Token Inválido ❌"
        });
    }
};