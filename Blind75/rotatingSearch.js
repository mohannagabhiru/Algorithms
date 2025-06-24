 function findIndex(nums, target){

 if(nums.length == 0){
        return -1
    }
    let low = 0;
    let high = nums.length - 1;
    while(low < high){
        let middle = Math.floor((low + high)/ 2);
            if(nums[middle] == target) return middle
            if(nums[low] < nums[middle]){
                if(target > nums[low] && target < nums[middle]){
                    high = middle
                }else{
                    low = middle + 1
                }
            }else{
                if(target > nums[middle] && target < nums[high]){
                    low = middle + 1
                }else{
                    high = middle 
                }
            }
    }
    return nums[low] == target? low : -1
}
console.log(findIndex([4,5,6,7,0,1,2], 0))