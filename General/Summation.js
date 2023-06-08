function sum(num){
    let finalSum = 0;
    while(num > 0){
        finalSum += num;
        num--;
    }
    return finalSum
}
console.log(sum(11))