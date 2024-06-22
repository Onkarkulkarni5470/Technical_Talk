import express from "express";
import {addUser} from "../../model/regestration.js";

const newuser=express.Router();


newuser.post("/NewUserCreation",async(req,res)=>
{
   try
   {
    const {name,lastname,username,password,gender,Address}=req.body;

    console.log("check reqbody",req.body);

    if(!name ||!lastname || !username || !password || !gender || !gender)
    {
        res.status(400).send({message:"Please send all required feild"});
        return;
    }
    else 
    {
      addUser(req.body);
      res.status(200).send({message:"ok,All data is submitted"})
       return ;
    } 
   }

   catch (error)
   {
           console.log("error");
           res.status(500).send({message:"server not responding"});
   }


});



export{newuser}