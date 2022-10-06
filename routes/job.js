const express = require('express');
const router = express.Router();

const {job, addJob, deleteJob} = require('../controllers/job');
const {verifyJWT} = require('../middlewares/verifyJWT');

router.get('/job', verifyJWT, job)
router.post('/addJob', verifyJWT, addJob);
router.delete('/deleteJob'+'/:id', verifyJWT, deleteJob);
module.exports = router;
