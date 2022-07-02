
const cachorros = require('../database/cachorros.json');
const buscar = require('./funcoes');

function descrever(idDigitado) {
    let cachorro = buscar(idDigitado);  
    console.log(cachorro);

    // if(cachorro) {
    //     console.log(cachorro);
    // } else {
    //     console.log(`Não existe cachorro com o id ${idDigitado}`);
    // }

}
descrever(2);
