nums = [1, 2, 3, 4, 5, 6, 7];
k = 3;

function rotate(nums, n){
    let rotated = [];
    for(let i = 0; i < nums.length; i++){
        rotated[(i + n) % nums.length] = nums[i] 
        // console.log((i + n) % nums.length)
    }
    return rotated
}

console.log(rotate(nums, k));

