const express = require('express');
const router = express.Router();

const {jobApplicant, jobApply, deleteJobApplicant} = require('../controllers/jobApplicant');
const {verifyJWT} = require('../middlewares/verifyJWT');
const {upload} = require('../middlewares/multer');

const uploadFile = upload.single('resume')

const errorHandler = (req, res, next)=>{
    uploadFile(req,res, (err)=>{
        if(err){
            res.status(500).json({ success: false, message: "File upload error", token:true});
        }
        else{
            next();
        }
    }
)}

router.get('/jobApplicant', verifyJWT, jobApplicant);
router.post('/jobApply'+'/:id', verifyJWT, errorHandler, jobApply);
router.delete('/deleteJobApplicant'+'/:id', verifyJWT, deleteJobApplicant);
module.exports = router;
