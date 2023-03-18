function powerOfTwo(num){
    let result = 1;
    let number = 2;
        if(num == 0){
            return result;
        }
        for( let i = 2; i <= num; i++){
            console.log(i, result)
            result = result * i
        }
        return result
}
console.log(powerOfTwo(5))