import { SecureNotes } from "@prisma/client";
import prisma from "../database/database.js";

export type SecureNoteCreate = Omit<SecureNotes, "id" | "createdAt">

export async function insert(secureNote: SecureNoteCreate){

    await prisma.secureNotes.create({data:secureNote});

}
export async function findByTitle (title: string){

    const note = await prisma.secureNotes.findFirst({where: {title:title}});

    return note;

}

export async function findOneTitle(userId: number, noteId: number){

    const note = await prisma.secureNotes.findFirst({where:{userId:userId, id:noteId}})

    return note;

}


export async function findManyTitles(userId: number){

    const notes = prisma.secureNotes.findMany({where:{userId:userId}})

    return notes;
}


