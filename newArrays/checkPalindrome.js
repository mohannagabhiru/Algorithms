let name = "khuuiik";

function checkPalindrome(name){
    let j = name.length - 1;
    console.log(j/2);
    for(let i = 0; i < name.length / 2; i++){
        console.log(name[i], name[j]);
        if(name[i] != name[j]){
            return false
        }
        j--;
    }
    return true;
}

console.log(checkPalindrome(name));

