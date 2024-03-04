/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

let nums = [0,1,1,3,3];
let k = 4;
function maxSubArrAvg(nums, k) {
    if(nums.length == 1){
        return nums[0]
    }
    let maxAverage = 0;
    for(let i = 0; i < nums.length; i++){
        let subArraySum = nums[i];
        if(i + k < nums.length){
            for(let j = i + 1; j < i + k; j++){
                subArraySum += nums[j];
                let subArrayAverage = subArraySum / k
                if(subArrayAverage > maxAverage){
                    maxAverage = subArrayAverage
                }
            }
        }
    }
    return maxAverage
};

console.log(maxSubArrAvg(nums, k))