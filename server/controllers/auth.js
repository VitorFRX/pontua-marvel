
//ANCHOR --> IMPORTS JSON WEB TOKEN (JWT)
import jwt from 'jsonwebtoken';
// END JWT

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @description Caso o usuário tenha um `E-Mail` ou `Senha` válidos, é retornado o token de acesso.
 * @returns `token`
 */
export const loginUsuário = (req, res) => {

  const { email } = req.body;
  const { senha } = req.body;

  const isValidUser = email === 'user@example.com' && senha === 'password';

  if (isValidUser) {
    // STUB --> Criar token JWT
    const token = jwt.sign({ email }, process.env.SECRET_JWT, { expiresIn: 3600 });

    res.status(200).json({
      success: true, 
      mensagem: "Bem Vindo à Pontua! 🧡",
      token 
    });

  } else {

    res.status(401).json({
      success: false, 
        mensagem: 'Credenciais inválidas ❌',
        token: null
    });
  }
};