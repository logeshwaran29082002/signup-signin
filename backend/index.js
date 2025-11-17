const express = require('express');
const app = express();
const db = require('./db')




app.listen(3000,()=>{
    console.log('Server is Running on the port 3000')
})