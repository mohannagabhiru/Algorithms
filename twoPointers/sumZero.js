const arr = [-5,-4,-3,-2,0,2,4,6,-5];

function checkSum(array){
    let left = 0;
    let right = array.length - 1;
    while(left < right){
        let sum = array[left] + array[right];
        if(sum == 0){
            return [array[left], array[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++
        }
    }
    return "No pair found"
}

console.log(checkSum(arr));