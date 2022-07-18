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

export async function findNoteOrNotes(req: Request, res: Response){

    const { noteId } = req.body;
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer','').trim();

    // check is valid token
    await authentication.sessionConfirmation(token);

    let noteOrNotes = {};
    
    if(!noteId) noteOrNotes = await secureNotes.findMany(token);

    else noteOrNotes = await secureNotes.findOne(token, noteId);
    
    res.status(200).send(noteOrNotes);

}