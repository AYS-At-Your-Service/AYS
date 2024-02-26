const { validations, otpValidation } = require('../middleware/validations');
const controller = require('../controllers/user.controller');
const { verifyOtp } = require('../middleware/verifyOtp');

module.exports = function(app){
    app.post(
        "/send",
        validations,
        controller.signup
    );
    app.post(
        "/verify",
        [validations,
        otpValidation,
        verifyOtp
    ],
        controller.signin
    )
}


