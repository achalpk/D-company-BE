const express = require('express');
const router = express.Router();

const {services, addService, editService, deleteService} = require('../controllers/services');
const {verifyJWT} = require('../middlewares/verifyJWT');

const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

router.get('/services', verifyJWT, services);
router.get('/service', services);
router.post('/addService',upload.single('serviceImage'), addService);
router.patch('/editService'+'/:id', upload.single('serviceImage'), editService);
router.delete('/deleteService'+'/:id', deleteService);

module.exports = router;