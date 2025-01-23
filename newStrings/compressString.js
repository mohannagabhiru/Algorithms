let str = "heeellllooooo";
let result = "";
let count = 1;
for(let i = 0; i < str.length ; i++){
    // console.log(i, count);
    if(str[i] === str[i + 1]){
        count += 1;
    }else{
        result += count + str[i];
        count = 1;
    }
}
console.log(result);