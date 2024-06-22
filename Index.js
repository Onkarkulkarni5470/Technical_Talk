import express from "express";

import {newuser} from "./routes/loginpage/loginAndsignup.js"
import  {auth} from "./routes/loginpage/login.js"
import  {users} from "./routes/provideuserinfo/userinfo.js"
import  {corsMiddleware} from "./Middleware/handelcors.js"

const app = express();
app.use(corsMiddleware);
app.options('*', corsMiddleware);

app.use(express.json());

app.use("/",newuser);
app.use("/",auth);
app.use("/",users)


const PORT=8080;
app.listen(PORT ,()=>{
   console.log(`the port is lisening ${PORT}`) 
})
