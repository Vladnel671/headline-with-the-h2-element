function spacey(array){
    let str = ''
    return array.map( (e) => str += e )
}

console.log(spacey(['kevin', 'has','no','space']))