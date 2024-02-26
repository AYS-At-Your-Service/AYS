const zod = require('zod');

//Regular Expression for Phone Number
const phoneRegex = new RegExp(
    '(0|91)?[6-9][0-9]{10}'
)

//Schema for phone number validation
const phone_num_schema = zod.object({
    phonenumber : zod.string().regex(phoneRegex)
})

module.exports = {phone_num_schema}