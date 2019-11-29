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
routes.route('/').get(rootHandler)

// Configurando POST request para 'localhost:9000/send'
routes.route('/send').post(sendHandler)

export default routes
```

### GET

```javascript
function rootHandler(req, res) {
  // Responde com um JSON
  res.json({ status: 'Server is running!' })
}
```

A função `roothandler` é chamada toda vez que uma requisição GET é recebida pelo servidor na rota `localhost:9000/`

### POST

```javascript
function sendHandler(req, res) {
  createEmail(req.body)
  res.json({ message: 'got it' })
}
```

A funcionalidade principal do app se encontra nessa rota. A função `sendHandler` é chamada quando uma requisição POST é recebida em `localhost:9000/send`. Essa função é responsável pela chamada da função principal do app, `createMail` que vai criar e enviar o email através do nodemailer.

## Nodemailer

O nodemailer está configurado para usar o [mailtrap](https://mailtrap.io) como servidor SMTP de e-mail para teste. É criado um objeto `transport` com as credenciais de configuração.

```javascript
import { createTransport } from 'nodemailer'
import { authCredentials } from './authCredentials'

const credentials = {
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: authCredentials
}
const transport = createTransport(credentials)
```

A função `transport.sendMail` é a responsável por mandar o email para o mailtrap. Ela recebe como parametros um objeto mensagem e uma callback function.

```javascript
function createEmail(message) {
  console.log(message)
  transport.sendMail(message, sendCtrl)
}

export default createEmail
```

### Callback Function

```javascript
function sendCtrl(err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info)
  }
}
```

### Objeto mensagem

```javascript
const mensagem = {
  to: 'meuemail@example.com',
  from: 'seuemail@example.com',
  subject: 'teste',
  text: 'Lorem impsum amet'
}
```
