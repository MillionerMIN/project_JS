const btn = document.querySelector("button"),
   btns = document.querySelectorAll('button'),
   overlay = document.querySelector(".overlay");

//установка события на кнопку
const deleteElem = (e) => {
   // let i = 0;
   console.log(e.currentTarget);
   console.log(e.type);
   // i++;
   // if (i == 1) {
   //    btn.removeEventListener("click", deleteElem);
   // }
};
btn.addEventListener("click", deleteElem);
// overlay.addEventListener("click", deleteElem);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
   //отмена стандартного поведения браузера
   event.preventDefault();

   console.log(event.target);
})

//устанавливаем отдин обработчик события для всех buttons

btns.forEach(btn => {
   btn.addEventListener('click', deleteElem, { once: true });
})
//опции в обработчике событий


