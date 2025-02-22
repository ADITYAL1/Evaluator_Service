import {Request, Response} from "express"

export const Pingcheck=(req:Request,res:Response)=>{
   console.log("odf")
   res.status(200).json({
    message:"ping check ok"
})
return

};
