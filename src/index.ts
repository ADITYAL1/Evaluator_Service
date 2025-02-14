import express from "express";
import serverConfig from "./config/server.config";
const app=express();

app.listen(serverConfig.Port,()=>{
    console.log(`Server Started at port${serverConfig.Port}`)
   
})
