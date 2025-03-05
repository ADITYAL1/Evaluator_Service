import {Request , Response} from 'express';
import sub from '../dtos/createSubmissionDto';
 
export function addSubmission(req:Request,res:Response){

 const Submissiondto= req.body as sub;
 // add validation using zod
  res.status(201).json({
    success:true,
    error:{},
    message:"sucessfully colleted the submission",
    data:Submissiondto,
 });
 return;
}