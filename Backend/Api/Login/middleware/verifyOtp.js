require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceID = process.env.TWILIO_SERVICE_SID;
const client = require('twilio')(accountSid, authToken);


//Verify the otp middleware 
exports.verifyOtp = async (req,res,next) => {
    const countryCode = req.body.countryCode;
    const phoneNumber = req.body.phoneNumber;
    const otp = req.body.otp;
try{
    const ver = await client.verify.v2.services(serviceID)
                        .verificationChecks.create({
                            to:`+${countryCode}${phoneNumber}`,
                            code:otp
                        });
    if(ver.status == "approved"){
        next();
    }else{
        res.send({msg:"Entered Otp is wrong"});
    }

}catch(error){
    console.log(error);
    res.json({msg:error});
}
}