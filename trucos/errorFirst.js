function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch(error) {
            callback(error);
        }
    }, 1000);
}

asincrona(function(error, dato){
    if(error) {
        console.error('Tenemos un error');
        console.error(error.message);
        return false;
        //throw error; NO VA A FUNCIONAR
    }
    console.log('Todo ha ido bien, mi data es', dato);

});