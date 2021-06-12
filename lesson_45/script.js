'use strict';
function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;
   this.hello = function () {
      console.log(`Hello ${this.name}!`);
   }
}

User.prototype.exit = function (name) {
   console.log(`Пользователь ${this.name} ушел(а)`);
}

// Запись в class синтаксис !!!!!!!!!!!!!!!!!!!!!!!
class User {
   constructor(name, id) {
      this.name = name;
      this.id = id;
      this.human = true;
   }
   hello() {
      console.log(`Hello ${this.name}!`);
   }
   exit() {
      console.log(`Пользователь ${this.name} ушел(а)`);
   }
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!

const vladimir = new User('Vladimir', 34);
const anna = new User('Anna', 34);

console.log(vladimir);
console.log(anna);

vladimir.hello(); //Hello Vladimir!
anna.hello(); //Hello Anna!

vladimir.exit();
anna.exit();
