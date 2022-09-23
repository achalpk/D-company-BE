const express = require('express');
const router = express.Router();

const {fileUpload} = require('../controllers/fileUpload');

router.post('/uploads', fileUpload)

module.exports = router;
