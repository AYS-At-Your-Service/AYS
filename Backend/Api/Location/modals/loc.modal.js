const mongoose = require('mongoose');
require('dotenv').config();
const url  = process.env.MONGO_URI;

mongoose.connect(url)

const locationSchema = mongoose.Schema({
    key:{
        type:Number,
        required:true,
        unique:true
    },
    main:{
        type: String,
        required : true,
    },
    sub:{
        type: String,
        required : true,
        unique:true
    }
})

module.exports = mongoose.model('Location',locationSchema)