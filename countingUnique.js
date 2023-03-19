let list = [1,1,2,2,3,4,5,5,6,7,7,8,8,8];
let uniqueList= [];
let uniqueNumbers = 0;

function findUnique(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < uniqueList.length; j++){}
        if(uniqueList.indexOf(arr[i]) === -1){
            uniqueList.push(arr[i]);
        }
    }
}
findUnique(list);
console.log(uniqueList.length);

