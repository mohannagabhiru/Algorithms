function fibonacci(num){
		let list = [0, 1];
    for(let i = 2; i <= num; i++){
    list[i] = list[i -1] + list[i -2]
    }
    console.log(list);
}
fibonacci(5);

// console.log("hello")