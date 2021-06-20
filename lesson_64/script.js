'use strict';

// localStorage.setItem('number', 5);

// localStorage.getItem('number');

// // localStorage.removeItem('number');

// localStorage.clear();

// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
   form = document.querySelector('form'),
   change = document.querySelector('#color');

   if (localStorage.getItem('isChecked')) {
      checkbox.checked = true;
   }

   if (localStorage.getItem('bg')) {
      form.style.backgroundColor = 'skyblue';
   }

checkbox.addEventListener('change', () => {
   localStorage.setItem('isChecked', true);
})

change.addEventListener('click', () => {
   if (localStorage.getItem('bg') === 'changed') {
      localStorage.removeItem('bg');
      form.style.backgroundColor = '#fff';
   } else {
      localStorage.setItem('bg', 'changed');
      form.style.backgroundColor = 'skyblue';
   }
});

const person = {
   name: 'Vladimir',
   age: 34
}

const serializedPerson = JSON.stringify(person);

localStorage.setItem('alex', serializedPerson);

console.log(JSON.parse(localStorage.getItem('alex'))); //{name: "Vladimir", age: 34}
