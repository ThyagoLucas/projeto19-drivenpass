import { Router } from "express";
import { findOneOrMany, insert } from "../controllers/cardRegisterController.js";
import { schemaValidation } from "../Middlewares/schemaValidationMiddleware.js";
import validateCardSchema from "../schemas/validateCardSchema.js";

const cardRegister = Router();

cardRegister.post('/cardsRegister', schemaValidation(validateCardSchema), insert);

cardRegister.get('/findCards', findOneOrMany);

export default cardRegister;