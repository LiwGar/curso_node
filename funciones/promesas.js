function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Hola, ' + nombre);
            resolve(nombre);
            reject('Hay un error');
        }, 2000);
    });
    
};

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla, Bla, Bla...');
            resolve(nombre);
            reject('Hay un error');
        }, 2000);
    });
   
};

function adios(nombre) {
    return new Promise (function(resolve, reject) {
        setTimeout(function() {
            console.log('Adios, ', nombre);
            resolve();
            reject('Hay un error');
        }, 4000);
    });
    
};


console.log('Iniciando proceso...');

hola('Carolina')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminando proceso...');
    })
    .catch((error) => {
        console.error('No se pudo concretar la conversacion');
        console.error(error);
    })