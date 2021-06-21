'use strict';

document.addEventListener('DOMContentLoaded', () => {
   let button = document.querySelector('.button');

   button.onmousemove = (e) => {
      let x = e.pageX - e.target.offsetLeft;
      let y = e.pageY - e.target.offsetTop;

      button.style.setProperty('--x', x + 'px');
      button.style.setProperty('--y', y + 'px');
   }
});