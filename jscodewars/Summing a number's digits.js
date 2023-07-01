function sumDigits(number) {
    let digits = Math.abs(number).toString().split('');
    return digits.reduce((acc, curr) => acc + parseInt(curr), 0);
}
