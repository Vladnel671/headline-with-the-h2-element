let dictionary = ["first"]
anagram = "trisf"
let vozmSlova = []

function grabScrab(anagram, dictionary) {
  dictionary.forEach(element => {
    if(anagram.toLowerCase().split("").sort().join() === element.toLowerCase().split("").sort().join())
    {
      vozmSlova.push(element)
      
    }   
  });
  return console.log(vozmSlova)
}
grabScrab(anagram, dictionary)