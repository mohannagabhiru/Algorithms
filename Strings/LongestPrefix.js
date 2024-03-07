let items = ["geeksforgeeks", "geeks", "geek", "geezer"];
let word = ""
let commonPrefix = -Infinity

for(let i = 0; i < items.length; i++){
    for( let j = i+1; j < items.length; j++){
        for( let k = 0; k < items[j].length; k++){
            if(items[j][k]!= items[i][k] && k > 0){
                commonPrefix = k - 1;
                word = items[i]
            }
        }
    }
}
console.log(commonPrefix , word);