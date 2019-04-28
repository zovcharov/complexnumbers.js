const Complex = require('./src/complex');

let x = new Complex(3, 4);
console.log(x.toString())

let y = new Complex(3, -7);
console.log(y.toString())

console.log(Complex.sum(x, y).toString())
console.log(Complex.diff(x, y).toString())

x.add(y).toString()
console.log(x.toString())

x.sub(y).toString()
console.log(x.toString())

try {
    new Complex('a', 1)
} catch (err) {
    console.log(err.message)
}

try {
    new Complex(5, {})
} catch (err) {
    console.log(err.message)
}