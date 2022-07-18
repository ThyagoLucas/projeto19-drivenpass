import { Router } from "express";
import { findNoteOrNotes, insertSecureNote } from "../controllers/secureNotesController.js";
import { schemaValidation } from "../Middlewares/schemaValidationMiddleware.js";
import secNotesSchema from "../schemas/secureNoteSchema.js";

const securesNotes = Router();

securesNotes.post('/addSNote', schemaValidation(secNotesSchema), insertSecureNote);
securesNotes.get('/findNotes', findNoteOrNotes);
//securesNotes.delete('/deleteNote', )

export default securesNotes;