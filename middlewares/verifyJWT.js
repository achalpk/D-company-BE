const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next)=>{
    try{
        const token = req.headers.token;
        const decoded = jwt.verify(token, "jwtsecretkey");
        next(); 
    }
    catch(error){
        res.status(500).json({ success: false, message: 'User verification failed', token:false });
    }
}

module.exports={verifyJWT}