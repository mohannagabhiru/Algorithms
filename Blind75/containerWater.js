let input = [1,8,6,2,5,4,8,3,7];

function checkMaximum(heights){
    if(heights.length == 0){
        return 0
    }
    let inputSize = heights.length
    let maximum = 0;

    // bruteforce approach
    // for(let i = 0; i < inputSize; i++){
    //     for(let j = i + 1; j < inputSize; j++){
    //         let area = (j - i) * Math.min(heights[i], heights[j]);
    //         if(area > maximum){
    //             maximum = area
    //         }
    //     }
    // }

    // Two pointer approach
    let leftPointer = 0;
    let rightPointer = inputSize - 1;
    console.log(rightPointer, leftPointer);
    while(leftPointer < rightPointer){
         let area = (rightPointer - leftPointer) * Math.min(heights[leftPointer], heights[rightPointer]);
         if(area > maximum){
            maximum = area
         }
         
         if(heights[leftPointer] > heights[rightPointer]){
            rightPointer--
         }else{
            leftPointer++
         }
    }
    return maximum
}

console.log(checkMaximum([1,7,2,5,4,7,3,6]));