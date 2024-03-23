let arr = [111, 13, 25, 9, 34, 1];

// console.log(sum(arr));
let firstNum = Infinity;
let secondNum = Infinity;
for( let num of arr){
    if(num < firstNum){
        firstNum = num
    }
}

for( let num2 of arr){
    if(num2 < secondNum && num2 > firstNum){
        secondNum = num2
    }
}   

console.log(firstNum, secondNum);

