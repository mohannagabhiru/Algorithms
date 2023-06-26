function secondHighest(arr, n){
    let highest = -Infinity, secondHighest = -Infinity;
    for( let i =0; i < n; i++){
        if(arr[i] > highest){
            secondHighest = highest
            highest = arr[i];
        }
        else if(arr[i]<highest && arr[i]>secondHighest){
            secondHighest = arr[i];
        }
    }
    return secondHighest
}
const arr = [12, 11, 12]
console.log(secondHighest(arr, arr.length)) 

