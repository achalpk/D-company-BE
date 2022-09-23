const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const auth = require('./routes/auth');
const services = require('./routes/services');
const welcome = require('./routes/welcome');

app.use('/', auth);
app.use('/', services);
app.use('/', welcome);
app.use('/', express.static('uploads/images'));


app.listen(9000,(req,res)=>{
    console.log('Running');
})





