const repeatString = function(rawString, reps) {
    let outputString = "";
    if (reps < 0) {
        return "ERROR";
    }
    for (let i = 0; i < reps; i++) {
        outputString += rawString;
    }
    return outputString;

}

module.exports = repeatString
