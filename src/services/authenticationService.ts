import { CreateSession } from '../repositories/authenticationRepositorie';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as authentication from '../repositories/authenticationRepositorie.js';
import * as userInfo from '../repositories/userRepositories.js';
import dotenv from 'dotenv';

dotenv.config();

export async function sessionConfirmation( token: string){
    
    const infoToken = await authentication.findSessionByToken(token);
    if(!infoToken)  throw {type:401,message:'token does not exist'}
    
    try {
        
        const dados = jwt.verify(token, process.env.JWT_SECRET);
        return token;

    } catch (error) {

        throw {type:401,message:'invalid token'}
    }

}

export async function login(email: string, password: string){

    //check user
    const user = await userInfo.findByEmail(email);
    if(!user) throw {type: 400, message:'user does not registred'}

    //check password
    const passwordDecrypted = bcrypt.compareSync(password, user.password);
    if(!passwordDecrypted) throw {type: 400, message:'invalid password'}

    //token session generate
    const session = {} as CreateSession;
    const datas = {userId: user.id};
    const secretKey = process.env.JWT_SECRET;
    const expiration = {expiresIn : 60*60*24} //24h
    const token = jwt.sign(datas, secretKey, expiration);
    session.token = token;
    session.userId = user.id;

    await authentication.session(session);
  
    return token;

}

export async function createUser(name: string, email: string, password: string){

    const user = {} as authentication.CreateUser;

    //check if email is already registred
    const thereIs = await userInfo.findByEmail(email);
    if(thereIs) throw {type:400, message: 'email already registred' }

    user.name = name;
    user.email = email;
    user.password =  bcrypt.hashSync(password, 10);

    await authentication.create(user);

}
