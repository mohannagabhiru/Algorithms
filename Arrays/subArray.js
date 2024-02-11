let arr = [-2, -3, 4, -1, -2, 1, 5, -3]

function largestSubArray(arr){
    let sum = 0;
    let startIndex = 0;
    let endIndex = 0;

    for(let i = 0; i < arr.length; i++){
        let continuousSum = 0;
        for(let j = i ; j < arr.length; j++){
            continuousSum += arr[j]
            if(continuousSum > 0 && continuousSum > sum){
                sum = continuousSum
                startIndex = i;
                endIndex = j;
            }
        }
    }
    return {sum, arr : arr.slice(startIndex, endIndex + 1)}
}

console.log(largestSubArray(arr));

