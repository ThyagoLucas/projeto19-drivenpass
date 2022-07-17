import Joi from "joi";


const createUserSchema = Joi.object({

    name: Joi.string().min(5).required(),
    email:Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    passwordConf: Joi.ref('password')

});

export default createUserSchema;