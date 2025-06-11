
function substringLength(str){
    if(str.length == 0){
        return 0
    }
    let strLength = 0;
    let currentSubstring = "";
    for( let i = 0; i < str.length; i++){
        if(currentSubstring.indexOf(str[i]) == -1){
            currentSubstring += str[i]
        }else{
            if(strLength < currentSubstring.length){
                strLength = currentSubstring.length;
            }
             currentSubstring = str[i]
        }
    }
    return strLength
}

console.log(substringLength(" "))