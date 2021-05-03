

//1) String

console.log(typeof(String(4)));  //type string

const fontSize = 25 + 'px';
console.log(typeof(fontSize));  //string

//2) привращение в число Number

console.log(typeof(Number('4')));  //number

//унарный плюс

console.log(typeof(+'5'));  //number

console.log(typeof(parseInt('15', 10))); //number

//To boolean 

console.log(typeof(Boolean('4'))); //boolean

// 0, '', null, undefined, NaN  - all false
// all true
const switcher = 0;

if(switcher) {
   console.log('Working....');
}

console.log(typeof(!!'444444')); //boolean