const snakeCase = function(phrase) {
    let snaked_phrase = "";
    let char;
    let prevChar = "a";
    for ( let i = 0; i < phrase.length; i++) {
        char = phrase.charAt(i);
        if (i > 1) {
            prevChar = snaked_phrase.charAt(snaked_phrase.length-1);
        }

        if (char.toLowerCase() == char.toUpperCase()) { //This will means its a number or other symbol
            if (!(prevChar == "_")) {
                snaked_phrase += "_";
                console.log(prevChar);
            }
        } else {
            snaked_phrase += char.toLowerCase();

        }
    }

    let end_check = true;
    let endChar;
    while (end_check) {
        endChar = snaked_phrase.charAt(snaked_phrase.length - 1);
        if (endChar.toLowerCase() == endChar.toUpperCase()) {
            snaked_phrase = snaked_phrase.substr(0, snaked_phrase.length - 1);
        } else {
            end_check = false;
        }
    }

    console.log(snaked_phrase);
    return snaked_phrase;
}

module.exports = snakeCase
