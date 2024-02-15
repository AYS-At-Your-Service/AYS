require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceID = process.env.TWILIO_SERVICE_SID;
const client = require('twilio')(accountSid, authToken);

const port = process.env.PORT;
//starting express 
const express = require('express');
const app = express();

app.use(express.json());

//sending otp verification
app.post('/send-otp',async (req,res)=>{
    const countryCode = req.body.countryCode;
    const phoneNumber = req.body.phoneNumber;
    try{
        const otpResponse = await client.verify.v2.services(serviceID)
                        .verifications.create({
                            to:`+${countryCode}${phoneNumber}`,
                            channel:'sms',
                        });
    res.status(200).send(`otp send successfully : ${JSON.stringify(otpResponse)}`);
    }catch{
        res.status(404).send("Did You Receive the otp?");
    }
})

//verify the sended otp
app.post('/verify-otp',async (req,res)=>{
    const countryCode = req.body.countryCode;
    const phoneNumber = req.body.phoneNumber;
    const otp = req.body.otp;
try{
    const otpVerified = await client.verify.v2.services(serviceID)
                        .verificationChecks.create({
                            to:`+${countryCode}${phoneNumber}`,
                            code:otp
                        });
    res.status(200).send(`${JSON.stringify(otpVerified.status)}`);
}catch{
    res.status(404).send("It is already approved!");
}
})

app.listen(port, () => console.log('Example app listening on port 3000!'));