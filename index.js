const Complex = require('./src/complex');

let x = new Complex(3, 4);
console.log(x.toString())

let y = new Complex(3, -7);
console.log(y.toString())

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

console.log(x.isEquals(y))
console.log(Complex.isEquals(x, y))

console.log(x.isEquals(x))
console.log(Complex.isEquals(y, y))