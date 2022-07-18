
import prisma from "../database/database.js"
import { Credential } from '@prisma/client'

export type CreateCredential = Omit<Credential, "id"|"createdAt">

export async function insertCredential(createCred: CreateCredential ){

    await prisma.credential.create({data: createCred});

}

export async function findTitleByUser(title: string,user: number ){

    const thereIsTitle = await prisma.credential.findFirst({where: {title:title, userId:user} })

    return thereIsTitle;

}

export async function findAllCredentials(userId: number){
    
    const credentials = await prisma.credential.findMany({where:{userId:userId}});

    return credentials;
}

export async function findUserCredential(userId: number, credentialId: number){

    const credential = await prisma.credential.findFirst({where:{userId:userId, id:credentialId}})

    return credential;

}

export async function deleteCredential(credentialid: number){

    await prisma.credential.delete({where: {id:credentialid}});
}