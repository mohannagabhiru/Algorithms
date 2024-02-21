let arr = [1,6,8,9,10]
let targetSum = 14;

function target(arr, targetSum){
	let firstPointer = 0;
    let lastPointer = arr.length - 1
    let result = null
    
    while(firstPointer != lastPointer){
    	let sum = arr[firstPointer] + arr[lastPointer];
    	if(sum == targetSum){
      		result = [arr[firstPointer], arr[lastPointer]];
          break;
      }else if(sum < targetSum){
      			firstPointer++
      }else if(sum > targetSum){
      			lastPointer++
      }
    }
    
    return result
}
console.log(target(arr, targetSum))
console.log("test")