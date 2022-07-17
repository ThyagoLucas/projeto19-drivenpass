import { User, Session} from '@prisma/client';
import prisma from '../database/database.js'



export type CreateUser = Omit<User, "id"|"createdAt"|"updatedAt">;
export type CreateSession = Omit<Session, "id"|"createdAt">;

export async function create(user: CreateUser){

   await prisma.user.create({data:user});
   
}

export async function session(session: CreateSession){

   await prisma.session.create({data: session});

}
