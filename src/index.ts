import express ,{Express} from "express";
import serverConfig from "./config/server.config";
import apirouter from "./routes";
const app:Express=express();

console.log("hello friends")

app.use('/api',apirouter);
app.listen(serverConfig.Port||3000,()=>{
    console.log(`Server Started at port ${serverConfig.Port}`)
   
})
