import express from 'express'
import createEmail from './sendEmail'

const routes = express.Router()

// Root
routes.route('/').get(rootHandler)

// Send
routes.route('/send').post(sendHandler)

function rootHandler(req, res) {
  res.json({ status: 'Server is running!' })
}

function sendHandler(req, res) {
  createEmail(req.body)
  res.json({ message: 'got it' })
}

export default routes
