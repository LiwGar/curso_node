const os = require('os');

console.log(os.arch());
console.log(os.hostname());
console.log(os.version());
console.log(os.platform());
console.log(os.cpus());


// Calcular memoria disponible 

const SIZE = 1024;

function kb(bytes) { 
    return (bytes) / SIZE;
}

function mb(bytes) { 
    return kb(bytes) / SIZE;
}

function gb(bytes) { 
    return mb(bytes) / SIZE;
}

console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));