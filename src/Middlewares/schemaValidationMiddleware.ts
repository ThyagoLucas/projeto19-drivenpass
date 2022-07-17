import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";


export function schemaValidation(schema: ObjectSchema){

    return(req:Request, res:Response,next: NextFunction)=>{
        const validation = schema.validate(req.body);
        if(validation.error){
            throw {type:400, message: `invalid datas: \n ${validation.error}`}
        }
        next();
    }

}
