import prisma from '../database/database.js'


export async function findByEmail(email: string){

   const user = await prisma.user.findFirst({where: {email: email}})
   return user;
   
}