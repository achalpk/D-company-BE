const models = require('../models/jobApplicant')

const jobApplicant = async (req,res)=>{
    const result = await models.jobApplicantFunction();
    if(!result){
        res.status(500).json({ success: false, message: "Database error", token:true});
    }
    else{
        res.status(200).json({ success: true, result: result });
    }
}

const deleteJobApplicant = async (req,res)=>{
    const id = req.params.id;
 
    const result = await models.deleteJobApplicant(id);
    if(result){
        res.status(200).json({ success: true, message: 'Successfully deleted', demo:Date.now()});
    }
    else{
        res.status(500).json({ success: false, message: "Error"});    
    }
}


module.exports={jobApplicant, deleteJobApplicant}