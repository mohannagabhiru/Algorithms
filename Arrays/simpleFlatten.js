// arr.concat() concatenates two arrays into one
// It can also be used to convert multi dimensional array to one dimension array

let arr = [
    [1, 2],
    [3, 4],
    [[5, 6],[7, 8, 9]],
    [10, 11, 12, 13, 14, 15]
];

// let output = [].concat.apply([], arr);
// console.log(arr.flat());

// Infinitely nested arrays
// console.log(arr.flat(Infinity));

// using reduce method

// const result = arr.reduce((acc, currvalue) => acc.concat(currvalue));
// console.log(arr);

// using spread method
// const combined = [].concat(...arr)
// console.log(combined);

function flat(arr){
    let output  = [];
    for (let element of arr){
        if(Array.isArray(element)){
            output.push(...flat(element))
        }else{
            output.push(element)
        }
    }
    return output
}
console.log(flat(arr), "new");