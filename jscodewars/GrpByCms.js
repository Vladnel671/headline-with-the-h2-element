function groupByCommas(n) {
  const numStr = n.toString()

  const result = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return result
}
