const express = require('express');
const router = express.Router();
const userdata = require('../models/userSignupData')



//post router

router.post('/',async(req , res)=>{
    const postdata = new userdata(req.body);
    const posted = await postdata.save();
    res.status(201).json(posted)
})



module.exports = router
