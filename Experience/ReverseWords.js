function reverseWords(str){
    let reversedWord = "";
    for( let i = str.length - 1; i >= 0; i--){
        reversedWord += str[i]
    }
    return reversedWord
}

console.log(reverseWords("Hello World"))
