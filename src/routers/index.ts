import { Router } from "express";
import authentication from "./authenticationRouter.js";
import registerPasswords from "./registerPasswordsRouter.js";

const routers = Router();


routers.use(authentication);
routers.use(registerPasswords);


export default routers;