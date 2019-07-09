const validator = require('validator');
const chalk = require('chalk');

const getNotes = require('./notes');

const msg = getNotes();

console.log(validator.isEmail('richard.com'));
console.log(chalk.green.inverse.bold('success'));