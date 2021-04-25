'use strict'

const solfier = {
   health: 400,
   armor: 100,
   sayHello: function() {
      console.log('Hello!');
   }
}

const jonh = Object.create(solfier); //создание прототипных связей

// const jonh = {
//    health: 100
// }

// jonh.__proto__ = solfier; //старый метод

// Object.setPrototypeOf(jonh, soldier); //устанавливаем прототип

jonh.sayHello();