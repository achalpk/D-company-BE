const models = require('../models/services');
const fs = require('fs');
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)

const services = async (req,res)=>{
    const result = await models.servicesFunction();
    // console.log(result);
    if(!result){
        res.status(500).json({ success: false, message: "Database error", token:true});
    }
    else{
        res.json({ success: true, result: result }).status(200);
    }
}


const addService = async (req,res)=>{
    let image;
    if(!req.file){
        image = null;
    }
    else{
        image = req.file.originalname;
    }
    const data = {
        title:req.body.title, 
        short_desc:req.body.sDesc, 
        long_desc:req.body.lDesc,
        image:image,

    }
    const result = await models.addService(data);
    if(result){
        res.status(200).json({ success: true, message: 'Successfully Inserted', demo:Date.now() });
    }
    else{
        res.status(500).json({ success: false, message: "Error : Unsuccessfull Insertion"});    
    }
}


const editService = async (req,res)=>{
    let image, oldImage;
    if(!req.file){
        image = null;
        oldImage = null;
    }
    else{
        image = req.file.originalname;
        oldImage = req.body.oldImage;
    }
    const data = {
        id:req.params.id,
        title:req.body.title || null, 
        short_desc:req.body.shortDesc || null, 
        long_desc:req.body.longDesc || null,
        image:image
    }
    const result = await models.editService(data);
    if(result){
        oldImage && await unlinkAsync(`./uploads/images/${oldImage}`);
        res.status(200).json({ success: true, message: 'Updated', demo:Date.now() });
    }
    else{
        res.status(500).json({ success: false, message: "Error : Please try again"});    
    }
}



const deleteService = async (req,res)=>{
    const id = req.params.id;
    const image = req.body.image;
 
    const result = await models.deleteService(id);
    if(result){

        image && await unlinkAsync(`./uploads/images/${image}`);
        res.status(200).json({ success: true, message: 'Successfully deleted', demo:Date.now()});
    }
    else{
        res.status(500).json({ success: false, message: "Error"});    
    }
}

module.exports={services, addService, editService, deleteService}
