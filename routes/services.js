const express = require('express');
const router = express.Router();

const {services, addService, editService, deleteService} = require('../controllers/services');
const {verifyJWT} = require('../middlewares/verifyJWT');
const {upload} = require('../middlewares/multer');

const uploadFile = upload.single('serviceImage')

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

router.get('/services', verifyJWT, services);
router.post('/addService', verifyJWT, errorHandler, addService);
router.patch('/editService'+'/:id', verifyJWT, errorHandler, editService);
router.delete('/deleteService'+'/:id', verifyJWT, deleteService);

module.exports = router;