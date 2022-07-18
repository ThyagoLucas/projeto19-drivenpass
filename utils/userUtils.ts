import cryptr from "../configs/cryptr.js";
import jwt from 'jsonwebtoken';

export function encrypt(password: string){

    const encryptedPassword = cryptr.encrypt(password);

    return encryptedPassword;
}

export function decrypt(password: string){

    const encryptedPassword = cryptr.decrypt(password);

    return encryptedPassword;
}

export function userIdByToken (token: string){

    const user = jwt.verify(token, process.env.JWT_SECRET);

    return Number (user.userId);
}