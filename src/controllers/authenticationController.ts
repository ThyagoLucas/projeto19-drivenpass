import { Request, Response } from "express";
import * as authentication from '../services/authenticationService.js';


export async function login(req: Request, res: Response){

    const { email, password } = req.body;
    const  authorization  = req.headers.authorization;
    const token = authorization?.replace('Bearer', '').trim();

    let tokenSession = '';
    if(!token){
        tokenSession = await authentication.login(email,password);
    }
    else{
        tokenSession = await authentication.sessionConfirmation(token);
    }

    res.status(200).send(tokenSession);
}

export async function register(req: Request, res: Response){ 

    const { name, email, password } =  req.body;

    await authentication.createUser(name, email, password);
    

    res.status(201).send('user criated');
}
