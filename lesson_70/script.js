'use strict';

//ананимная само-вызывающая function

const number = 1;


(function () {
   let number = 2;
   console.log(number);
   console.log(number + 3);
}());

console.log(number);


//Использование объектного интерфейса
const user = (function () { 
   const privat = function(){
      console.log('I am privat!');
   }

   return {
      sayHello: privat
   }
}());

user.sayHello(); //I am privat!