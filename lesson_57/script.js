'use strict';

//filter

const arr = ['Ann', 'Vladimir', 'Emma', 'Liza', 'Georgi'];

const result = arr.filter((item) => {
   return item.length < 5;
})

console.log(result); //[ 'Ann', 'Emma', 'Liza' ]

//map

const arr1 = ['AnnA', 'VlaDimir', 'GeOrgi', 'KatushKa'];

const res = arr1.map(item => item.toLowerCase());

console.log(res); //[ 'anna', 'vladimir', 'georgi', 'katushka' ]

// every and some return boolen

const arr2 = [2, 'qsq', 'klsnvkjdn'];

const res2 = arr2.some(item => typeof (item) === 'number');
console.log(res2); //true

const res22 = arr2.every(item => typeof (item) === 'number');
console.log(res22); //false

//reducer

const arrNumber = [1, 5, 34, 44, 15];
// 0        1
// 1        5
// 6        34
// 40       44
// 84       15
const resNum = arrNumber.reduce((sum, current) => sum + current);
const resNum1 = arrNumber.reduce((sum, current) => sum + current, 3);
console.log(resNum); //99
console.log(resNum1); //102

const arrVegetables = ['tomato', 'cucumber', 'cabbage'];

const resVeg = arrVegetables.reduce((sum, current) => `${sum}, ${current}`);
const resVege = arrVegetables.reduce((sum, current) => `${sum}, ${current}`, 'Vegetables:');
console.log(resVeg); //tomato, cucumber, cabbage
console.log(resVege); //Vegetables:, tomato, cucumber, cabbage


const obj = {
   vladimir: 'persone',
   anna: 'persone',
   dog: 'animal',
   cat: 'animal'
};

const nameObj = Object.entries(obj)
   .filter(item => item[1] === 'persone')   //[ [ 'vladimir', 'persone' ], [ 'anna', 'persone' ] ]
   .map(item => item[0]); //[ 'vladimir', 'anna' ]
console.log(nameObj);