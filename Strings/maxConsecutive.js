let str = "aaaabbcbbb";
let currentLetter = "";
let maxConsecutivecharLength = -Infinity;
let maxConsecutivechar = "";

for( let i = 0; i < str.length; i++){
    if(currentLetter != str[i]){
        currentLetter = str[i]
    }
    console.log(currentLetter);
    for(let j = i + 1; j < str.length; j++){
            if(currentLetter != str[j] && ){
                maxConsecutivechar = str[i]
                maxConsecutivecharLength = j
            }
    }
}

console.log(maxConsecutivechar, maxConsecutivecharLength);