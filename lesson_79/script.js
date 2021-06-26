'use strict';

function* generator() {
   yield 'S';
   yield 'c';
   yield 'r';
   yield 'i';
   yield 'p';
   yield 't';
}

const str = generator();

console.log(str.next()); //get object {value: 'S', done: false}
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());

function* count(n) {
   for (let i = 0; i < n; i++) {
      yield i;
   }
}

for (let k of count(7)) {
   console.log(k);
}

// const counter = count(7);

// console.log(counter.next().value); //0
// console.log(counter.next().value); //1
// console.log(counter.next().value); //2