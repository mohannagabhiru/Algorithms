
const Input= [10, 9, 8, 7, 3, 4, 6, 5, 2]
let Sum = 20

function findArray(arr, n){
	let finalArray = [];
  for(let i = 0; i < arr.length; i++){
  	/* 	if(arr[i] + arr[i+1] + arr[i+2] == Sum){
  		          finalArray.push(arr[i])
  		          finalArray.push(arr[i + 1])
  		          finalArray.push(arr[i + 2])
  		      } */
            let currentSum = arr[i];
            for(let j = i + 1; j < arr.length; j++){
            			currentSum += arr[j];
                  console.log(currentSum)
                  if(currentSum == 20){
                  		return Input.slice(i, j+1)
                       for(let k = j - 1; k <= j; k++ ){
                          finalArray.push(arr[k])  
                      }          
                  }else if (currentSum > 20){
												break;
                  }
            }
  }
}

console.log(findArray(Input, Input.length))