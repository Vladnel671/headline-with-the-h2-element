let names = ['Alex', 'Jacob', 'Mark', 'Max'];

function likes(names) {
    if (names.length < 1) {
        return "no one likes this"
    }
    for (let i = 0; i < names.length; i++) {

        if (names.length == 1) {
            return names[i] + " likes this"
        }

        if (names.length == 2) {
            return names[i] + " and " + names[i + 1] + " like this"
        }

        if (names.length == 3) {
            return names[i] + ", " + names[i + 1] + " and " + names[i + 2] + " like this"
        }

        if (names.length >= 4) {
            let count = names.length;
            count -= 2;
            return names[i] + ", " + names[i + 1] + " and " + count + " others like this"
        }
    }
}

console.log(likes(names))