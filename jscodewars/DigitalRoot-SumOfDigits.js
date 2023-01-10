function digitalRoot(n) {
  let result = 0
  String(n)
    .split("")
    .map((num) => {
      result += Number(num)
    })
  return result > 10 ? digitalRoot(result) : result
}
