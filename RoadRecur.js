const arr = [1, 2, 3, 4, 5];

function factorial(num){
     console.log(num);
 			if(num.length === 1) return 1
      else{
      	   return factorial(num[num.length - 1]) * factorial(num.slice(0 , num.length - 1))
      }
}
console.log(factorial(arr));