import{ User } from '@prisma/client';
import bcrypt from 'bcrypt';
import * as authentication from '../repositories/authenticationRepositorie.js';
import * as userInfo from '../repositories/userRepositories.js';



export async function login(email: string, password: string){



}

export async function createUser(name: string, email: string, password: string){

    const user = {} as authentication.CreateUser;

    //check if email is already registred
    const thereIs = await userInfo.findByEmail(email);
    if(thereIs) throw {type:400, message: 'email already registred' }

    user.name = name;
    user.email = email;
    user.password =  bcrypt.hashSync(password, 10);

    await authentication.createUser(user);

}
