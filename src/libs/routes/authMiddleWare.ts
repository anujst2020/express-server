
import * as express from 'express';
import { hasPermission } from '../../../extraTs/utils/permissions';
import UserModel  from '../../repositories/user/UserModel';
import * as jwt from 'jsonwebtoken';

export let authMiddleWare = (req, res, next) =>{
    let token = req.body.token || req.query.token || req.headers["x-token"];
    jwt.verify(token, process.env.JWT_KEY, (err, user)=>{
        if(err){
            res.status(422).send('JWT token not valid');
        }else{
            UserModel.findOne({_id: user.id, email: user.email}, (err, db_user)=>{
                if(err){
                    return res.status(422).send({'message': err.message});
                }else if(db_user){
                    next();
                }else{
                    return res.status(422).send({'message': 'User not found'});
                }
            });
        }
    });
}