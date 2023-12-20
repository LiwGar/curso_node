

// const {exec} = require('child_process');

// exec('ls -la', (error, stdout, sterror) => {
//     if(error) {
//         console.error(error);
//         return false;
//     }

//     console.log(stdout);
// });


const {exec, spawn} = require('child_process');

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
    console.log(dato.toString());
})

proceso.on('exit', function() {
    console.log('El proceso termino.');
})