import { Queue } from "bullmq";
import redisconnection from "../config/redis.config";
export default new Queue("Samplequeue",{connection:redisconnection})