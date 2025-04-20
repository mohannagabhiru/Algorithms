let arr = [2, 4 , 6];

// forEach
// Array.prototype.myForEach = function (cb) {
//     for(let i = 0; i < this.length; i++){
//         cb(this[i])
//     }
// }

// arr.myForEach((num) => console.log(num * 2));

// map
// Array.prototype.myMap = function (cb) {
//     let output = []
//     for(let i = 0; i < this.length; i++){
//         output.push(cb(this[i]))
//     }
//     return output
// }

// let result = arr.myMap(num => num * 2)
// console.log(result);

function print(item){
    console.log(item);
}
const arr1 = [1,2,3,4,5];
Array.prototype.myForEach = function(cb){
    for( let index = 0; index < this.length; index++){
        cb(this[index]);
    }
}
// [1,2,3,4,5].myForEach((num) => print(num));

// [1,2,3,4,5].forEach((item)=> console.log(item)); 

// Array.prototype.myMap = function(cb){
//     let result = [];
//     for( let i = 0; i < this.length; i++){
//         result.push(cb(this[i], i, this));
//     }
//     return result
// }

// console.log(arr1.myMap((item) => item * 2));

Array.prototype.myReduce = function(cb, init){
    let result = init;
    for( let index = 0; index < this.length; index++){
        result = cb(this[index], result);
    }
    return result
}

// console.log(arr1.myFilter(item => item > 2, 0))

console.log(arr1.myReduce((acc, initValue) => acc + initValue, 0));

