// concat method

let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]

let result = primeNumbers.concat(evenNumbers);
// console.log(result);

// Entries method

let arr = [2, 4, 5, 6];
let res = arr.entries();
for( let i of res){
    // console.log(i);
}
// console.log(res); 

// find method
let arr1 = [2, 4, 5, 6];
let res1 = arr1.find((item) => item > 2);
// console.log(res1);

// flat method returns an array flattened to specified depth
let numbers = [1, 2, [3, 4, [5, 6, [7, [8]]]]];
let result2 = numbers.flat(4);
// console.log(result2);

// forEach method returns an array modified with provided function
let arr2 = [2, 4, 5, 6];

// indexOf method returns index of specified element if found else -1
let languages = ["Java", "JavaScript", "Python", "JavaScript"];
// console.log(languages.indexOf("Python"));

// Pop actually removes last element of an array and returns that element
let cities = ["Madrid", "New York", "Kathmandu", "Paris"];
// console.log(cities.pop(), cities)

// Push actually add more elements towards end of the array
let cities1 = ["Madrid", "New York", "Kathmandu", "Paris"];
cities1.push("hyderabad");
// console.log(cities1);

// Reduce method executes reducer function and returns a single output value
let arr3 = [2, 4, 5, 6];

function reducer(acc = 0, num){
    return acc + num
}

const result3 = arr3.reduce(reducer);
// console.log(result3)

// Shift method removes first element of an array and removes that
let arr4 = [2, 4, 5, 6];
console.log(arr4.shift(), arr4);



