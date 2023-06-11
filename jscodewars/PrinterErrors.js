const printerError = (s) => {
    let errors = "nopqrstuvwxyz"
    let errorChars = s.split('').filter(char => errors.includes(char));
    return `${errorChars.length}/${s.length}`
}
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))