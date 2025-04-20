const list  = [5, 7, 16, 1, 2];
function checkCondition(arr){
		let highestNum = arr[0];
    for(let val of arr){
    	if(val > highestNum){
      	highestNum = val
      }
    }
    let addedValue = 0;
   for (let i = 0; i < arr.length; i++){
   if(arr[i] != highestNum){
   			addedValue += arr[i]
   		for ( let j = i+1; j < arr.length; j++){
        		if(arr[j] != highestNum){
            	addedValue += arr[j]
            }
        }
   }
   console.log(addedValue);
   		if(addedValue == highestNum){
      		return true
      }	else{
      addedValue = 0;
      }
   }
    return false
}
console.log(checkCondition(list));