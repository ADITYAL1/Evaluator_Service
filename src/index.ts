import express ,{Express} from "express";
import serverConfig from "./config/server.config";
import apirouter from "./routes";
import samplequeueprod from "./produceres/SampleProd";
import sampleworker from "./workers/sampleworker";
const app:Express=express();

console.log("hello friends")

app.use('/api',apirouter);
app.listen(serverConfig.Port||3000,()=>{
    console.log(`Server Started at port ${serverConfig.Port}`)

    sampleworker('Samplequeue')
    samplequeueprod('Samplejob',{
        name:"Aditya singh" ,
        company:"Remote",
        
    });
})


