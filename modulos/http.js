const http = require('http');

http.createServer(router). listen (3000);

function router(request, response) {
    console.log('Nueva Perticion');
    console.log(request.url);

    switch (request.url) {
        case '/hola':
            response.write('Hola, que tal');
            response.end();
            break;
        
        default:
            response.write('Error 404: No se que es lo que quieres');
            response.end();
    }

    // response.writeHead(201, {'Content-Type': 'Text/plain'});

    // //Escribir respuesta al usuario
    // response.write('Ya se usar HTTP de Node.js!');

    // response.end();
}

console.log('Escuchando http en el puerto 3000');