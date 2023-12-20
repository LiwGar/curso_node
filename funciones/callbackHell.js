function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 2000);
};

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla, Bla, Bla...');
        callbackHablar();
    }, 2000);
};

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios, ', nombre);
        otroCallback();
    }, 4000);
};

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
  
};

console.log('Inciando proceso...', 3 + 3);

hola('Wil', function(nombre) {
    conversacion(nombre, 5, function() {
        console.log('Terminando proceso...', (5-4), (9-7), 3)
    })
})





// --
// hola('Wil', function(nombre) {
//     hablar(function() {
//         adios(nombre, function() {
//             console.log('Terminando proceso...', 5 + 9 + 3);
//         });
//     })
// });


