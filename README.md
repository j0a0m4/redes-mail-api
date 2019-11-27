# SendMail App
Esse app foi feito para o projeto da disciplina Redes I
Clique aqui para acessar o repo do [Client](https://github.com/j0a0m4/redes-mail-client)

## Servidor
Ao rodar o script `npm start` o servidor vai ouvir na porta 9000.

## Rotas
As rotas da API estão configuradas usando o Router do express
```javascript
import express from 'express'
const routes = express.Router()

routes.route('/').get(rootHandler)
routes.route('/send').post(sendHandler)

export default routes
```

### localhost:9000/
#### GET
Responde com um JSON


### localhost:9000/send
#### POST
Chama a função create email com o payload

## Nodemailer
O nodemailer está configurado para usar o [mailtrap](https://mailtrap.io) como servidor de e-mail para teste.
É criado um objeto `transport` com as credenciais de configuração.
A função `transport.sendMail` é a responsável por mandar o email para o mailtrap. Ela recebe como parametros um objeto mensagem e uma callback function. O objeto mensagem contém os seguintes parâmetros
```javascript
const mensagem = {
  to: "abc@example.com",
  from: "bca@example.com",
  subject: "test",
  text: "corpo da mensagem..."
};
```
