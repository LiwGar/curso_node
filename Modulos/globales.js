let i = 0;

console.log('Start')
let intervalo = setInterval(function () {
    console.log(1 + i);
    if(i === 10) {
        clearInterval(intervalo);
        console.log('Finish');
    }
    i++
    
}, 1000);

