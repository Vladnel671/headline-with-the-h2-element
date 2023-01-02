function opposite(number) {
  if (number > 0 || Number.isInteger(number)) {
    number = parseFloat(number) * -1
    return number
  } else if (number < 0 || Number.isInteger(number)) {
    number = parseFloat(number) * -1
    return number
  } else return 0
}
