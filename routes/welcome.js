const express = require('express');
const router = express.Router();

const {welcome, addWelcome, editWelcome, deleteWelcome} = require('../controllers/welcome');
const {verifyJWT} = require('../middlewares/verifyJWT');

router.get('/welcome', verifyJWT, welcome)
router.get('/welcomes', welcome)
router.post('/addWelcome', addWelcome);
router.patch('/editWelcome'+'/:id', editWelcome);
router.delete('/deleteWelcome'+'/:id', deleteWelcome);
module.exports = router;
