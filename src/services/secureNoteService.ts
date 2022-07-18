import { SecureNoteCreate } from '../repositories/secureNotesRepository';
import { userIdByToken } from '../utils/userUtils.js'
import * as secureNoteRepository from '../repositories/secureNotesRepository.js'

export async function insert ( token: string, title: string, content: string ){

    // check if title is already registred
    const thereIsTitle = await secureNoteRepository.findByTitle(title);
    if(thereIsTitle) throw {type: 400, message:'Title already registred, try to change your title'}
    
    const note = {} as SecureNoteCreate;
    const userId = userIdByToken(token);

    note.userId = userId;
    note.title = title;
    note.contentNote = content;

    await secureNoteRepository.insert(note);

}

export async function findOne (token: string, noteId: string){

    const userId = userIdByToken(token);
    const note = await secureNoteRepository.findOneTitle(userId,Number( noteId));

    if(!note) throw{type:400, message:'Secure Note id does not exist'}
    
    return note
}

export async function findMany (token: string){

    const userId = userIdByToken(token);
    const notes = await secureNoteRepository.findManyTitles(userId);

    return notes;
}

export async function deleteOne ( token: string, noteId: string ){

    const userId = userIdByToken(token);
    if(!noteId) throw {type:401, message:'Secure note code does not exist or invalid'}

    const deleted = await secureNoteRepository.deleteOne(userId, Number(noteId));
    if(deleted.count == 0 ) throw {type: 401, message:'Secure note does not exist or has already been deleted '} 
    
}