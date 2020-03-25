const Twilio = require('twilio');
require('dotenv').config();

// const SID = process.env.SID;
// const AUTH = process.env.AUTH;

const client = new Twilio(process.env.SID, process.env.AUTH);



client.messages
  .list()
  .then(messages =>
     console.log(`The most recent message is ${messages[0].body}`)
   );

   console.log('Gathering your message log');
