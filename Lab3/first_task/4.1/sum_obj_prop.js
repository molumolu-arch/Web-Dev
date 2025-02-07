let salaries = {
    Jhon: 100,
    Ahn: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
     
    sum += salaries[key];
}

console.log(sum);