const inputString = 'aabcccccaaa';

function compressString(str){
    let compressedString = '';
    let count = 0;

    for( let i = 0; i < str.length; i++){
        if(str[i] == str[i + 1]){
            count += 1
        }else{
            compressedString += str[i]
        }
    }
    return compressedString
}
console.log(compressString(inputString))