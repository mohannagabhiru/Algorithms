// Given an array of N elements and an integer X, find 3 elements in the array whose sum is closest to given element X in javascript

const arr = [1, 2, 3, 4, -5];
const x = 10;

let closestSumm = 0;
let elements = [];

function closestSum(arr, target){
    for(let i = 0; i < arr.length - 2; i++){
        for(let j = i + 1; j < arr.length - 1; j++){
            for(let k = j + 1; k < arr.length; k++){
                let sum = arr[j] + arr[i] + arr[k];
                if(sum > closestSumm && sum  < target){
                    closestSumm = sum
                    elements = [arr[i], arr[j], arr[k]]
                }
            }
        }
    }
}
closestSum(arr, x);
console.log(closestSumm, "cs", elements);