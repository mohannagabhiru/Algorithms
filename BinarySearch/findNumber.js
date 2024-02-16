let arr = [2, 3, 4, 5, 10];

function findNumber(arr, target){
    let beg = 0;
    let end = arr.length - 1;
    console.log(beg, end);
    while(beg <= end){
        let middle = Math.floor( (beg + end) / 2) ;
        console.log(middle)
        if(arr[middle] == target){
            return true
        }
        if(arr[middle] < target){
            beg = middle + 1
        }else if(arr[middle] > target){
            end = middle - 1
        }
    }
    return false
}

console.log(findNumber(arr, 2))