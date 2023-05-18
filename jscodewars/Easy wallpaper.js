const wallpaper = (l, w, h) => {

    return ["zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve","thirteen",
        "fourteen", "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen", "twenty"]
        [l && w && h ? Math.ceil(2 * h * (l+w) / 5.2 * 1.15) : 0]
}