const removeFromArray = function(targetArr) {
    let removals = Array.from(arguments)
    removals.shift();
    for (i = targetArr.length-1; i>= 0; i--) {
        if (removals.includes(targetArr[i])) {
            targetArr.splice(i,1);
        }
    }
    return targetArr;

}

module.exports = removeFromArray
