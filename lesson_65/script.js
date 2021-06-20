'use strict';

new RegExp('pattern', 'flags');


const ans = prompt('Введите ваше имя');
const reg = /n/i;

console.log(ans.search(reg));
console.log(ans.match(reg)); //["n", index: 1, input: "Ann", groups: undefined]

const pass = prompt('Password');

console.log(pass.replace(/./g, '*')); //*****
console.log(pass.replace(/\./g, '*')); //fghjhgl*****
console.log('12-33-53'.replace(/-/g, ':')); //12:33:53

const num = prompt('Введите число');
const reg2 = /\d/g;
console.log(ans.match(reg2));//

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));
