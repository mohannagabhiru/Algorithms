let str = "geeks quiz practice code";

function reverseWords(sentence){
    let separated = sentence.split(" ");
    let separatedLength = separated.length - 1;
    let ans = "";
    for( let i = separatedLength; i >= 0; i--){
        ans += separated[i] + " ";
    }
    return ans;
}

console.log(reverseWords(str));