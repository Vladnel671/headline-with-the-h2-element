function abbrevName(name){
    let fword = name.split(" ")[0].toUpperCase()
    let lword = name.split(" ")[1].toUpperCase()

    return fword[0]+"."+lword[0]
}
abbrevName("Sam Harris")