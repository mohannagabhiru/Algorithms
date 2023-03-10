function isPrime(number){
    // let primeList = [];
    // for(let i = start; i <= end; i++){
    //         for(let j = 2;  j <= i; j++ ){
    //                 if( i % j )
    //         }
    // }
    if(number < 2){
        return false
    }

    for(let i = 2 ; i < number; i++){
        if( number % i === 0){
            return false
        }
    }

    return true
}
console.log(isPrime(4));