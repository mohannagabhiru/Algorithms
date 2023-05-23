function range(start, end){
    // let finalArr = [];
    // if(start === end){
    //     console.log(start, finalArr);
    //     return finalArr;
    // }else{
    //     console.log(start);
    //     finalArr.push(start);
    //     range(start + 1, end);
    // }
    if(end < start){
        return []
    }else{
        const number = range(start, end - 1)
        console.log(number);
        number.push(end);
        return number
    }
}

range(1, 5)
