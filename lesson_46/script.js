'use strict';

// 1)
function showThis(a, b) {
   console.log(this); //undefined
   function sum() {
      console.log(this); //undefined
      return a + b
   }
   console.log(sum());
}
showThis(4, 5); //9

//2)
const obj = {
   a: 10,
   b: 20,
   sum: function () {
      console.log(this);
   }
}

obj.sum(); //объект

//3)
function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;
   this.hello = function () {
      console.log(`Hello ${this.name}!`);
   }
}

const anna = new User('Anna', 34);

// 4)
function sayName(surname) {
   console.log(this);
   console.log(this.name + surname);
}

const user = {
   name: 'Jone'
}
//методы ручного присвоения контекста call, apply
sayName.call(user, 'Smith'); //{name: 'Jone} JoneSmith
sayName.apply(user, ['Smith']); //{name: 'Jone} JoneSmith

//методы ручного присвоения контекста bind
function count(num) {
   return this * num;
}

const double = count.bind(2);

console.log(double(3)); //6
console.log(double(13)); //26

//1) Обычная функция: this = window,  в строгом режиме this = undefined;
//2) Контекст у методов объекта - самм объект;
//3) this в конструкторах и классах  - это новый объект;
//4) Ручная привязка this: call, apply, bind;

const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//    console.log(this); //будет получать саму кнопку <button></button>
//    this.style.backgroundColor = 'red';
// })

//если используем стрелочную функцию
btn.addEventListener('click', (e) => {
   e.target.style.backgroundColor = 'red';
})

const obj2 = {
   num: 5,
   sayNamber: function () {
      const say = () => {
         console.log(this); //get object
         console.log(this.num); //get 5
      }

      say();
   }
}

obj2.sayNamber(); // get object

// const double = (a) => {
//    return a* 2;
// }

const double2 = a => a * 2;

console.log(double2(4)); //8
