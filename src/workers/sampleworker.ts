import { Job} from "bullmq";
import Samplejob from "../jobs/Sample.job";
import redisconnection from "../config/redis.config";
import { Worker } from "bullmq";

        export default function sampleworker(queuename:string){
         new Worker(queuename, 
           async (job:Job)=>{
                if(job.name=='Samplejob'){
                 const samplejobinstance= new Samplejob(job.data)
                 samplejobinstance.handle(job);
                //  return true;
                }
          },
          {
            connection:redisconnection,
          }
        )
        }