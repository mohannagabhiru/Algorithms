let s = "AABABBA";
let k = 1


function characterCount(str, limit){
    let chars = {}
    if(str.length == 0){
        return 0
    }
    for(let i = 0; i < str.length; i++){
        if(chars[str[i]]){
            chars[str[i]] += 1
        }else{
            chars[str[i]] = 1
        }
    }
    return chars
}
console.log(characterCount(s, k))
