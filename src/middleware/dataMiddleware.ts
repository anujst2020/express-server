import * as express from 'express';
import { valid_config } from './valid_config'

export function dataValidMiddleware(type){
    return (req, res, next) =>{
        let status = checkValidation(req, valid_config[type]);
        if(status.length){
            return res.send({message: status});
        }else{
            return next();
        }
    }
}

function checkValidation(req, config){
    let obj = [];
    for(let key in config){
        let dataFrom = config[key]["in"][0]; // params/body/query
        let input_val = req[dataFrom][key];
        let is_req = config[key]["required"];
        let err_msg = config[key]["errorMessage"];
        let is_type = 'string';
        if(config[key]["object"] != undefined){
            is_type = 'object';
        }else if(config[key]["number"] != undefined){
            is_type = 'number';
        }
        let input_val2 = is_type== 'number' ?  (isNaN(Number(req[dataFrom][key]))? req[dataFrom][key] : Number(req[dataFrom][key])) : req[dataFrom][key];

        if(is_req && input_val != '' && typeof input_val2 == is_type){
            // take rest
        }else if(input_val != '' && typeof input_val2 == is_type){
            // take rest
        }else if((input_val == '' || input_val == undefined) && !is_req){
            // take rest
        }else{console.log(input_val);
            let temp = {
                key: key,
                location: dataFrom,
                errorMessage: err_msg
            }
            obj.push(temp);
        }
    }
    return obj;
}