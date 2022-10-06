const express = require('express');
const router = express.Router();

const {welcome, addWelcome, editWelcome, deleteWelcome} = require('../controllers/welcome');
const {verifyJWT} = require('../middlewares/verifyJWT');

router.get('/welcome', verifyJWT, welcome)
router.post('/addWelcome', verifyJWT, addWelcome);
router.patch('/editWelcome'+'/:id', verifyJWT, editWelcome);
router.delete('/deleteWelcome'+'/:id', verifyJWT, deleteWelcome);
module.exports = router;
