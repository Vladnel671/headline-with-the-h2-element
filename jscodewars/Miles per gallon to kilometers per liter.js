function converter (mpg) {
    //code to convert miles per imperial gallon to kilometers per liter
    return Math.round(((1.609344 / 4.54609188 * mpg)*100))/100
}