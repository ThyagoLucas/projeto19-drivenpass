import {  Request, Response } from "express";
import * as authentication from '../services/authenticationService.js';
import * as passwordsServices from "../services/passwordsManagerService.js";

export async function insertCredential( req: Request, res: Response ){

    const { title, url, user, password } = req.body;
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer','').trim();

    await authentication.sessionConfirmation(token);
    await passwordsServices.insertCredential( token, title, url, user, password );

    res.status(201).send('inserted');
}

export async function getCredentials( req: Request, res: Response){

    // check session
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer','').trim();
    await authentication.sessionConfirmation(token);

    const { credentialId } = req.body;
    let credentialOrCredentials = {}

    
    if(credentialId) credentialOrCredentials = await passwordsServices.findOne(token, credentialId);

    else credentialOrCredentials = await passwordsServices.findMany(token);

    res.status(200).send(credentialOrCredentials);

}

export async function deleteCredential( req: Request, res: Response){
    const { credentialId } = req.body;
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer','').trim();
    // check token validate
    await authentication.sessionConfirmation( token );
    // Deleting credential
    await passwordsServices.deleteCredential( token, credentialId );

    res.status(200).send('deleted')

}