const models = require('../models/services');
const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);

const services = async (req,res)=>{
    const result = await models.servicesFunction();
    if(!result){
        res.status(500).json({ success: false, message: "ERROR: Services!"});
    }
    else{
        res.json({ success: true, result: result }).status(200);
    }
}


const addService = async (req,res)=>{
    if(!req.body.title.trim() || !req.body.sDesc.trim() || !req.body.lDesc.trim() || !req.body.file){
        res.status(500).json({ success: false, message: "Please fill the form!"});
    }
    else{
        let image;
        if(!req.file){
            image = null;
        }
        else{
            image = req.body.file;
        }
        const data = {
            title:req.body.title, 
            short_desc:req.body.sDesc, 
            long_desc:req.body.lDesc,
            image:image,

        }
        const result = await models.addService(data);
        if(result){
            res.status(200).json({ success: true, message: 'SUCCESS: Service Added!'});
        }
        else{
            res.status(500).json({ success: false, message: "ERROR: Service not Add!"});    
        }
    }
}


const editService = async (req,res)=>{
    let image, oldImage;
    if(!req.file){
        image = null;
        oldImage = null;
    }
    else{
        image = req.body.file;
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
        res.status(200).json({ success: true, message: 'SUCCESS: Service Updated!'});
    }
    else{
        res.status(500).json({ success: false, message: "ERROR: Service not Update!"});    
    }
}



const deleteService = async (req,res)=>{
    const id = req.params.id;
    const image = req.body.image;
 
    const result = await models.deleteService(id);
    if(result){

        image && await unlinkAsync(`./uploads/images/${image}`);
        res.status(200).json({ success: true, message: 'SUCCESS: Service Deleted!'});
    }
    else{
        res.status(500).json({ success: false, message: "ERROR: Service not Delete!"});    
    }
}

module.exports={services, addService, editService, deleteService}
