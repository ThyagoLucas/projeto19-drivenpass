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


