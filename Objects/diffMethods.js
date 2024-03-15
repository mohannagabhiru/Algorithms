let obj1 = {name:"abc", age: 23, sex: "m"}
let obj2 = {name:"aby", age: 25}
let obj3 = {}

// To find equality
// console.log(Object.is(obj1, obj2));

// To assign all properties from source to target
// console.log(Object.assign(obj3, obj1, obj2))

// To get each key and value pair
// let obj7 = [1,4,5,6,7]
// for(let [key, index] of Object.entries(obj1)){
//     console.log(key, index)
// }

// to get all values of object
// console.log(Object.values(obj1))

// To know if a property exists
// console.log(obj2.hasOwnProperty('sex'))

// To freeze an object , throws an error in strict mode
const obj = {
    prop: 42
};
Object.freeze(obj);
obj.prop = 32
console.log(obj);

