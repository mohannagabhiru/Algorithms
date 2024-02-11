let arr = [-1, 2, -1, 3, 0];

function findNonRepeating(arr) {
    for (let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                console.log(arr[j])
                break;
            }
            if(j == arr.length - 1){
                // j = arr[j]
                return arr[i]
            }
        }
    }
}

console.log(findNonRepeating(arr));