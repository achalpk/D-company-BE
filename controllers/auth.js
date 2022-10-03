const {key} = require('../config');
const models = require('../models/auth');
const express = require('express');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');



const signUp = async (req,res)=>{
    console.log(req);
    const signUpData={
        username:req.body.username, 
        password:req.body.password, 
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone,
        email:req.body.email,
        address:req.body.address,
        dob:req.body.dob
    };

    if(signUpData.username.trim().length===0){
        res.status(200).send({ success: false, message: 'username empty'});
    }
    else if(signUpData.password.trim().length===0){
        res.status(200).send({ success: false, message: 'password empty'});
    }
    else if(signUpData.first_name.trim().length===0){
        res.status(200).send({ success: false, message: 'first_name empty'});
    }
    else if(signUpData.last_name.trim().length===0){
        res.status(200).send({ success: false, message: 'last_name empty'});
    }
    else if(signUpData.phone.trim().length===0){
        res.status(200).send({ success: false, message: 'phone empty'});
    }
    else if(signUpData.email.trim().length===0){
        res.status(200).send({ success: false, message: 'email empty'});
    }
    else if(signUpData.address.trim().length===0){
        res.status(200).send({ success: false, message: 'address empty'});
    }
    else if(signUpData.dob.trim().length===0){
        res.status(200).send({ success: false, message: 'dob empty'});
    }
    else{
        const result = await models.signUpFunction(signUpData)
        if (result){
            res.status(200).send({ success: true, message: 'Registration successfully'});
        }  
        else{
            res.status(500).send({ success: false, message: 'Registration error'})
        } 
    }
}

const logIn = async (req,res)=>{
    const logInData={
        username:req.body.username, 
        password:req.body.password
    }
    const result = await models.logInFunction(logInData);
    if(result.length>0){
        const id = result[0].id;
        const token = jwt.sign({id}, key, {expiresIn:'3h'})
        res.json({ success: true, message: 'Successfully Login', user:result[0].username, userId:result[0].id, token:token }).status(200);
    }
    else if(result.length===0){
        res.json({ success: false, message: 'Invalid username or password' }).status(200);
    }
    else{
        res.status(500).send(result)
    }
}


module.exports={signUp, logIn}
