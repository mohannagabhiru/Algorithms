let arr1 = [7, 1, 5, 2, 3, 6];
let arr2 = [3, 8, 6, 20, 7];

function findIntersection(data1, data2){
    let intersectionElements = [];
    for(let i = 0; i < data1.length ; i++){
        for(let j = 0 ; j < data2.length; j++){
            if(data1[i] == data2[j]){
                intersectionElements.push(data1[i])
            }
        }
    }
    return intersectionElements
}

console.log(findIntersection(arr1, arr2))
