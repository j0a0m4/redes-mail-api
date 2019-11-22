import transport from './sendEmail'

function sendCtrl(err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info)
  }
}

function createEmail(message) {
  console.log(message)
  // transport.sendMail(message, sendCtrl)
}

export default createEmail

/*
const message = {
    from: 'elonmusk@tesla.com', // Sender address
    to: 'to@email.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};
*/
