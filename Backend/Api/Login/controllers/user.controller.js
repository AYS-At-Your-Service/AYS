require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceID = process.env.TWILIO_SERVICE_SID;

const client = require('twilio')(accountSid, authToken);
const Userno = require('../modals/user.modal');
const { phone_num_schema } = require('../zod/types');

exports.signup = async (req,res)=>{
    const countryCode = req.body.countryCode;
    const phoneNumber = req.body.phoneNumber;
    try{
        await client.verify.v2.services(serviceID)
                        .verifications.create({
                            to:`+${countryCode}${phoneNumber}`,
                            channel:'sms',
                        })
    res.status(200).send("otp send successfully");
    }catch(error){
        console.log(error)
        res.json({msg:error})
    }
}

exports.signin = async (req,res) =>{
    const phonenumber = `${req.body.countryCode}${req.body.phoneNumber}`;
    const parsed_num = phone_num_schema.safeParse({phonenumber})
    if(!parsed_num.success){
        res.send({msg:"Not a Valid phone number"});
    }else{
        const phno = await Userno.findOne(
            {
                phoneNumber:phonenumber,
            }
        )
        if(!phno){
            const newUserno = new Userno({phoneNumber:phonenumber,});
            await newUserno.save();
            res.send({msg:"successfully saved"})
        }else{
            res.send({msg:"Record Already Present"});
        }
    }
}