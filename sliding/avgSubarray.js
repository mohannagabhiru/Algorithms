

// bruteforce
function avgArray(arr, elements){
    let resultArr = [];
    for(let i = 0; i < arr.length / 2; i++){
        let sum = 0;
        for(let j = i ; j < i + elements;j++){
            console.log(arr[j], i);
           sum += arr[j]
        }
        console.log(sum / elements);
        resultArr[i] = sum / elements
    }
    return resultArr;
}

console.log(avgArray([1, 3, 2, 6, -1, 4, 1, 8, 2],5))

