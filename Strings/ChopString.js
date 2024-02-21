let str = "Helloworld";

const chopString = (str, length) => {
  let result = [];
  let i = 0;

  while (i < str.length) {
    result.push(str.slice(i, i + length));
    i += length;
  }

  return result;
};

console.log(chopString(str, 3));



// App 2 - Using regex
// let str = "Helloworld";
// console.log(str.match(new RegExp(".{1," + 3 + "}", "g")));