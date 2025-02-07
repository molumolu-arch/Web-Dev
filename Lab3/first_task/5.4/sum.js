function sumInput() {
    sum = 0; 
    arr = [];
    
    while(true) {
        let num = window.prompt("Number:");

        if(num === null || num.trim() === "" || isNaN(num)) break;

        arr.push(Number(num));
    }

    for(let i of arr){
        sum+=i;
    }
    return sum;
};

window.alert(sumInput());