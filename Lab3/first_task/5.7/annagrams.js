
function aclean(arr){

    let map = new Map();
    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(array) ); 
