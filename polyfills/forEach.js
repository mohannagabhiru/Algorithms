let arr = [2, 4 , 6];

// forEach
// Array.prototype.myForEach = function (cb) {
//     for(let i = 0; i < this.length; i++){
//         cb(this[i])
//     }
// }

// arr.myForEach((num) => console.log(num * 2));

// map
Array.prototype.myMap = function (cb) {
    let output = []
    for(let i = 0; i < this.length; i++){
        output.push(cb(this[i]))
    }
    return output
}

let result = arr.myMap(num => num * 2)
console.log(result);