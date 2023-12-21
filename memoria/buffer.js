// let buffer = Buffer.alloc(50);

//  let buffer = Buffer.from('vehiculo: Renault')

// console.log(buffer.toString());



// Abecedario trabajando con Buffer

let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 65;
}

console.log(abc);
console.log(abc.toString());