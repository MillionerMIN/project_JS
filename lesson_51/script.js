'use strict'

const persone = {
   name: 'Fedor',
   phone: '+375111111111',
   parents: {
      mom: 'Alesina',
      dad: 'Alex'
   }
}

console.log(JSON.stringify(persone)); //{"name":"Fedor","phone":"+375111111111","parents":{"mom":"Alesina","dad":"Alex"}}
console.log(JSON.parse(JSON.stringify(persone))); // get object
//{
// name: 'Fedor',
//    phone: '+375111111111',
//       parents: { mom: 'Alesina', dad: 'Alex' }
// }

const clone = JSON.parse(JSON.stringify(persone)); //создаем глубокую копию object

clone.parents.dad = 'Vasia';
console.log(persone);
console.log(clone);
