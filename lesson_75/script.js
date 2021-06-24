'use strict';

// try {
//    console.log('Normal');
//    console.log(a);
//    console.log('still');
// } catch (e) {
//    console.log('error');
//    console.log(e.name);  //ReferenceError
//    console.log(e.message); // is not defined
//    console.log(e.stack); // ReferenceError: a is not defined at script.js: 5
// } finally{
//    console.log("it's good");
// }



// console.log('Still normal');

try {
   document.querySelector('.active').addEventListener('click', () => {
      console.log('click');
   });
} catch (error) {
}

console.log('normal');