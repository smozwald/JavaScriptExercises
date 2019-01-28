const palindromes = function(checkString) {
    checkString =checkString.toLowerCase().replace(/\W+/g,"");
    let reverseString = "";
    for (let i = 0 ; i < checkString.length; i++) {
        reverseString += checkString.charAt(checkString.length - 1 - i);
    }

    console.log(checkString + " : " + reverseString);
    return (checkString == reverseString);

}

module.exports = palindromes
