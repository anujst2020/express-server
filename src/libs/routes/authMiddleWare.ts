
import * as express from 'express';
import { hasPermission } from '../../../extraTs/utils/permissions';
import * as jwt from 'jsonwebtoken';

export let authMiddleWare = (req, res, next) =>{
    let token = req.body.token || req.query.token || req.headers["x-token"];
    jwt.verify(token, 'private_key_here', (err, user)=>{
        if(err){
            res.status(422).send('JWT token not valid');
        }else{
            if(hasPermission(user.moduleName, user.role, user.permissionType)){
                next();
            }else{
            res.status(403).send('You don\'t have valid permission');
            }
        }
    });
}