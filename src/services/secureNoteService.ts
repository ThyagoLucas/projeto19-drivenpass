import { SecureNoteCreate } from './../repositories/secureNotesRepository';
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