const express = require('express');
const router = express.Router();

const {jobApplicant, deleteJobApplicant} = require('../controllers/jobApplicant');
const {verifyJWT} = require('../middlewares/verifyJWT');

router.get('/jobApplicant', jobApplicant);
router.delete('/deleteJobApplicant'+'/:id', deleteJobApplicant);
module.exports = router;
