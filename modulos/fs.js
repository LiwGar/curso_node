const { error } = require('console');
const fs = require('fs');

// function read(ruta, callback) {
//     fs.readFile(ruta, (error, data) => {
//         callback(data.toString());
//     });
// }

// read(__dirname + '/archivoparaleer.txt', console.log)


// function write(ruta, contenido, callback) {
//     fs.writeFile(ruta, contenido, function(error) {
        
//             if (error) {
//                 console.error('No se ha podido escribir', error);
//             } else {
//                 console.log('Se ha escrito correctamente');
//             } 
//     }); 
// }

// // write(__dirname + '/archivoescrito.txt', 'Este es un ejemplo de archivo que fue escrito', console.log)
// read(__dirname + '/archivoescrito.txt', console.log)


// function writeSegundo(ruta, contenido, callbackSegund) {
//     fs.writeFile(ruta, contenido, function(error) {
//         if(error) {
//             console.error('Se ha paresentado un error, no se puedo crear archivo');
//         }else{
//             console.log('archivo creado correctamente');
//         }
//     }); 
// }

// writeSegundo(__dirname + '/archivoEscritoNum2.txt', 'Este es un seundo archivo creado y escrito desde una funicion', console.log);

// function read2(ruta, callbackTercero) {
//     fs.readFile(ruta, (error, data) => {
//         callbackTercero(data.toString());
//     })
// }

// read2(__dirname + '/archivoEscritoNum2.txt', console.log);


function deleteArchivo(ruta, callbackDelete) {
    fs.unlink(ruta,callbackDelete);
}

deleteArchivo(__dirname + '/archivoEscritoNum2.txt', console.log);
