//const Complex = require('./src/complexClass');
const Complex = require('./src/complex');

let x = new Complex(3, 4);
let y = new Complex(3, -7);

console.log(x)
console.log(y)
console.log(Complex.sum(x, y))