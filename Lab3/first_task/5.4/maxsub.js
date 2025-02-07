function getMaxSubSum(arr) {
    sum = 0;
    for(let i = 0; i<arr.length; i++){
        temp = 0;
        for(let j = i; j<arr.length; j++){
            temp += arr[j];
            if(temp>sum) sum = temp;
        }
    }
    return sum;
}

console.log(getMaxSubSum([1, 2, 3]));