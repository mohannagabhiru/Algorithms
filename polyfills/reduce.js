let arr = [1, 2, 3, 4, 5];

// let first = 0;

Array.prototype.myReduce = function (cb, acc) {
    let output = acc
    for (let i =0; i < this.length; i++){
       output = output ? cb(output, this[i]) : this[i]
    }
    return output
}
let result = arr.myReduce((first , index) => first + index, 0);

console.log(result);