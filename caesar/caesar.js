//Reminder for ordinal char values. a-z = 97 - 122 inclusive, A-Z 65-90.

const caesar = function(uncoded, shift) {
    let coded = "";
    let shiftVal;
    let code;
    for (i = 0; i < uncoded.length; i++) {
        code = uncoded[i].charCodeAt(0);
        if ((code <= 122) && (code >= 97)) {
            shiftVal = code + shift;
            shiftVal < 122 ? coded += String.fromCharCode(shiftVal) : coded += String.fromCharCode(shiftVal - 26);
        } else if ((code <= 90) && (code >= 65)) {
            shiftVal = code + shift;
            shiftVal < 90 ? coded += String.fromCharCode(shiftVal) : coded += String.fromCharCode(shiftVal - 26);
        } else {
            coded += uncoded[i];
        }
    }
    return coded;
}

module.exports = caesar
