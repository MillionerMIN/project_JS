'use strict';

function User(name, age) {
   this.name = name;
   let userAge = age;

   this.say = function () {
      console.log(`User name: ${this.name}, age: ${userAge}`);
   };

   this.getAge = function () {
      return userAge;
   };

   this.setAge = function (age) {
      if (typeof age === 'number' && age > 0 && age < 110) {
         userAge = age;
      } else {
         console.log('Недопустимое значение');
      }
   };
}

let vladimir = new User('Vladimir', 34);

console.log(vladimir.name);
console.log(vladimir.getAge());

vladimir.name = 'Victor';
vladimir.setAge(32);
vladimir.setAge(300);
console.log(vladimir.getAge());

vladimir.say();

//class

class User2 {
   costructor(name, age) {
      this.name = name;
      this._age = age;
   }

   #surname = 'Liankevich';

   say = () => {
      console.log(`User name: ${this.name} ${this.#surname}, age: ${this._age}`);
   }

   get surname() {
      return this.#surname;
   }

   set surname(surname) {
      this.#surname = surname;
   }

   get age() {
      return this._age;
   }

   set age(age) {
      if (typeof age === 'number' && age > 0 && age < 110) {
         this._age = age;
      } else {
         console.log('Недопустимое значение');
      }
   }
}

const vladimir1 = new User2('Vladimir', 34);

// console.log(vladimir1.surname);
console.log(vladimir1.age);
vladimir1.age = 30;
console.log(vladimir1.age);

console.log(vladimir1.surname);
vladimir1.surname = 'Mogeiko';

vladimir1.say();