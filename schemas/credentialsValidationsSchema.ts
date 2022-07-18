
import Joi from "joi";

const credentials = Joi.object({

    title: Joi.string().required(),
    url: Joi.string().uri().required(),
    user: Joi.string().min(1).required(),
    password: Joi.string().required()

});

export default credentials;