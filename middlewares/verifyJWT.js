const jwt = require('jsonwebtoken');
const {key} = require('../config');

const verifyJWT = (req, res, next)=>{
    try{
        const token = req.headers.token;
        const decoded = jwt.verify(token, key);
        next(); 
    }
    catch(error){
        res.status(500).json({ success: false, message: 'User verification failed', noToken:true });
    }
}

module.exports={verifyJWT}