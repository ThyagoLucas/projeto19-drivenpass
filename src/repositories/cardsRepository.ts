import { Cards } from "@prisma/client";
import prisma from "../database/database.js";


export type CreateCard = Omit<Cards, "id"|"createdAt">


export async function insert(card: CreateCard){

    await prisma.cards.create({data: card});
}

export async function findByTitle(userId: number, title: string){

    const card = await prisma.cards.findFirst({where:{userId:userId, title:title}})

    return card;
}

export async function findMany(userId: number){

    const cards = await prisma.cards.findMany({where:{userId:userId}});

    return cards;
}

export async function findOne(userId: number, cardId:number){

    const card = await prisma.cards.findFirst({where:{ userId: userId, id: cardId}});

    return card;
}