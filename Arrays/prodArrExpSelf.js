let input = [1,2,3,4];

function product(){
    let output = [];
    for (let i = 0; i < input.length; i++){
        let product = 1;
        for(let j = i + 1; j < input.length; j++){
            product *= input[j];
        }
        output[i] = product;
    }
    return output
}
console.log(product());