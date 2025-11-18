const express = require("express");
const router = express.Router();
const userdata = require("../models/userSignupData");

//post router

router.post("/signup", async (req, res) => {
  try {
    const postdata = new userdata(req.body);
    const posted = await postdata.save();
    res.status(201).json(posted);
  } catch (err) {
    res.status(404).json("postError", err);
  }
});
// get All Data router
router.get("/", async (req, res) => {
  const getData = await userdata.find();
  res.status(201).json(getData);
});


// get Single Data Router

router.get('/:id',async(req,res)=>{
    const getSingleData = await userdata.findById(req.params.id)
    res.status(201).json(getSingleData)
})

module.exports = router;
