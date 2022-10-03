const express = require('express');
const router = express.Router();

const {job, addJob, deleteJob} = require('../controllers/job');
const {verifyJWT} = require('../middlewares/verifyJWT');

router.get('/job', verifyJWT, job)
router.get('/jobs', job)
router.post('/addJob', addJob);
router.delete('/deleteJob'+'/:id', deleteJob);
module.exports = router;
