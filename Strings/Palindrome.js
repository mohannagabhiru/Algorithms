// An integer is palindrome when it reads same forward and backward

let num = '-01110';

//  In built





// Optimized
const checkInteger = (num) => {
    if(num < 0){
        return "Not a palindrome"
    }
    let i = 0
    let j = num.length - 1;
   while(i < j){
    console.log(num[i], num[j])
        if(num[i] !== num[j]){
            return "not a palindrome"
        }
        i++;
        j--
   }
   return "It's a palindrome"
} 

console.log(checkInteger(num))