function tailSwap(arr) {
    const [firstKey, firstValue] = arr[0].split(':')
    const [secondKey, secondValue] = arr[1].split(':')
    return [`${firstKey}:${secondValue}`, `${secondKey}:${firstValue}`]
}