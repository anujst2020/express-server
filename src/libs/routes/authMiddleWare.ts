
import * as express from 'express';
import { hasPermission } from '../../../extraTs/utils/permissions';
import * as jwt from 'jsonwebtoken';

export let authMiddleWare = (req, res, next) =>{
    let token = req.body.token || req.query.token || req.headers["x-token"];
    jwt.verify(token, process.env.JWT_KEY, (err, user)=>{
        if(err){
            res.status(422).send('JWT token not valid');
        }else{
            next();
        }
    });
}