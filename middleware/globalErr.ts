import {Request,Response,NextFunction} from 'express';
import { customErr } from '../interfaces/customErr';

const globalErr=(err:customErr,req:Request,res:Response,next:NextFunction)=>{
err.statusCode=err.statusCode||500;
err.status=err.status||"error";
if(process.env.Node_ENV==="development"){
res.status(err.statusCode).json({
    error:err,
    message:err.message,
    stack:err.stack
})}
else{
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
    })
}
};
export default globalErr;