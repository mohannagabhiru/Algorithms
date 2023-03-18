function findTargetSum(arr, target){
    let firstPointer = 0;
    let lastPointer = arr.length - 1;
    let result = null;

    while(firstPointer != lastPointer){
        let finalSum = arr[firstPointer] + arr[lastPointer];
        if(finalSum === target){
            result = [arr[firstPointer], arr[lastPointer]];
            break;
        }else if(finalSum < target){
            firstPointer++;
        }else if(finalSum > target){
            lastPointer--;
        }
    }   
    return result
}

console.log("hello");
console.log(findTargetSum([1,2,3,4,5],7))
console.log(findTargetSum([1,6,8,9,10],14))
console.log(findTargetSum([1,3,4,6,8,10],12))

