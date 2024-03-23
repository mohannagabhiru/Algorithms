const str = "vikataktttttttttttttvi"

function maxOccurance(str){
    let dummyObj = {}
    let maxOccur = 0;
    let maxLetter = '';
    const list = str.split('');
    for( let item of list){
        if(dummyObj[item]){
            dummyObj[item]++
        }else{
            dummyObj[item] = 1
        }
    }
    for( let letter in dummyObj){
        if(dummyObj[letter] > maxOccur){
            maxLetter = letter;
            maxOccur = dummyObj[letter]
        }
    }
    return [maxLetter, maxOccur]
}

console.log(maxOccurance(str));
