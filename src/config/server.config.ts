import dotenv from "dotenv"
dotenv.config();
export default {
    Port:process.env.PORT,
    Redis_port:parseInt(process.env.Redis_port||'6379',10),
    Redis_host:process.env.Redis_host||'127.0.0.1'
}