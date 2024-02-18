function digitalClock(){
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return hours + ":" + minutes + ":" + seconds
}

setInterval(() => console.log(digitalClock()), [1000]);
