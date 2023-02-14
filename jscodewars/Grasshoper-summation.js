var summation = function (num) {
    let arr = new Array(num)
    arr.fill(0)
    let start = 0;
    while (start <= num) {
        arr.push(start++);
    }
    return arr.reduce((a, b) => a + b)
}