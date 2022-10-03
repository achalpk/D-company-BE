const models = require('../models/job')

const job = async (req,res)=>{
    const user_id=req.headers.userid
    const result = await models.jobFunction(user_id);
    if(!result){
        res.status(500).json({ success: false, message: "ERROR: Jobs!"});
    }
    else{
        res.status(200).json({ success: true, result: result });
    }
}


const addJob = async (req,res)=>{
    if(!req.body.title.trim() || !req.body.desc.trim() || !req.body.exp.trim() || !req.body.location.trim()){
        res.status(500).json({ success: false, message: "Please fill the form!"});
    }
    else{
        const result = await models.addJob(req.body);
        if(result){
            res.status(200).json({ success: true, message: 'SUCCESS: Job Added!' });
        }
        else{
            res.status(500).json({ success: false, message: "ERROR: Job not Add!"});    
        }
    }
}


const deleteJob = async (req,res)=>{
    const id = req.params.id;
 
    const result = await models.deleteJob(id);
    if(result){
        res.status(200).json({ success: true, message: 'SUCCESS: Job Deleted!'});
    }
    else{
        res.status(500).json({ success: false, message: "ERROR: Job not Delete!"});    
    }
}


module.exports={job, addJob, deleteJob}