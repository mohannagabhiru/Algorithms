let namee = "testing";

// Without any methods
let result = "";
for (let i = namee.length - 1; i >=0 ; i--){
    console.log(i);
    result += namee[i];
}
console.log(result);

// using built in methods
function reverseString(str){
    return str.split("").reverse().join("")
}

console.log(reverseString("hello babi"))
