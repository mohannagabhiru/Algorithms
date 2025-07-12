// const arr = [3, 4, 5, 6];
// const res = arr.every((item) => item > 4);
// console.log(res);

let obj = {
  first: "test",
  second: "test2",
  third: "test3"
}
[obj.first, obj.second] = [2, 3];
console.log(obj)