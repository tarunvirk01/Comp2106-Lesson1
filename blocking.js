// link to the filesystem module
var fs = require('fs');

//print food
console.log('FOOD:A');

var food = fs.readFileSync('food.txt', 'utf8');
console.log(food);

//drinks
console.log('\nDRINKS:');

var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);
