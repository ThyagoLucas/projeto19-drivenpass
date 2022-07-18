import { Router } from "express";
import credentials from "../schemas/credentialsValidationsSchema.js";
import { deleteCredential, getCredentials, insertCredential } from "../controllers/passwordsManagerController.js";
import { schemaValidation } from "../Middlewares/schemaValidationMiddleware.js";

const registerPasswords = Router();

registerPasswords.post('/credentials', schemaValidation(credentials), insertCredential );

registerPasswords.get('/credentials', getCredentials );

registerPasswords.delete('/credentials', deleteCredential );

export default registerPasswords;



