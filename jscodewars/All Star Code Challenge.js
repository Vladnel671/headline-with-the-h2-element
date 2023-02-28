function strCount(str, letter) {
    var count = 0

    var arrSplit = str.split("")

    for (let i = 0; i < arrSplit.length; i++) {

        if (arrSplit[i] === letter) {

            count = count + 1

        }
    }
    return count
}