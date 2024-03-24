let arr = [ 87, 95, 133, 1, 9]

function findMinMax(arr){
    let min = Infinity;
    let max = -Infinity;
    for( let item of arr){
        if(item < min){
            min = item
        }
        if(item > max){
            max = item
        }
    }
    return {min, max}
}
console.log(findMinMax(arr));