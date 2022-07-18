import * as cardRepository from "../repositories/cardsRepository.js";
import * as cryptr from '../utils/userUtils.js'
import { userIdByToken } from "../utils/userUtils.js";


export async function insert(token: string, createCard: cardRepository.CreateCard) {

    const userId = userIdByToken(token);
    createCard.userId = userId;
    //check if card title already registred
    const findCard = await cardRepository.findByTitle(userId, createCard.title);
    if(findCard) throw{ type: 400, message: 'Cart with this title already registred'}

    createCard.password = cryptr.encrypt(createCard.password);
    createCard.cvc = cryptr.encrypt(createCard.cvc);
    createCard.number = cryptr.encrypt(createCard.number);
    createCard.name = cryptr.encrypt(createCard.name);

    await cardRepository.insert(createCard);

}

export async function findMany(token: string){

    const userId = userIdByToken(token)

    const cards = await cardRepository.findMany(userId);

    for(let value of cards){
       
        value.password = cryptr.decrypt(value.password);
        value.cvc = cryptr.decrypt(value.cvc);
        value.name = cryptr.decrypt(value.name);
        value.number = cryptr.decrypt(value.number);
    }

    console.log(cards);

    return cards;
}

export async function findOne(token: string, cardId: string){

    const userId = userIdByToken(token);

    const card = await cardRepository.findOne(userId, Number(cardId));

    card.password = cryptr.decrypt(card.password);
    card.cvc = cryptr.decrypt(card.cvc);
    card.name = cryptr.decrypt(card.name);
    card.number = cryptr.decrypt(card.number);
    card.title = cryptr.decrypt(card.title);

    return card;

}