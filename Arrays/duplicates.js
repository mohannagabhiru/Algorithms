let arr = [1,2,3,1];

function checkArr(){
    for(let i=0; i < arr.length; i++){
        console.log( i );
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                return true;
            }
        }
    }
    return false
}

// function checkArr(){
//     for(let i=0; i < arr.length; i++){
//         let localArr = [];
//         if(localArr.indexOf(arr[i]) == -1){
//             localArr.push(arr[i])
//         }else{
//             return true
//         }
//         return false
//     }
// }

console.log(checkArr());