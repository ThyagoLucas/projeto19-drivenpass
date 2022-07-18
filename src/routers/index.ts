import { Router } from "express";
import authentication from "./authenticationRouter.js";
import cardRegister from "./cardRegisterRouter.js";
import registerPasswords from "./credentialsRegisteRouter.js";
import securesNotes from "./secureNotesRegisterRouter.js";

const routers = Router();


routers.use(authentication);
routers.use(registerPasswords);
routers.use(securesNotes);
routers.use(cardRegister);


export default routers;