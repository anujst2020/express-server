import { validateEmail } from './helpers'
import { users } from '../constants'

// let users = [
//     {
//     traineeEmail: 'trainee1@successive.tech',
//     reviewerEmail: 'reviewer1@successive.tech',
//     }
// ];



export function validateUsers(users): object{
    let user_count = {'valid': 0, 'invalid': 0};
    for(let user of users){
        for(let key in user){
            if(validateEmail(user[key])){
                user_count.valid += 1;
            }else{
                user_count.invalid += 1;
            }
        }
    }
    return user_count
}

console.log(validateEmail('trainee1@successive.tech'));
console.log(validateUsers(users));