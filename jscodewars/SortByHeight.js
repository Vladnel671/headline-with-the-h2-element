function sortByHeight(a) {
    let heights = a.filter(i => i !== -1).sort((a, b) => a - b)
    return a.map(i => i !== -1 ? heights.shift() : -1)
}