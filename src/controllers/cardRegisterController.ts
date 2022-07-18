import { Request, Response } from "express";
import { CreateCard } from "../repositories/cardsRepository.js";
import * as auth from "../services/authenticationService.js";
import * as managerCards from "../services/cardsManagerService.js";

export async function insert( req: Request, res: Response ){

    // check session and token
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer', '').trim();
    await auth.sessionConfirmation(token);

    // inserting card
    const infoCard = req.body as CreateCard;
    await managerCards.insert(token, infoCard);

    res.status(201).send('card registred');
}

export async function findOneOrMany( req: Request, res: Response ){

    // check session and token
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer', '').trim();
    await auth.sessionConfirmation(token);
    
    const { cardId } = req.body;
    let cardOrCards = {}

    if(cardId){
        cardOrCards = await managerCards.findOne(token, cardId)
    }   
    else{
        cardOrCards = await managerCards.findMany(token);
    }
    

    res.status(200).send(cardOrCards)

}