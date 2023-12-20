async function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Hola, ' + nombre);
            resolve(nombre);
            reject('Hay un error');
        }, 1000);
    });
};

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla, Bla, Bla...');
            resolve(nombre);
            reject('Hay un error');
        }, 2000);
    });
   
};

async function adios(nombre) {
    return new Promise (function(resolve, reject) {
        setTimeout(function() {
            console.log('Adios, ', nombre);
            resolve();
            reject('Hay un error');
        }, 3000);
    });
    
};

async function main() {
    let nombre = await hola('Vicky');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios (nombre);
    console.log ('Terminando proceso...');
}

console.log ('Iniciando proceso...');
main();


// function hello(nombre) {
//     return new Promise(function(resolve, reject) { 
//         setTimeout(function() {
//             console.log('Hello, ' + nombre);
//             resolve(nombre);
//         }, 2000);
//     });
// }

// function talking(nombre) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log('34141 434923525893854 32489158321445 ');
//             resolve(nombre);
//         }, 1000);
//     });
    
// }

// function Bye(nombre) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log('Bye, ', nombre);
//             resolve();
//         }, 1000);
//     });
    
// }

// console.log('Inicio');

// hello('Vicky')
//     .then(talking)
//     .then(Bye)
//     .then((nombre) => {
//         console.log('Fin')
//     })
//     .catch((error) => {
//         console.error('No Talking');
//         console.error(error)
//     });



