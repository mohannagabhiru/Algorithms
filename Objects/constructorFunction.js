function createObject(name, age){
    this.name = name;
    this.age = age;
}   
const newObj = new createObject('abc', 89)
console.log(newObj);