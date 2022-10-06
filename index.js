const {environment, port} = require('./config');

const express = require('express');
const app = express();
app.use(express.json());

const {cors} = require('./middlewares/cors');
app.use(cors);

const auth = require('./routes/auth');
const services = require('./routes/services');
const welcome = require('./routes/welcome');
const job = require('./routes/job');
const jobApplicant = require('./routes/jobApplicant');

app.use('/', auth);
app.use('/', services);
app.use('/', welcome);
app.use('/', job);
app.use('/', jobApplicant);
app.use('/', express.static('uploads/images'));

app.listen(port,(req,res)=>{
    console.log('Running', environment, 'on port',port );
})





