'use strict'

class Rectangle {
   constructor(height, width) {
      this.height = height;
      this.width = width;
   }

   calcArea() {
      return this.height * this.width
   }
}

class ColoredRectangleWithText extends Rectangle {
   constructor (height, width, text, bgColor) {
      super(height, width);
      this.text = text;
      this.bgColor = bgColor;
   }

   showMyProps() {
      console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
   }
}

const div = new ColoredRectangleWithText(20, 20, 'Hello World', 'red');

div.showMyProps(); //Текст: Hello World, цвет: red
console.log(div.calcArea()); //400

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());   //100
// console.log(long.calcArea());   //2000