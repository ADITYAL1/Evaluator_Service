import express ,{Express} from "express";
import serverConfig from "./config/server.config";
import apirouter from "./routes";
import Bodyparser from "body-parser"
// import samplequeueprod from "./produceres/SampleProd";
// import sampleworker from "./workers/sampleworker";
// import serverAdapter from "./config/bullboard.config";

const app:Express=express();

console.log("hello friends")
app.use(Bodyparser.urlencoded({extended:true}));
app.use(Bodyparser.json());
app.use(Bodyparser.text());
app.use('/api',apirouter);
// app.use('/ui/queue',serverAdapter.getRouter());


app.listen(serverConfig.Port||3000,()=>{
    console.log(`Server Started at port ${serverConfig.Port}`);
    // console.log(`bullboard ui is up on port localhost:${serverConfig.Port}/ui/queue`);

    // sampleworker('Samplequeue')
    // samplequeueprod('Samplejob',{
    //     name:"Aditya singh" ,
    //     company:"Remote",
        
    // });
})


