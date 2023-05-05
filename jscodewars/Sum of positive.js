function positiveSum(arr) {
    return arr.reduce((accumulator, current) => current > 0 ? accumulator + current : accumulator, 0)
}