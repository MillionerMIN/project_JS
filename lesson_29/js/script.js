'use strict';

const box = document.getElementById('box'),
   btns = document.getElementsByTagName('button'),
   circles = document.getElementsByClassName('circle'),
   wrapper = document.querySelector('.wrapper'),
   hearts = document.querySelectorAll('.heart'),
   heart = document.querySelector('.heart');


// box.style.backgroundColor = 'blue';

// box.style.cssText = 'background-color: blue; width: 100%;';

// btns[1].style.borderRadius = '50%';
circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
//   item.style.backgroundColor = 'blue';
// });

const div = document.createElement('div');
div.classList.add('black');
document.body.append(div);

// hearts[0].before(div);
// hearts[0].after(div);
// hearts[0].remove(div);
// hearts[0].replaceWith(circles[0]);

// wrapper.insertBefore(div, hearts[1]);  //устаревший меттод
div.innerHTML = '<h1>Hello word</h1>';
div.textContent = 'Hello';
div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');