let arr = [4,2,1,3]

var minimumAbsDifference = function(arr) {
    // Sort the array to simplify finding the minimum absolute difference
    arr.sort((a, b) => a - b);
    
    // Initialize variables to track the minimum absolute difference and the pairs with that difference
    let minDiff = Infinity;
    let result = [];
    
    // Iterate through the sorted array and compare adjacent elements
    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];
        
        // Update minDiff if a smaller absolute difference is found
        if (diff < minDiff) {
            minDiff = diff;
            result = [[arr[i - 1], arr[i]]];
        } else if (diff === minDiff) {
            // If the difference is equal to the current minimum, add the pair to the result
            result.push([arr[i - 1], arr[i]]);
        }
    }
    
    return result;
};