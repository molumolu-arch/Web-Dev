let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(object) {

    maxSal = 0;
    top = null;

    for ( let entry of Object.entries(salaries) ) {

        let [name, salary] = entry;
        
        if ( salary >= maxSal ) {

            maxSal = salary;
            top = name;
        }
    }

    return top;
}

console.log(topSalary(salaries));