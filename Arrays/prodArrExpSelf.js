let input =[-1,1,0,-3,3];

function product(){
    let output = [];
    for (let i = 0; i < input.length; i++){
        let product = 1;
        if(i > 0){
            for (let k = 0; k < i; k++){
                product *= nums[k]
            }
        }
        for(let j = i + 1; j < input.length; j++){ 
            console.log("curr", j)
            product *= input[j];
        }
        output[i] = product;
    }
    return output
}
console.log(product());