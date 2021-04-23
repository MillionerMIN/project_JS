'use strict'

function first () {
   //Do something
   setTimeout(function () {
      console.log(1);
   }, 500)
}

function second () {
   console.log(2);
}

first();
second();

function learnJS(learn, callback) {
   console.log(`Я учу: ${learn}`);
   callback();
}

function done () {
   console.log('cool');
}

learnJS('JavaScript', done);
