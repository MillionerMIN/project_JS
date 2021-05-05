'use strict';

const box = document.getElementById('box');
console.log(box);

const buttons = document.getElementsByTagName('button');
console.log(buttons);
console.log(buttons[1]); //доступ к конкретной кнопке по index

const circle = document.getElementsByClassName('circle');
console.log(circle);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);

const heart = document.querySelector('.heart')
console.log(heart);