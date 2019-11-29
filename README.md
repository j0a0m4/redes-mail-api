# SendMail App
Esse app foi feito para o projeto da disciplina Redes I
Clique aqui para acessar o repo do [Client](https://github.com/j0a0m4/redes-mail-client)

## Servidor
Ao rodar o script `npm start` o servidor vai ouvir na porta 9000.

## Rotas
As rotas da API estão configuradas usando o Router do express
```javascript
import { Router } from 'express'
const routes = Router()

// Configurando GET request para 'localhost:9000/'
routes
.route('/')
  .get(rootHandler)
  
// Configurando POST request para 'localhost:9000/send'
routes
.route('/send')
  .post(sendHandler)

export default routes
```
### GET
A função `roothandler` é chamada toda vez que uma requisição GET é recebida pelo servidor na rota `localhost:9000/`

### POST
A funcionalidade principal do app se encontra na função `sendHandler` que é é chamada quando uma requisição POST é recebida na rota `localhost:9000/send`. Essa função é responsável pela funcionaliddade principal do app, pois é ela que vai chamar a função de criar email e enviar.

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
