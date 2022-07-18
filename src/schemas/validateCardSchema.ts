import Joi from "joi";

const validateCardSchema = Joi.object({
    title: Joi.string().min(1).required(),
    name: Joi.string().min(6).required(),  
    number: Joi.string().length(16).pattern(/^[0-9]+$/).required(),
    cvc: Joi.string().length(3).pattern(/^[0-9]+$/).required(),
    password: Joi.string().min(4).max(8).pattern(/^[0-9]+$/).required(),
    expiration: Joi.string().min(5).max(7).required() ,
    isVirtual: Joi.boolean().required()
});



export default validateCardSchema;