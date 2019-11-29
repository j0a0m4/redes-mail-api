import { Router } from 'express'
import createEmail from './sendEmail'

const routes = Router()

routes.route('/').get(rootHandler)
routes.route('/send').post(sendHandler)

function rootHandler(req, res) {
  res.json({ status: 'Server is running!' })
}

function sendHandler(req, res) {
  createEmail(req.body)
  res.json({ message: 'got it' })
}

export default routes
