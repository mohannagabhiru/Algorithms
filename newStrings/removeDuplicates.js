// let str = "abcdadbgggc";

let original = "Hello World";
let result = "";
function reverseString(str){
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i]
    }
}
reverseString(original);
console.log(result);