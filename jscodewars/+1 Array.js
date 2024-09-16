function upArray(arr) {
  if (arr.length === 0 || arr.some((num) => num < 0 || num > 9)) {
    return null
  }

  if (arr.every((num) => num === 0)) {
    return [1].concat(Array(arr.length).fill(0))
  }

  const str = arr.join('')

  const incrementedNumber = BigInt(str) + BigInt(1)

  const resultStr = incrementedNumber.toString()

  const resultArray = Array.from(resultStr, Number)

  if (resultArray.length < arr.length) {
    resultArray.unshift(...Array(arr.length - resultArray.length).fill(0))
  }

  return resultArray
}
