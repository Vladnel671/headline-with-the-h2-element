function solution(str, ending) {
  let newstr = str.slice(-ending.length)
  console.log(newstr)
  if (newstr == ending || ending == "") {
    return console.log(true)
  } else {
    return console.log(false)
  }
}
solution("abc", "")
