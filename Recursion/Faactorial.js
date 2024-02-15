function factoriaal(num){
    if(num == 0){
        return 1
    }
    else {
        return num * factoriaal(num - 1)
    }
}
console.log(factoriaal(4));