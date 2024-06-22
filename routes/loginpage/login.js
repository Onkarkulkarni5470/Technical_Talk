import express from "express";

import {check} from "../../model/regestration.js"


const auth = express.Router();

auth.post("/auth",async(req,res)=>
{
    try
    {
        const {username,password}=req.body;
        const response = await check(req.body);
        console.log("response is",response);
             
        if(response.success)
        {
            console.log("reqbody",req.body);
            check(req.body);
            res.status(200).json({message:"Login Successful..",data: response.data });

        }
        else
        {   
            res.status(400).json({message:response.Message})
        }
            
       

    }
    catch(error)
    {
        console.log("error in login.js",error);
        res.status(400).json({ message: error.message });
    }
});


export {auth}
