'use strict';

const btn = document.querySelector('.btn');
let timerId,
   i = 0;

function myAnimation() {
   const elem = document.querySelector('.box');
   let pos = 0;

   let id = setInterval(frame, 10);
   function frame() {
      if (pos === 300) {
         clearInterval(id);
      } else {
         pos++;
         elem.style.top = pos + 'px';
         elem.style.left = pos + 'px';
      }
   }
}

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//    // const timerId = setTimeout(logger, 2000);
//    timerId = setInterval(logger, 500);
// });



// // clearInterval(timerId); //очищает таймер;

// function logger() {
//    if (i === 3) {
//       clearInterval(timerId);
//    } else {
//       console.log('Hi');
//       i++;
//    }
// }

// // Рекурсивный setTimeout
// let id = setTimeout(function log() {
//    console.log('Hello');
//    id = setTimeout(log, 500);
// }, 500);