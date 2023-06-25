function mostFrequent(arr, n){
    let maxCount = 0;
    let maxEle ;
    for(let i = 0; i < n; i++){
        let count = 0;
        let currentEle;
        for(let j = 0; j < n; j++){
            if(arr[i] == arr [j]){
                count++;
                currentEle = arr[i]
        }}
            if(count > maxCount){
                maxCount = count
                maxEle = currentEle
            }
        }
    console.log(maxEle)
    return maxCount
}


// optimize it with sort
console.log(mostFrequent([40, 50, 30, 40, 50, 30, 30], [40, 50, 30, 40, 50, 30, 30].length))
