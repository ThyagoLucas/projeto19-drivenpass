import Express, { json } from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import cors from 'cors';
import routers from './routers/index.js';
import errorHandler from './Middlewares/errorHandlerMiddleware.js';


dotenv.config();

const server = Express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(json());
server.use(routers);
server.use(errorHandler);


server.listen(port, ()=>{ console.log(`Server is running on port ${port}`)});