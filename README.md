# Clonando Projeto

1º Crie uma pasta em um diretório de sua preferência.

- Recomendado - `.\Documents\www\` para que não haja erros de permissão do sistema.


2º Acesse o repositório

```cmd
cd Documents/www/
```


3º Clone o projeto dentro do repositório

```bash
git clone https://github.com/VitorFRX/pontua-marvel.git
```

4º Acesse a pasta do repositório que foi clonado.

```cmd
cd pontua-marvel
```

Se estiver fora do diretório `Documents/www` use o seguinte comando.

```cmd
cd Documents/www/pontua-marvel
```


## Instalando Dependências da Aplicação

Dentro do diretório projeto, instale as dependências do projeto.

```cmd
npm install
```

ou

```cmd
yarn install
```

Entre na pasta `server`

```cmd
cd server
```

Repita o processo, para instalar as dependências da aplicação Backend.

```cmd
npm install
```

ou

```cmd
yarn install
```

Para rodar o Front basta utilizar o comando `npm run dev` ou `yarn dev` dentro do diretório `pontua-marvel`.

Para rodar o Backend, acesse o diretório `pontua-marvel/server` através do `terminal` ou `cmd`, e rode o comando `npm run dev` ou `yarn dev` para incializar o servidor da API.

### DADOS MOCKADOS

No teste foi solicitado a autenticação via `Token JWT`, utilizando um e-mail e senha padrão, estão no arquivo `/server/controllers/auth.js`. Foi mockado no Backend um método que valida esta credencial, portanto para acessar a aplicação, na tela de login basta informar os dados abaixo:

```txt
E-Mail: user@example.com
Senha: password
```

### CREDENCIAIS API MAVEL

Para conseguir realizar a requisição para a API da Marvel proposta no projeto, é necessário obter uma `Chave de API (chave pública)` e um `Secret de API (chave privada)`, para gerar ambas siga a documentação no site oficial da API. 

```url
https://developer.marvel.com/documentation/authorization
```

Após concluir o processo renomeie o arquivo `.env-example` para `.env` e insira as informações. *Não altere o nome das variáveis de ambiente* apenas substitua os valores `{SUA CHAVE PÚBLICA}` e `{SUA CHAVE PRIVADA}`.

```env
# --------------- TOKENS API MARVEL -------------------- #

VITE_PUBLIC_K_MARVEL="SUA CHAVE PÚBLICA"

VITE_SECRET_K_MARVEL="SUA CHAVE PRIVADA"

# ------------------------------------------------------ #
```

### CREDENCIAIS BACKEND

No arquivo `.env` na pasta `server` possuem informações relacionadas a credenciais de uma conta `Gmail` e um `token` gerados apenas para este projeto para auxiliar no envio de e-mails de recovery de senha. Não são dados e contas reais são utilizados temporariamente para teste.

### RECOVERY DE SENHA

O E-Mail de recovery de senha é enviado normalmente para o e-mail informado no campo de `input` na tela de `Recuperação de Senha` simulando um serviço real, mas não é um link válido.

### OBERSAVAÇÃO

Alguns campos propostos no teste que seriam utilizados no `Tab Navigation` não estão mais presentes na API, porém tomei a liberdade de informar outros para fazerem suas respectivas funções de `consumo` e utilização para apresentação no Front da aplicação.