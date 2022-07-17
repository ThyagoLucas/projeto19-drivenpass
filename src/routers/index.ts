import { Router } from "express";
import authentication from "./authenticationRouter.js";

const routers = Router();


routers.use(authentication);


export default routers;