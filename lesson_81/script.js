'use strict';

console.log(1);

setTimeout(() => {
   console.log('timeout__2000');
}, 2000);

setTimeout(() => {
   console.log('timeout__4000');
}, 4000);

console.log(2);

let k = 0;

function count() {
   for (let i = 0; i < 1e0; i++) {
      k++;
   }
   alert('done');
}

count();