let arr = [5, 7, 8, 9];

function smallest(list){
    let smallNum ;
    for(let i = 0; i < list.length; i++){
        if( i === 0){
            smallNum = list[i]
        }
        if(list[i] < smallNum){
            smallNum = list[i]
        }
    }
    return smallNum
}

console.log(smallest(arr));