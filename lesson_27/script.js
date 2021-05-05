'use strict'
// •	Какое будет выведено значение: let x = 5; alert(x++);  answer x=5
// let x = 5;
// console.log(x++);

// •	Чему равно такое выражение: [] + false - null + true ?  answer: NaN
// console.log(typeof ([] + false - null + true));

// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); answer: 2
// let y = 1;
// let x = y = 2;
// console.log(x);
// •	Чему равна сумма[] + 1 + 2 ? answer: 12

// console.log([] + 1 + 2);

// •	Что выведет этот код: alert("1"[0]) ? answer: 1

// console.log('1'[0]);

// •	Чему равно 2 && 1 && null && 0 && undefined ? answer: null
// console.log(2 && 1 && null && 0 && undefined);
// •	Есть ли разница между выражениями ? !!(a && b) и(a && b) ? answer: one-false  two-true 

// console.log(!!(a && b)==(a && b)); answer: false
// •	Что выведет этот код: alert(null || 2 && 3 || 4); ? answer: 3
alert(null || 2 && 3 || 4);
// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? answer: false
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a === b);
// •	Что выведет этот код: alert(+"Infinity"); answer: Infinity
alert(+"Infinity");
// •	Верно ли сравнение: "Ёжик" > "яблоко" ? answer: false
console.log("Ёжик" > "яблоко");
// •	Чему равно 0 || "" || 2 || undefined || true || falsе ? answer: 2
console.log(0 || "" || 2 || undefined || true || falsе);
