import {ZodSchema} from 'zod';
import { Request,Response } from 'express';
import sub from '../dtos/createSubmissionDto';
import { NextFunction } from 'express';

export const validateZodSchema=(Schema: ZodSchema<sub> )=>(req:Request,res:Response,next:NextFunction)=>{
    try{
        console.log("validater called");
   console.log(req.body);

        Schema.parse({
            ... req.body
        });
        next();

    }catch(err){
       console.log(err);
       res.status(400).json({
        message:'Bad Request'
       });
      return;
    }
}