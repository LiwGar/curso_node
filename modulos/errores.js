
// function serompe() {
//     return 3 + z;
// }

// try {
//     serompe();
// } catch(error) {
//     console.log('Hubo un error');
//     console.error(error.message);
//     console.info('pero no pasa nada');
// }

// console.log('y podemos continuar');



function asyncronaQueSeRompe(callback) {
   setTimeout(function() {
        try {
        let a = 3 + 5 + z;
        console.log(a)
        }catch(error) {
            console.error('error en funcion asincrona');
            callback(error);
        }
   });
}

try {
    asyncronaQueSeRompe(function(error) {
        console.error(error.message);
    });
} catch(error) {
    console.log('Hubo un error');
}

console.log('y podemos continuar');