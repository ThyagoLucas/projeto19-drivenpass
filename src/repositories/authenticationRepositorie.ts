import { User } from '@prisma/client';
import prisma from '../database/database.js'



export type CreateUser = Omit<User, "id"|"createdAt"|"updatedAt">;


export async function createUser(user: CreateUser){

   const insert = await prisma.user.create({data:user});
   
}