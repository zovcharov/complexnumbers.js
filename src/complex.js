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

        this.real = real
        this.imaginary = imaginary
    }

    getReal() {
        return this.real
    }

    getImaginary() {
        return this.imaginary
    }

    setReal (value) {
        this.real = value
    }

    setImaginary (value) {
        this.imaginary = value
    }

    getReverse() {
        return new Complex(-this.real, -this.imaginary)
    }

    toString () {
        let imaginaryAsString = Helpers.numberToString(this.imaginary)
        return `${this.real}${imaginaryAsString}i`
    }

    isEquals (value) {
        return (this.getReal() === value.getReal() 
            && this.getImaginary() === value.getImaginary())
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

    static multiply (a, b) {
        let newReal = a.getReal() * b.getReal() - a.getImaginary() * b.getImaginary()
        let newImaginary = a.getImaginary() * b.getReal() + a.getReal() * b.getImaginary()
        return new Complex(newReal, newImaginary)
    }

    static isEquals (a, b) {
        return (a.getReal() === b.getReal() 
            && a.getImaginary() === b.getImaginary())
    }
}

const COMPLEX = {
    ZERO: new Complex(0, 0),
    I: new Complex(0, 1),
    PI: new Complex(Math.PI, 0),
    E: new Complex(Math.E, 0),
    INFINITY: new Complex(Infinity, Infinity),
    NAN: new Complex(NaN, NaN),
    EPSILON: 1e-16
}

module.exports = Complex;