'use strict'

const options = {
   name: 'accord',
   width: 1500,
   length: 2550,
   engin: {
      ecu: 'p28',
      volume: 2200,
      model: 'H22A8'
   },
   //метод объекта
   makeTest: function() {
      console.log('Test');
   }
}
//start metod for option
options.makeTest();

//delete key
delete options.name;
console.log(options);
console.log(options['engin']['model']);

//переберает все элементы object
let counter = 0;
for (let key in options) {
   if (typeof (options[key]) === 'object') {
      for (let i in options[key]) {
         console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
         // counter++;
      } 
   } else {
      console.log(`Свойства ${key} имеет значение ${options[key]}`);
      counter++;
   }
}
// //counter(счетчик) свойств
console.log(counter);

//создоет массив свойств из Object
console.log(Object.keys(options));
// counter свойств объекта
console.log(Object.keys(options).length);

//диструктуризация объекта
const {ecu, model} = options.engin;
console.log(ecu);
console.log(model);