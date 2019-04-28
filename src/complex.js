const Helpers = require('./helpers')
const Errors = require('./errors')

class Complex {
    constructor(real, imaginary) {
        if (!Helpers.isNumber(real)) {
            throw new Errors.InputValueError('real number')
        }
        if (!Helpers.isNumber(imaginary)) {
            throw new Errors.InputValueError('imaginary number')
        }

        this.real = real;
        this.imaginary = imaginary;
    }

    getReal() {
        return this.real;
    }

    getImaginary() {
        return this.imaginary;
    }

    setReal (value) {
        this.real = value;
    }

    setImaginary (value) {
        this.imaginary = value;
    }

    toString () {
        let imaginaryAsString = Helpers.numberToString(this.imaginary)
        return `${this.real}${imaginaryAsString}i`
    }

    copy (value) {
        return new Complex(value.getReal(), value.getImaginary())
    }

    add (a) {
        this.setReal(this.getReal() + a.getReal())
        this.setImaginary(this.getImaginary() + a.getImaginary())
        return this
    }

    sub (a) {
        this.setReal(this.getReal() - a.getReal())
        this.setImaginary(this.getImaginary() - a.getImaginary())
        return this
    }

    static sum (a, b) {
        let newReal = a.getReal() + b.getReal()
        let newImaginary = a.getImaginary() + b.getImaginary()
        return new Complex(newReal, newImaginary)
    }

    static diff (a, b) {
        let newReal = a.getReal() - b.getReal()
        let newImaginary = a.getImaginary() - b.getImaginary()
        return new Complex(newReal, newImaginary)
    }
}

module.exports = Complex;