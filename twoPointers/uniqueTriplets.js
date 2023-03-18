function uniqueTriplets(arr, target){
    const result = [];
    // for(let i = 0; i < arr.length - 2; i++){
    //     for(let j = i + 1; j < arr.length - 1; j++){
    //         for(let k = j + 1; k < arr.length; k++){
    //             if(arr[i] + arr[j] + arr[k] === target){
    //                 console.log("hello")
    //                 result.push([arr[i], arr[j], arr[k]])
    //                 // console.log(arr[i], arr[j], arr[k],"triplet");
    //             }
    //         }
    //     }
    // }
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === target) {
                    result.push([arr[i], arr[j], arr[k]])
                }
            }
        }
    }
    return result;
}
console.log(uniqueTriplets([-3, 0 , 1, 2, -1, 1, -2], 5))