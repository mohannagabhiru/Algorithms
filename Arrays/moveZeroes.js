let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
let result = [];

let temp = 0;
// function moveZeroes(list){
for (let ele of arr){
    if(ele != 0){
        result.push(ele)
    }else{
        temp += 1;
    }
}
// }
console.log(temp);
for(let i = 0; i < temp; i++){
    result.push(0);
}
// moveZeroes(arr);
console.log(result)


