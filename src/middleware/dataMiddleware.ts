import * as express from 'express';
import { valid_config } from './valid_config'

export let dataValidMiddleware = (req, res, next) =>{
    // checkdatavalidation pending
    next();
}

function checkValidation(config, data){

    for(let cg in config){
    }

}