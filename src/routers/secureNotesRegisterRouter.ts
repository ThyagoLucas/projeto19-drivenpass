import { Router } from "express";
import { insertSecureNote } from "../controllers/secureNotesController.js";
import { schemaValidation } from "../Middlewares/schemaValidationMiddleware.js";
import secNotesSchema from "../schemas/secureNoteSchema.js";


const securesNotes = Router();

securesNotes.post('/addSNote', schemaValidation(secNotesSchema), insertSecureNote);


export default securesNotes;