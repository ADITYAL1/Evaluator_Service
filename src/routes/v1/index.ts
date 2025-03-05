import express from 'express'
import { Pingcheck } from '../../controller/PingController';
import submissionRouter from './submissionroute';


console.log("v1")
const v1router=express.Router();
v1router.use('/submission',submissionRouter)
v1router.get('/pingg',Pingcheck)
export default v1router;
