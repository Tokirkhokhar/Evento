const router = require("express").Router();
const {Event} = require("../models/events");

router.post("/addevent",async(req,res)=>{
    try{
        await new Event({...req.body}).save();
        res.status(201).send({message:"Event registerd successfully"});
    }
    catch(error){
      res.status(500).send({message:{error}})    
    }
})

router.get("/getevent",async(req,res)=>{
   try{
    Event.find( (err,data) =>{
      if(err) throw err;
      if(data)
      {
        res.status(201).send({ success : true,data});
      }
  })   
  
  }
  catch(error){
    res.status(500).send({ success : false ,message:{error}})    
  }
})



module.exports = router;