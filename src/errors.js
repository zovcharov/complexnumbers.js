class InputValueError extends Error {
    constructor (inputValue) {
        let message = `Wrong input value ${inputValue.length ? 'of ' + inputValue : ''}`
        super(message)
    }
}

module.exports = {
    InputValueError: InputValueError
}