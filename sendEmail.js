import { createTransport } from 'nodemailer'

const authCredentials = {
  user: 'f309105f192a2f',
  pass: '7a4345ef45763e'
}

const credentials = {
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: authCredentials
}

const transport = createTransport(credentials)

function sendCtrl(err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info)
  }
}

function createEmail(message) {
  console.log(message)
  transport.sendMail(message, sendCtrl)
}

export default createEmail
