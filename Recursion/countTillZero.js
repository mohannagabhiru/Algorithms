function countTillZero(num){
    if(num == 0){
        return 0
    }
   else{
        console.log(num);
        countTillZero(num - 1);
    }
}
countTillZero(10);