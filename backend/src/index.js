const express = require('express');
const app = express();
const db = require('./db')
const router = require('./routes/userRoutes');
const cors = require('cors')
//Middleware
app.use(express.json());


//backend problem 
app.use(cors());

// router middleware

app.use('/',router)

app.listen(3000,()=>{
    console.log('Server is Running on the port 3000')
})