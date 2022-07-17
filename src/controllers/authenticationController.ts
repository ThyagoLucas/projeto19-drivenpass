import { Request, Response } from "express";
import * as authentication from '../services/authenticationService.js';


export async function login(req: Request, res: Response){

    const { email, password } = req.body;

    await authentication.login(email,password);
    
    res.status(200).send('logou');
}

export async function register(req: Request, res: Response){ 

    const { name, email, password } =  req.body;

    await authentication.createUser(name, email, password);
    

    res.status(201).send('user criated');
}
