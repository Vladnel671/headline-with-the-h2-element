var number=function(array){
    let newArr = []

    for (let i = 0; i < array.length; i++){
        newArr.push(1+i+": "+array[i])
    }
    return newArr
}