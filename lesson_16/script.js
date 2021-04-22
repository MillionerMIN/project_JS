'use strict'

//Function declaration
function showFirstMessage (text) {
console.log(text);
}

showFirstMessage('Hello word!');

//Function expression

let foo = function() {
   console.log('Hi!');
}

foo();

//turnout function

const str = (a, b) => a + b;