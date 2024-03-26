let arr = [2,3,-2,4]

function findMaxSub(arr, n){
    let maxProduct = arr[0];
    let startIndex ;
    let endIndex ;
    for(let i =0; i < n; i++){
        let accu = 1;
       for( j = i; j < n; j++){
        accu *= arr[j]
        if(accu > maxProduct){
            startIndex = i;
            endIndex = j;
        }
        
        // maxProduct = Math.max(accu, maxProduct)
       } 
    }
    console.log(startIndex, endIndex)
    return {maxProduct, arr : arr.slice(startIndex, endIndex)}
}

console.log(findMaxSub(arr, arr.length))