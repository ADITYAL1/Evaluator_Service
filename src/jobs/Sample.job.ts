import { Job } from "bullmq";
import Ijob from "../types/bullMqJobDefine";



export default class Samplejob implements Ijob{
    name: string;
    payload?:Record<string,unknown>;
   constructor(payload:Record<string,unknown>){
     this.name=this.constructor.name;
     this.payload=payload;
   }
   handle=(job:Job)=> {
        console.log("hadler of the job  is called");
        if(job){
          console.log(job.name,job.id,job.data);
        }
   }
 
   failed=(job:Job)=>{
    console.log("failed called inside job");
    if(job){
      console.log(job.id);
    }
   }

}