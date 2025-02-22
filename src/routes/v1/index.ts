import express from 'express'
import { Pingcheck } from '../../controller/PingController';


console.log("v1")
const v1router=express.Router();

v1router.get('/pingg',Pingcheck)
export default v1router;
