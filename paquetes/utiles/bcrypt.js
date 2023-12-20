const bcrypt = require('bcrypt');

const password = '1234567890!';

bcrypt.hash(password, 3, function(error, hash) {
    console.log(hash);

    bcrypt.compare(password, hash, function(error, result) {
        // console.error(error);
        console.log(result);
    })
});


