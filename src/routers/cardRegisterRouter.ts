import { Router } from "express";
import { deleteOne, findOneOrMany, insert } from "../controllers/cardRegisterController.js";
import { schemaValidation } from "../Middlewares/schemaValidationMiddleware.js";
import cardIdSchema from "../schemas/cardIdSchema.js";
import validateCardSchema from "../schemas/validateCardSchema.js";

const cardRegister = Router();

cardRegister.post('/cardsRegister', schemaValidation(validateCardSchema), insert);

cardRegister.get('/findCards', findOneOrMany);

cardRegister.delete('/cardDelete', schemaValidation(cardIdSchema), deleteOne);

export default cardRegister;