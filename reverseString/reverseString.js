const reverseString = function(string) {
    let reversed = "";
    init_char = string.length-1;
    for (i = init_char; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}

module.exports = reverseString
