console.log(document.body);
console.log(document.head);
console.log(document.documentElement);

console.log(document.body.childNodes); //получим псевдо массив всех элементов узлов

console.log(document.body.firstChild); //получим первого ребенка родителя
console.log(document.body.lastChild); //последнего

// для того чтоб получить родителя используем команду
console.log(document.querySelector('#current').parentNode);
console.log(document.querySelector('#current').parentNode.parentNode);

//Data-атрибуты
console.log(document.querySelector('[data-current="3"]'));//получаем data атрибут 
console.log(document.querySelector('[data-current="3"]').nextSibling);//получаем next соседа 
console.log(document.querySelector('[data-current="3"]').previousSibling);//получаем предыдущего соседа 
console.log(document.querySelector('[data-current="3"]').nextElementSibling);//получаем предыдущего соседа 

//Перебирающая конструкция

for (let node of document.body.childNodes) {
if(node.nodeName == '#text') {
   continue;
}

   console.log(node);
}