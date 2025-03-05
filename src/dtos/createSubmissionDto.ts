import {z} from 'zod'
export default interface sub{
    userid:string
    problemid:string
    code:string
    language:string

};

export const createZodSchema=z.object({
   userid:z.string(),
   problemid:z.string(),
   code:z.string(),
   language:z.string(),
}) ;