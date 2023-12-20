function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback();
    }, 6000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios, ' + nombre);
        otroCallback();
    }, 1000);
}

console.log('Inciando proceso...', 2 + 3);

hola('Wil', function() {
    adios('Wil', function() {
        console.log('Terminando proceso...', 5 + 9 + 3);
    });
    
});


