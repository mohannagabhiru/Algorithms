let numbers = [-5, 2, 4, 6, 10];
let target = 6;

function checkTarget(arr, num){
    let firstNum = 0;
    let lastNum = arr.length - 1;
    console.log(firstNum, lastNum);
    while(firstNum < lastNum){
        let middleNum = Math.floor((firstNum + lastNum)/2)
        if(arr[middleNum] === num){
            return middleNum
        }
        if(arr[middleNum] < num){
            firstNum = middleNum + 1
        }else{
            lastNum = middleNum - 1
        }
    }
    return -1
}

console.log(checkTarget(numbers, target))

