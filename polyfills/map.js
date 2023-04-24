Array.prototype.nap = function (callBack){
    console.log("in callback");
    let output = [];
    this.forEach((element, index) => {
        console.log("hello", output.length);
        output.push(callBack(element, index, this))
    })
    return output
}

console.log([1,2,3,4].nap((item) => item * 10))