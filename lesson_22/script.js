'use strict'

// const a = 5,
//    b = a;

// c = b + 5;
// console.log(a);
// console.log(c);






// const copy = obj; //копия по ссылке

// copy.a = 10;

// console.log(obj);
// console.log(copy);

// 1. создание копии 
// function copy(mainObj) {
//    let objCopy = {};

//    let key;
//    for (key in mainObj) {
//       objCopy[key] = mainObj[key];
//    }
//    return objCopy
// }

const numbers = {
   a: 1,
   b: 2,
   c: {
      x: 10,
      y: 4
   }
};

// const newNumbers = copy(numbers); //поверхностная копия

// newNumbers.a = 10;

// newNumbers.c.x = 20;

// console.log(newNumbers); 
// console.log(numbers);

// 2. метод создания копии с помощью Object.assign()
const add = {
   d: 5,
   e: 15
}

const allNumbers = Object.assign(numbers, add); //поверхностная копия

allNumbers.e = 10;
allNumbers.c.x = 30;
console.log(add);
console.log(numbers);
console.log(allNumbers); 

// 3. Метод создания копии массива

const oldArr = [1, 2, 3, 4];

const newArr = oldArr.slice();

newArr[1] = 5;

console.log(oldArr); //[ 1, 2, 3, 4 ]
console.log(newArr); //[ 1, 5, 3, 4 ]

//4. Метод с помощью ES6-ES9. Spread оператора.

const video = ['youtube', 'video', 'rutube'];

const blogs = ['blogs', 'tiktok' ];

const allArr = [...video, ...blogs, 'vk', 'facebook'];

console.log(allArr); //['youtube', 'video', 'rutube', 'blogs', 'tiktok', 'vk', 'facebook']

function log(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}

const num = [1, 2, 3];

log(...num); //1 2 3 

const newNum = [...num]; //copy with spread operator

//Spread оператор глубокая копия 

const obj = {
   a: 2,
   b: 4,
   c: 7,
   d: {
      f: 4,
      n: 5
   }
}

const newObj = {...obj};

newObj['b'] = 9;

console.log(newObj);
console.log(obj);
