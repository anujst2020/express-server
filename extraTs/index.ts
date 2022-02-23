import { hasPermission } from './utils';
import { createDiamond, createEquilateral } from './patterns';
import { validateEmail } from './utils/helpers';

// var { permissions, users } = require('./constants');


createDiamond(5);
createEquilateral(5);

console.log(hasPermission('getUsers', 'trainee', 'read'));

console.log(validateEmail('trainee1@successive.tech'));