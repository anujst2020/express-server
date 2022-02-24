import * as express from 'express';
import { errorHandler } from './errorHandler';
const app = express();
export let middleware1 = (req, res, next) =>{
    if (!req.route)
        return res.send(errorHandler(404));
    next();
}