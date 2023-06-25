const list = [1,2,3,4,5,6];

list.forEach((item, index) => {
    if(item % 2 == 0){
            list.splice(index, 1)
    }
})

console.log(list);