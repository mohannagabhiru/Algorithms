let vowels = ['a', 'e', 'i', 'o', 'u'];
let str = "aaaaaa";
// function vowelsCount(str){
let count = 0;

for(let i = 0; i < str.length; i++){
    for(let j = 0; j< vowels.length; j++){
        // console.log(j);
        if(str[i] == vowels[j])
            count++;
            // return
    }
}
console.log(count)
    // return count
// }

// console.log(vowelsCount("aaaaaaa"));