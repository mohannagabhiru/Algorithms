let arr = [100, 300, 500]
let dep = [900, 400, 600]
let arrLength = arr.length


function maxPlatforms(arr, dep, length){
    let platFormsNeeded = 1;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            console.log(i, j);
            if(i != j){
                if(arr[i] >= arr[j] && dep[j] >= arr[i]){
                    console.log("test")
                    platFormsNeeded++;
                }
            }
        }
    } 
    return platFormsNeeded
}

console.log(maxPlatforms(arr, dep, arrLength))