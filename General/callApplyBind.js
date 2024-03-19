// Call method allows to use same method on different objects where object is passed as an argument
function test(a, b){
    return this.firstName + this.lastName + a + b
}
let obj  = {
    firstName : "mohan",
    lastName : "Naga"
}
console.log(test.call(obj, 1, 2));

// apply method is handy when we want to pass arguments as an array instead of argument list
function testApply(a, b){
    return this.firstParameter + a + this.secondParameter + b  
}
let obj2 = {
    firstParameter : "name",
    secondParameter : "age"
}
console.log(testApply.apply(obj2, ["abc", 23]))