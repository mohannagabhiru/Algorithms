function twoSum(arr, target){
    if(arr.length == 0){
        return false
    }
    console.log(arr.length, target);
    for(let i=0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] == target){
                console.log(arr[i], arr[j])
                return [i, j]
            }
        }
    }
    return false
}

console.log(twoSum([5,5], 10));