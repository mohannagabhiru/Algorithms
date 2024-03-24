const str = "hey hELLO man";
function convert(str){
    const updated = [];
    const words = str.split(' ');
    for(let word of words){
        updated.push(word[0].toUpperCase() + word.slice(1) + ' ')
    }
    return updated.join('')
}
console.log(convert(str));