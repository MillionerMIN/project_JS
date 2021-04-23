'use strict'

const arr = [1, 2, 3, 4, 5, 6, 7];

//удаление последнего элемента
arr.pop();
console.log(arr);//[1, 2, 3, 4, 5, 6]

//добовление в конец массива
arr.push(8);
console.log(arr); //[1, 2, 3, 4, 5, 6, 7, 8]

//переор массива результат 1 2 3 4 5 6 7
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

for (let value of arr) {
   console.log(value);
}

//метод дляя перебора массива принимает в себя callback
//item - елемент который мы перебирае,
//i - индекс элемента массива по порядку
//arr - массив который перебераем
arr.forEach(function (item, i, arr) {
console.log(`${i}: ${item} в массиве ${arr}`);
})

//метод который приобразует строку в массив с разделителем
const str = prompt('','');
const arrStr = str.split(', '); //arr

console.log({arrStr});
console.log(arrStr.join('; '));// строка из массива

//метод sort  сортировки массива
const animalsArr = ['кот', 'собака', 'попугай', 'аист', 'цапля', 'енот'];

animalsArr.sort();
console.log(animalsArr); //[ 'аист', 'енот', 'кот', 'попугай', 'собака', 'цапля' ]

const arrNumber = [3, 40, 1, 11, 33, 51, 13, 2]
arrNumber.sort();
console.log(arrNumber); // [1, 11, 13,  2, 3, 33, 40, 51]
//для сортировки Чисел нужно в sort передать callback
function compareNum(a, b) {
   return a - b;
}
arrNumber.sort(compareNum);
console.log(arrNumber); //[1,  2,  3, 11, 13, 33, 40, 51]
