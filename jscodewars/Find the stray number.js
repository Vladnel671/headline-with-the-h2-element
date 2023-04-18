function stray(numbers) {
    return numbers.reduce((val, num) => val ^ num);
}
stray([1, 1, 1, 1,1, 1, 1, 1, 2])