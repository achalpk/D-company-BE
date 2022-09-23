const models = require('../models/welcome')

const welcome = async (req,res)=>{
    const result = await models.welcomeFunction();
    if(!result){
        res.status(500).json({ success: false, message: "Database error", token:true});
    }
    else{
        res.status(200).json({ success: true, result: result });
    }
}

module.exports={welcome}