'use strict';

const box = document.querySelector('.box'),
   btn = document.querySelector('button');

// const width = box.clientWidth, //385
// height = box.clientHeight;  //335

// const width = box.offsetWidth, //получим значения устоновленные в CSS 400
//    height = box.offsetHeight; // 350

const width = box.scrollWidth, //385
   height = box.scrollHeight;  //1352

console.log(width, height);

btn.addEventListener('click', () => {
   // box.style.height = box.scrollHeight + 'px';
   console.log(box.scrollTop); //покажет сколько текста прочитал
})

console.log(box.getBoundingClientRect()); //метод позволяющий получить все координаты элемента
console.log(box.getBoundingClientRect().top);


//как получить стиле установленные в CSS

const style = window.getComputedStyle(box);

console.log(style.display);

// Метрики относящиеся к глобальному элементу document and window

console.log(document.documentElement.scrollTop);

window.scrollBy(0, 400)  //работает от текущей позиции window
window.scrollTo(0, 500) //работает относительно всей страницы