let arr = [2, 4 , 6];

// let result = arr.filter(num => num > 2);


Array.prototype.myFilter = function (callBack) {
    let output = [];
    for(let i =0 ; i < this.length; i++){
        if(callBack(this[i])){
            output.push(this[i])
        }
    }
    return output
}
let result = arr.myFilter((num) => num > 2)
console.log(result, "res")