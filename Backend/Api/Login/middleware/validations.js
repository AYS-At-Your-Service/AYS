const { phone_num_schema } = require('../zod/types');

//Phone Number Validation middeleware
exports.validations = function(req,res,next){
    const countryCode = req.body.countryCode;
    const phoneNumber = req.body.phoneNumber;
    const phonenumber = `${countryCode}${phoneNumber}`;
    const parsed_num = phone_num_schema.safeParse({phonenumber});
    if(!parsed_num.success){
        res.status('404').json({msg:"It is not a valid phone number"})
    }
    next();
}

//otp validation
exports.otpValidation = function(req,res,next){
    const otp = req.body.otp;
    const len = otp.length;
    if(len<4 || len>4){
        res.status('404').json({msg:"Enter 4 digit number"})
    }else{
        next();
    }
}