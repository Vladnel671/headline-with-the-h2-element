function orderWeight(str) {
  const weights = str.split(' ')

  function getWeight(num) {
    return num.split('').reduce((acc, digit) => acc + parseInt(digit), 0)
  }

  weights.sort((a, b) => {
    const weightA = getWeight(a)
    const weightB = getWeight(b)

    if (weightA === weightB) {
      return a.localeCompare(b)
    }

    return weightA - weightB
  })

  return weights.join(' ')
}
