decodeMorse = function(morseCode){
  return morseCode
    .trim()
    .split('   ')
    .map((word) =>
      word
        .split(' ')
        .map((symbol) => MORSE_CODE[symbol])
        .join('')
    )
    .join(' ')
}
