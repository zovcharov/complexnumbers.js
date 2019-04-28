function isNumber (value) {
    return typeof value === 'number'
}

function numberToString (value) {    
    if (value === 0) {
        return ''
    }
    if (value > 0) {
        return '+' + value
    }
    return '' + value
}

module.exports = {
    isNumber: isNumber,
    numberToString: numberToString
}