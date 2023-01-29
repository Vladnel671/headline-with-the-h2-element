let str = "hf";
let size = 3;

function trim(str, size) {
    if (str.length <= size) {
        return str
    }
    if (size <= 3) {
        let b = str.slice(size[size], size)
        let c = b + "..."
        return c

    }
    if (str.length > size) {
        let b = str.slice(str[size], size - 3)
        let c = b + "..."
        return c;
    }

}

console.log(trim(str, size));