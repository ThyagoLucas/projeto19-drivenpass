import { Request, Response } from "express";
import * as authentication from '../services/authenticationService.js';
import * as secureNotes from "../services/secureNoteService.js";


export async function insertSecureNote(req: Request, res: Response){

    const { title, content } = req.body;
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer','').trim();

    await authentication.sessionConfirmation(token);

    await secureNotes.insert(token,title, content);

    res.sendStatus(201);

}