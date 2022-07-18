import Joi from "joi";

const secNotesSchema = Joi.object({

    title: Joi.string().required().max(50),
    content: Joi.string().required().min(1).max(1000)

});

export default secNotesSchema;