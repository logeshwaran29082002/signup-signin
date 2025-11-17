const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/signin')
.then(()=>{
    console.log('Database is Connected Sucessfully')
})
.catch((err)=>{
    console.log('Database is Disconnected' ,err)
})