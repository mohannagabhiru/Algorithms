let arr = [2, 3, -2, 4]

function findMaxSub(arr, n){
    let maxProduct = arr[0];
    for(let i =0; i < n; i++){
        let accu = 1;
       for( j = i; j < n; j++){
        accu *= arr[j]
        maxProduct = Math.max(accu, maxProduct)
       } 
    }
    return maxProduct
}

console.log(findMaxSub(arr, arr.length))