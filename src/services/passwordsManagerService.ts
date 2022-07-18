import { encrypt, decrypt, userIdByToken } from '../utils/userUtils.js';
import * as manager from '../repositories/passwordsManagerRepositorie.js'


export async function insertCredential(token: string, title: string, url: string, user: string, password:string){

  const create = {} as manager.CreateCredential;

  //get user id
  const userId = userIdByToken(token);

  //check if title to user already registred
  const thereIsTitle = await manager.findTitleByUser(title, userId);
  if(thereIsTitle) throw {type:409, message:'Title name already registred'}

  //generate encrypted password with cryptr
  const passcryptr = encrypt(password);
  const decry = decrypt(passcryptr);
  
  //create user for prism
  create.userId = userId;
  create.password = passcryptr;
  create.title = title;
  create.url = url;

  //insert credential datas
  await manager.insertCredential(create);

}

export async function findMany(token: string){

  const userId = userIdByToken(token);

  const credentials = await manager.findAllCredentials(userId);

  for(let value of credentials){

    value.password = decrypt(value.password)

  }

  return credentials;

}

export async function findOne(token: string, credentialId: string){

  const userId = userIdByToken(token);

  const credential = await manager.findUserCredential(userId, Number(credentialId));

  if(!credential) throw {type: 401,message:'credential does not exist for this user'}

  return credential;
}

export async function deleteCredential(token: string, credentialId: string){

  const userId = userIdByToken(token);
  const findCredential = await manager.findUserCredential(userId, Number(credentialId));

  if(!findCredential) throw {type:400, message:'credential does not exist or invalid datas'}

  await manager.deleteCredential(Number(credentialId));

}

