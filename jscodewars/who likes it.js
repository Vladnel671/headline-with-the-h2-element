let names = ['Alex', 'Jacob', 'Mark', 'Max'];

function likes(names) {
    for (let i = 0; i < names.length; i++) {
        if (names.length < 0) {
            return "no one likes this"
        } else if (names.length = 0) {
            return names[0] + " likes this"
        } else if (names.length = 1) {
            return names[0] + "and" + names[1] + " like this"
        } else if (names.length = 2) {
            return names[0] + ", " + names[1] + " and " + names[2] + " like this"
        } else if (names.length >= 3) {
            return names[0] + ", " + names[1] + " and " + names.length - 1 + " others like this"
        }
    }
}

console.log(likes(names[0]))