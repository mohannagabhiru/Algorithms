// Maximum number in an array
let array1 = [4,7,8,3,9]

function checkMaxNumber(arr){
    if(arr.length == 0){
        return "Array empty";
    }
    let maxNumber = arr[0];
    // for(let i = 0; i <= arr.length - 1; i++){
    //     if(arr[i] > maxNumber){
    //         maxNumber = arr[i]
    //     }
    // }
    for(let item of arr){
        if(item > maxNumber){
            maxNumber = item
        }
    }
    return maxNumber
}
console.log(checkMaxNumber(array1));
