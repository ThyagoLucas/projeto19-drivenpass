import { Router } from "express";
import authentication from "./authenticationRouter.js";
import registerPasswords from "./registerPasswordsRouter.js";
import securesNotes from "./secureNotesRegisterRouter.js";

const routers = Router();


routers.use(authentication);
routers.use(registerPasswords);
routers.use(securesNotes);


export default routers;