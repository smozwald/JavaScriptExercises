const sumAll = function(int1, int2) {
    if ((typeof int1 != "number") || (typeof int2 != "number") || (int1 < 0) || (int2 < 0)) {
        return "ERROR";
    }
    console.log(int1 + " " + int2);
    let sum = 0;
    if (int1 > int2) {
        let int1Old = int1;
        int1 = int2;
        int2 = int1Old;
    }
    for (let i = int1; i < int2 + 1; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
