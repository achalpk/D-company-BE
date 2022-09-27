const models = require('../models/job')

const job = async (req,res)=>{
    const result = await models.jobFunction();
    if(!result){
        res.status(500).json({ success: false, message: "Database error", token:true});
    }
    else{
        res.status(200).json({ success: true, result: result });
    }
}


const addJob = async (req,res)=>{
    const result = await models.addJob(req.body);
    if(result){
        res.status(200).json({ success: true, message: 'Successfully Inserted' });
    }
    else{
        res.status(500).json({ success: false, message: "Error : Unsuccessfull Insertion"});    
    }
}


// const editWelcome = async (req,res)=>{
//     const data = {
//         id:req.params.id,
//         title:req.body.title, 
//         desc:req.body.desc, 
//     }

//     const result = await models.editWelcome(data);
//     if(result){
//         res.status(200).json({ success: true, message: 'Updated' });
//     }
//     else{
//         res.status(500).json({ success: false, message: "Error : Please try again"});    
//     }
// }



const deleteJob = async (req,res)=>{
    const id = req.params.id;
 
    const result = await models.deleteJob(id);
    if(result){
        res.status(200).json({ success: true, message: 'Successfully deleted'});
    }
    else{
        res.status(500).json({ success: false, message: "Error"});    
    }
}


module.exports={job, addJob, deleteJob}