import Joi from "joi";


const cardIdSchema = Joi.object({

    cardId: Joi.string().min(1).required()

});


export default cardIdSchema;