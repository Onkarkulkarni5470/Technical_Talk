import express from "express";
import {user} from "../../model/userinformation.js"

const users =express.Router();


 users.get("/userinformation", async(req,res)=>
 {
    try {
        const { id } = req.query;  

        if (!id) {
            return res.status(400).send({ message: "Please provide userid" });
        }

        const response = await user.userinformation(id);  

        console.log("res", response);

        if (response.success) {
            return res.status(200).send({ message: "ok", data: response.data });
        } else {
            return res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        console.log("Error in /userinformation endpoint", error);
        return res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
 })

 export {users}