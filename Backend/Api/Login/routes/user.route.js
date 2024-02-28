const {otpValidation, phoneNumberValidation } = require('../middleware/validations');
const controller = require('../controllers/user.controller');
const { verifyOtp } = require('../middleware/verifyOtp');

module.exports = function(app){
    app.post(
        "/sendOTPtoUser",
        [phoneNumberValidation],
        controller.sendOTP
    );
    app.post(
        "/verifyAndCreateUser",
        [phoneNumberValidation,
        otpValidation,
        verifyOtp
    ],
        controller.createUser
    )
}


