function countSheeps(arrayOfSheep) {
    var count = 0

    for (let i = 0; i < arrayOfSheep.length; i++) {

        if (arrayOfSheep[i] === true) {

            count = count + 1

        }
    }
    return count
}