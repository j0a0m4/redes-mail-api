import { createTransport } from 'nodemailer'
import authCredentials from './authCredentials'

const credentials = {
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: authCredentials
}

export const transport = createTransport(credentials)
