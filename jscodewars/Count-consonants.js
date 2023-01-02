function consonantCount(str) {
  str = str.replace(/[0123456789aeiou^_$&#\s]/gi, "")
  if (str.length < 1) {
    return 0
  } else {
    return str.length
  }
}
