const binaryArrayToNumber = arr => {
    const newArr = Number(arr.join(""))
    return parseInt(newArr, 2);
};