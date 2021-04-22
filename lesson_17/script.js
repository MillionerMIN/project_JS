'use strict'

const str = 'String';

console.log(str.length); //6

console.log(str.toUpperCase()); //STRING
console.log(str.toLowerCase()); //string

const text = 'Hello word!';

console.log(text.slice(6, 10)); //word
console.log(text.slice(6, 9)); //wor
console.log(text.slice(6)); //word!
console.log(text.substring(6, 10)); //word
console.log(text.substr(6, 3)); //wor

//Number
//Math.

const num = 12.2;

console.log(Math.round(num)); //12

const text = '12.2px';

console.log(parseInt(text)); //12 type number
console.log(parseFloat(text)); //12.2 type number


