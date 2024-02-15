let list = [5, 6, 7, 8];
function checkProduct(list){
    if(list.length == 0){
        return 1
    }else{
        return list[list.length - 1] * checkProduct(list.slice(0, list.length - 1))
    }
}
console.log(checkProduct(list))