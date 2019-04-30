(function(rootObject) {
    'use strict'

    var boolean  = 'boolean',
        string   = 'string',
        number   = 'number',
        object   = 'object'

    function isNumber (value) {
        return typeof value === number && isFinite(value)
    }

    function isComplex (value) {
        return value instanceof Complex
    }

    function checkNumber (value) {
        if (!isNumber(value)) {
            throw new Error('Input value is not number')
        }
        return true
    }

    function checkComplex (value) {
        if (!isComplex(value)) {
            throw new Error('Input value is not complex number')
        }
        return true
    }

    function checkNumberOrComplex (value) {
        if (!isNumber(value) && !isComplex(value)) {
            throw new Error('Input value is not number or complex number')
        }
        return true
    }

    /**
     * @constructor
     * @param {number | string} real 
     * @param {number | undefined} imaginary 
     */
    function Complex (real, imaginary) {
        this._real = real
        this._imaginary = imaginary
    }

    Complex.prototype = {
        _real: 0,
        _imaginary: 0,

        /**
         * @returns {number}
         */
        getReal () {
            return this._real
        },

        /**
         * @returns {number}
         */
        getImaginary () {
            return this._imaginary
        },

        /**
         * @param {number} value
         */
        setReal (value) {
            checkNumber(value)
            this._real = value
        },

        /**
         * @param {number} value
         */
        setImaginary (value) {
            checkNumber(value)
            this._imaginary = value
        },

        /**
         * @param {Complex} complexValue
         */
        add: function (complexValue) {
            checkComplex(value)
            this.setReal(this.getReal() + complexValue.getReal())
            this.setImaginary(this.getImaginary() + complexValue.getImaginary())
        },

        /**
         * @param {Complex} complexValue
         */
        sub: function (complexValue) {
            checkComplex(value)
            this.setReal(this.getReal() - complexValue.getReal())
            this.setImaginary(this.getImaginary() - complexValue.getImaginary())
        },

        /**
         * @param {Complex | number}
         */
        multiply: function (value) {            
            checkNumberOrComplex(value)
            if (isNumber(value)) {
                this.setReal(this.getReal() * value)
                this.setImaginary(this.getImaginary() * value)
            } else {
                this.setReal(this.getReal() * value.getReal() - this.getImaginary() * value.getImaginary())
                this.setImaginary(this.getImaginary() * value.getReal() + this.getReal() * value.getImaginary())
            }
        }
    }

    //////////////////////
    // STATIC FUNCTIONS //
    //////////////////////

    /** 
     * @param {Complex} a 
     * @param {Complex} b 
     * @return {Complex}
     */
    Complex.sum = function (a, b) {            
        checkComplex(a)        
        checkComplex(b)
        let newReal = a.getReal() + b.getReal()
        let newImaginary = a.getImaginary() + b.getImaginary()
        return new Complex(newReal, newImaginary)
    }

    /** 
     * @param {Complex} a 
     * @param {Complex} b 
     * @return {Complex}
     */
    Complex.diff = function (a, b) {          
        checkComplex(a)        
        checkComplex(b)
        let newReal = a.getReal() - b.getReal()
        let newImaginary = a.getImaginary() - b.getImaginary()
        return new Complex(newReal, newImaginary)
    }

    /** 
     * @param {Complex} a 
     * @param {Complex} b 
     * @return {Complex}
     */
    Complex.multiply = function (a, b) {          
        checkComplex(a)        
        checkComplex(b)
        let newReal = a.getReal() * b.getReal() - a.getImaginary() * b.getImaginary()
        let newImaginary = a.getImaginary() * b.getReal() + a.getReal() * b.getImaginary()
        return new Complex(newReal, newImaginary)
    }

    ///////////////////////
    //     CONSTANTS     //
    ///////////////////////

    Complex.ZERO = new Complex(0, 0)
    Complex.I = new Complex(0, 1)
    Complex.PI = new Complex(Math.PI, 0)
    Complex.E = new Complex(Math.E, 0)
    Complex.INFINITY = new Complex(Infinity, Infinity)
    Complex.NAN = new Complex(NaN, NaN)
    Complex.EPSILON = 1e-16

    if (typeof define === 'function' && define['amd']) {
        define([], function() {
          return Complex
        })
      } else if (typeof exports === 'object') {
        Object.defineProperty(exports, "__esModule", {'value': true})
        Complex['default'] = Complex
        Complex['Complex'] = Complex
        module['exports'] = Complex
      } else {
        rootObject['Complex'] = Complex
      }
})(this)