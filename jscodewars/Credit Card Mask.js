function maskify(cc) {
    let newArr = []
    for (let i = 0; i < cc.length - 4; i++) {
        newArr.push("#")
    }
    return newArr.join("") + cc.slice(-4);
}
