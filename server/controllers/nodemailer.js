
// ANCHOR --> IMPORTS NODEMAILER
import nodemailer from "nodemailer";
// END NODEMAILER

// ANCHOR --> IMPORTS FILE SYSTEM
import fs from "fs";
import { fileURLToPath } from 'url';
import path from "path";
// FILE SYSTEM

// ANCHOR --> IMPORTS HANDLE BARS
import Handlebars from "handlebars";
// END HANDLE BARS


// MÉTODO PARA ENVIAR E-MAIL AO USUÁRIO
export const postEmail = async (req, res) => {

  const { email } = req.body;

  const textoSimples = `
    Vá para a Bonii ( https://www.pontua.com.br )

    *******************************************
    Olá Pontua, Seja Bem Vindo(a)! 🧡
    *******************************************
    
    Aqui está o link para redefinição de senha
    que você solicitou.
    
    http://localhost:5173/recuperacao
    
    Se você não se inscreveu na Pontua, por gentileza
    ignore esta mensagem!
    
    Este e-mail foi enviado de forma segura, contendo
    verificação e criptografia de ponta a ponta. Não compartilhe
    nenhuma informação repassada aqui.
  `;

  const diretorioAtualArquivo = fileURLToPath(import.meta.url);
  const diretorioAtual = path.dirname(diretorioAtualArquivo);
  const textoHTML = fs.readFileSync(path.join(diretorioAtual, './template/gmail.html'), 'utf-8').toString();
  const template = Handlebars.compile(textoHTML);
  const variaveis = {
    nome: "Pontua",
  };

  const htmlEmail = template(variaveis);

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_NODEMAILER,
        pass: process.env.SENHA_NODEMAILER,
      },
    });

    const mensagem = {
      from: `"Pontua" <pontua@pontua.com.br>`,
      to: `${email}`,
      subject: "Recuperação de Senha - Pontua! 🧡",
      text: textoSimples,
      html: htmlEmail,
    };

    await transporter.sendMail(mensagem);
    
    res.send({ 
        success: true,
        mensagem: "E-Mail Enviado com Sucesso! 😆",
     });
    
  } catch(e) {
    if(e) {
      console.log(e);

      return res.send({ 
        success: false,
        mensagem: "Não foi possível enviar o E-Mail.",
     });
    }
  }

  
};