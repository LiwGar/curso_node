const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

// readableStream.setEncoding('UTF-8');

// readableStream.on('data', function(chunk) {
    
//     data += chunk;
// })

// readableStream.on('end', function() {
//     console.log(data);
// })

// process.stdout.write('hola que tal');

const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, callback) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);


