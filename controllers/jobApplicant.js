const models = require('../models/jobApplicant')
const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);

const jobApplicant = async (req,res)=>{
    const result = await models.jobApplicantFunction();
    if(!result){
        res.status(500).json({ success: false, message: "ERROR: Job Applicants!"});
    }
    else{
        res.status(200).json({ success: true, result: result });
    }
}

const jobApply = async (req,res)=>{
    if(req.body.name && req.body.phone && req.body.email && req.body.address && req.body.file){
        const data = {
            user_id: req.body.user_id,
            job_id: req.params.id, 
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
            resume: req.body.file
        }
        const result = await models.jobApply(data);
        if(!result){
            res.status(500).json({ success: false, message: "ERROR: Job not Apply!"});
        }
        else{
            res.status(200).json({ success: true, message: "SUCCESS: Job Applied!"});
        }
    }
    else{
        res.status(500).json({ success: false, message: "Please fill the form!"});
    }
}

const deleteJobApplicant = async (req,res)=>{
    const id = req.params.id;
    const result = await models.deleteJobApplicant(id);
    if(result){
        req.body.resume && await unlinkAsync(`./uploads/images/${req.body.resume}`);
        res.status(200).json({ success: true, message: 'SUCCESS: Job Applicant Deleted!'});
    }
    else{
        res.status(500).json({ success: false, message: "ERROR: Job not delete!"});    
    }
}


module.exports={jobApplicant, jobApply, deleteJobApplicant}