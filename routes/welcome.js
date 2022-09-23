const express = require('express');
const router = express.Router();

const {welcome} = require('../controllers/welcome');
const {verifyJWT} = require('../middlewares/verifyJWT');

router.get('/welcome', verifyJWT, welcome)

module.exports = router;
