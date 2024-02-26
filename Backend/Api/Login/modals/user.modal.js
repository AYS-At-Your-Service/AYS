require('dotenv').config();
const mongoose = require('mongoose');
const url  = process.env.MONGO_URI;


mongoose.connect(url)

const phoneNumber_schema = mongoose.Schema({
    phoneNumber : String,
})

module.exports = mongoose.model('User',phoneNumber_schema);