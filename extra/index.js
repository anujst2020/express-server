var { hasPermission } = require('./utils');
var { createDiamond, createEquilateral } = require('./patterns');
const { validateEmail } = require('./utils/helpers');

// var { permissions, users } = require('./constants');


createDiamond(5);
createEquilateral(5);

console.log(hasPermission('getUsers', 'trainee', 'read'));

console.log(validateEmail('trainee1@successive.tech'));