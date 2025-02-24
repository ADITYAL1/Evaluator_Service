import Redis from "ioredis";
import serverConfig from "./server.config";
const redisconfig={
    host:serverConfig.Redis_host,
    port:serverConfig.Redis_port,
    maxRetriesPerRequest:null
   
}
const redisconnection=new Redis(redisconfig);
export default redisconnection;