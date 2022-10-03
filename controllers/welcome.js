const models = require('../models/welcome')

const welcome = async (req,res)=>{
    const result = await models.welcomeFunction();
    if(!result){
        res.status(500).json({ success: false, message: "ERROR: WELCOME Content!"});
    }
    else{
        res.status(200).json({ success: true, result: result });
    }
}


const addWelcome = async (req,res)=>{
    const data = {
        title:req.body.title, 
        desc:req.body.desc, 
    }
    const result = await models.addWelcome(data);
    if(result){
        res.status(200).json({ success: true, message: 'SUCCESS: Welcome Content Added!' });
    }
    else{
        res.status(500).json({ success: false, message: "ERROR: Welcome Content not Add"});    
    }
}


const editWelcome = async (req,res)=>{
    const data = {
        id:req.params.id,
        title:req.body.title, 
        desc:req.body.desc, 
    }

    const result = await models.editWelcome(data);
    if(result){
        res.status(200).json({ success: true, message: 'SUCCESS: Welcome Content Updated!' });
    }
    else{
        res.status(500).json({ success: false, message: "ErERROR: Welcome Content not Update!"});    
    }
}



const deleteWelcome = async (req,res)=>{
    const id = req.params.id;
 
    const result = await models.deleteWelcome(id);
    if(result){
        res.status(200).json({ success: true, message: 'SUCCESS: Welcome Content Deleted!'});
    }
    else{
        res.status(500).json({ success: false, message: "ERROR: Welcome Content not Delete!"});    
    }
}


module.exports={welcome, addWelcome, editWelcome, deleteWelcome}