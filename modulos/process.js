process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('El proceso terminó');
});

process.on('uncaughtException', (error, origen) => {
    console.error('Se nos ha olvidado captura el error');
    console.error(`El error es que:  ${(error.message)}`);
}); 

// functionQueNoExiste();

console.log('Esto es lo que sucede si el error no se recoge, no sale');
    
