function vaporcode(string) {
  const str = string.split(' ').join('').toUpperCase()
  return str.split('').join('  ')
}
