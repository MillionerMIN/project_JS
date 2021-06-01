// Задания на урок 30:
'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            'Ангел',
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Терминатор"
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    //Задания на урок 33:
    /* 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.*/

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorit = checkbox.checked;

        if (newFilm) {
            // 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            /* 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
   "Добавляем любимый фильм"*/
            if (favorit) {
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(newFilm); //add new film in array
            sortArr(movieDB.movies); //sort array

            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset(); //clear input
    });

    //1) Удалить все рекламные блоки со страницы (правая часть сайта)

    const deleteAdv = (arr) => {
        arr.forEach(item => item.remove());
    }

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }

    const sortArr = (arr) => {
        arr.sort();
    }

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
         <div class="delete"></div>
    </li>`;
        });
        // 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            })
        })
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
})
