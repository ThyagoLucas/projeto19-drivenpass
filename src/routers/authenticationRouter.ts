import { Router } from "express";
import createUserSchema from "../schemas/createUserSchema.js";
import { login, register } from "../controllers/authenticationController.js";
import { schemaValidation } from "../Middlewares/schemaValidationMiddleware.js";

const authentication = Router();

authentication.post('/login', login);
authentication.post('/register',schemaValidation(createUserSchema), register);


export default authentication;