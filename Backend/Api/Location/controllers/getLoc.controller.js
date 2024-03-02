const Location = require('../modals/loc.modal')


exports.location = async (req,res) => {
    let city = req.params.city;
    if(city == undefined){
        try{
            const data = await Location.find({});
            res.json({data});
        }catch(error){
            console.log(error)
        }
    }else{
    try{
        data = await Location.find({main:city})
        if(data.length == 0){
            res.json("No City Found In The Db");
        }else{
            res.json(data)
        }
    }catch(error){
        console.log(error);
    }
}
}
