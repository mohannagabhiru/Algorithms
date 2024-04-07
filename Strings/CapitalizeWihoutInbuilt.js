const str = "Capitalize the first letter of each word in a sentence";

function capitalize(str){
    let capitals = '';
    let capitalizeNext = true;

    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(capitalizeNext && char != ' '){
            capitals += char.toUpperCase();
            capitalizeNext = false
        }else{
            capitals += char;
            if(char == " "){
                capitalizeNext = true
            }
        }
    }
    return capitals
}

console.log(capitalize(str))