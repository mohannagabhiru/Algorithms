let arr = [1,2, 1, 2, 3];
let final  = [];
arr.sort();

let temp;

for(let i = 0; i < arr.length; i++){
    if(arr[i] !== temp){
        final.push(arr[i]);
        temp = arr[i];
    }
}
console.log(final);