import Redis from "ioredis";
import serverConfig from "./server.config";
const redisconfig={
    port:serverConfig.Redis_port,
    host:serverConfig.Redis_host
}
const redisconnection=new Redis(redisconfig);
export default redisconnection;