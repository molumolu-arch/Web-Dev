console.log(ucFirst("john") == "John");
console.log(ucFirst("john"))
function ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1)
}