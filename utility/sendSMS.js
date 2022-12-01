const dotenv = require('dotenv').config();
const twilio = require('twilio')(process.env.SID, process.env.AUTH_TOKEN);


const twilioNumber = process.env.CELL_NUMBER;

//Create SMS
const sendSms = (to, sms)=>{

    twilio.messages.create({
        from : twilioNumber,
        to : to,
        body : sms
    })
    .then( res=>{
        console.log('Message sent successfully');
    })
    .catch(error => {
        console.log(error.message);
    })

}

module.exports = sendSms;