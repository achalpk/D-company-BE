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


const addWelcome = async (req,res)=>{
    const data = {
        title:req.body.title, 
        desc:req.body.desc, 
    }
    const result = await models.addWelcome(data);
    if(result){
        res.status(200).json({ success: true, message: 'Successfully Inserted' });
    }
    else{
        res.status(500).json({ success: false, message: "Error : Unsuccessfull Insertion"});    
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
        res.status(200).json({ success: true, message: 'Updated' });
    }
    else{
        res.status(500).json({ success: false, message: "Error : Please try again"});    
    }
}



const deleteWelcome = async (req,res)=>{
    const id = req.params.id;
 
    const result = await models.deleteWelcome(id);
    if(result){
        res.status(200).json({ success: true, message: 'Successfully deleted', demo:Date.now()});
    }
    else{
        res.status(500).json({ success: false, message: "Error"});    
    }
}


module.exports={welcome, addWelcome, editWelcome, deleteWelcome}