const fibonacci = function(num) {
    let seq = [1,1];
    if (isNaN(num) || num < 0) {
        return "OOPS";
    }
    for (let i = 2; i < num; i++) {
        seq[i] = seq[i-1] + seq[i-2];
    }
    return (seq[num-1])

}

module.exports = fibonacci
