function removeDuplicates(arr, n){
    let unique = []
    for(let i = 0; i < n; i++){
        if(unique.indexOf(arr[i]) == -1){
            unique.push(arr[i])
        }
    }
    return unique
}
let arr = ["a","a","a","a","a","a","b","b","b","c","c","c","t","t"];
console.log(removeDuplicates(arr, arr.length));