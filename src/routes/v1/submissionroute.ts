import express from 'express'

import { addSubmission } from '../../controller/SubmissionController';
import { validateZodSchema } from '../../validator/Submissiondtovalidator';
import { createZodSchema } from '../../dtos/createSubmissionDto';


console.log("v1")

const submissionRouter=express.Router();
console.log('subroucalled');
submissionRouter.post('/',validateZodSchema(createZodSchema),addSubmission);
export default submissionRouter;

