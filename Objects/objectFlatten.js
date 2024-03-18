let obj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91-999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};
// const flattenObj = (ob) => {
// let res = {};
// for(let i in ob){
//     // console.log(i);
//     if((typeof i) === "object" && !Array.isArray(ob[i])){
//         const temp = flattenObj(ob[i]);
//         for( let j in temp){
//             res[i + '.' + j] = temp[j];
//         }
//     }else{
//         res[i] = ob[i]
//     }
// }
// return res
// }
const flattenObj = (ob) => {
 
    // The object which contains the
    // final result
    let result = {};
 
    // loop through the object "ob"
    for (const i in ob) {
 
        // We check the type of the i using
        // typeof() function and recursively
        // call the function again
        if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
            const temp = flattenObj(ob[i]);
            for (const j in temp) {
 
                // Store temp in result
                result[i + '.' + j] = temp[j];
            }
        }
 
        // Else store ob[i] in result directly
        else {
            result[i] = ob[i];
        }
    }
    return result;
};
console.log(flattenObj(obj));