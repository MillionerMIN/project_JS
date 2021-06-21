'use strict';

const persone = {
   name: 'Alex',
   age: 25,
   get userAge() {
      return this.age;
   },
   set userAge(num) {
      this.age = num;
   }
}

console.log(persone.userAge);
console.log(persone.userAge = 30);
console.log(persone.userAge);

//Умные геттеры/сеттеры

let user = {
   get name() {
      return this._name;
   },

   set name(value) {
      if (value.length < 4) {
         console.log('Введите имя не мение 4 символов');
         return;
      } else {
         this._name = value;
      }
   }
};

user.name = 'Petter';
console.log(user.name); //Petter

user.name = ''; //Введите имя не мение 4 символов

//Использование для совместимости

function Persone(name, birthday) {
   this.name = name;
   this.birthday = birthday;

   Object.defineProperty(this, 'age', {
      get() {
         let todayYear = new Date().getFullYear();
         return todayYear - this.birthday.getFullYear();
      }
   })
}

// let jone = new Persone('Jone', 20);
// console.log(jone.age); //20

let jone = new Persone('Jone', new Date(1998, 6, 1));

console.log(jone.birthday); //1998-06-30T21:00:00.000Z
console.log(jone.age); //23