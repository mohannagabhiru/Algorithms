let string = "abc$ke#";

const isSpecial = (value) => {
    let arr = ['$', '#'];
    return arr.includes(value);
}

const reverseString = (str) => {
    let i = 0;
    let j = str.length - 1;
    
    let newArr = [...str];
    
    while (i <= j){
        if (!isSpecial(newArr[i]) && !isSpecial(newArr[j])){
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
            i++;
            j--;
        }else if (!isSpecial(newArr[i]) && isSpecial(newArr[j])){
            j--;
            
            
        }else{
            i++;
        }
    }
    
    return newArr.join("");
    
}

console.log(reverseString(string))