const list = [0, 0, 0, 0, 0, 1, 1, ];

function findFirstOccurrence(arr, index = 0) {
    // Base case: if the current element is 1 or we've reached the end of the array
    if (arr[index] === 1 || index === arr.length - 1) {
        return index;
    } else {
        // Recursive case: continue searching in the rest of the array
        return findFirstOccurrence(arr, index + 1);
    }
}

console.log(findFirstOccurrence(list));