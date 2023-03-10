
// recursion
// function factorial(number){
//     if(number == 1){
//         return 1
//     }
//     return number * factorial(number - 1)
// }

// for

function factorial(num){
    let number = 1;
    for(let i = 2; i <= num; i++){
        number = number * i
    }
    return number
}

console.log(factorial(-5));