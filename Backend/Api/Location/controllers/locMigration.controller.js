const fs  = require('fs');
const Location = require('../modals/loc.modal')
exports.ReadFile = async(req,res) =>{
    const data = JSON.parse(fs.readFileSync('./locFile.js','utf-8'));
    try{
        await Location.create(data);
        res.send("data entred");
    }catch(error){
        res.send(error);
    }
}