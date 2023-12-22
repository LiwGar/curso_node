console.time('Total bucles');
console.time('bucle 1');
let suma = 0;

for (let i = 0; i < 10000000; i++) {
    suma += 1;
}
console.timeEnd('bucle 1');

console.time('bucle 2');

let suma2 = 0;

for (let j = 0; j < 1000000000; j++) {
    suma2 += 1;
}

console.timeEnd('bucle 2');

console.time('asincrono');
console.log('Empieza el proceso async');

asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    });

console.timeEnd('Total bucles');

function asincrona() {
    return new Promise( (resolve) => {
        setTimeout(function() {
            console.log('Termina el proceso asincrono');
            resolve();
        }, 1000);
    });
}
