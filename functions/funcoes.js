const cachorros = require('../database/cachorros.json');

const fs = require('fs');
const path = require('path');

function salvar(cachorro) {

    let arquivo = path.resolve('../database/cachorros.json');
    let json = JSON.stringify(cachorros, null, 4);
    fs.writeFileSync(arquivo, json);

    // console.log('arquivo ' + arquivo);
    // console.log('json ' + json);
}






 function buscar(idBuscado)  { 
  let cachorro = cachorros.find(cachorro => {
     return cachorro.id == idBuscado;
  })
    if(cachorro) {
      return cachorro;
    } else {
      return `Não existe cachorro com o id ${idBuscado}`;
    }
  }
// console.log(buscar(200))
   

// const cachorros = require('../database/cachorros.json');
// const buscar = require('./funcoes');

function descrever(idDigitado) {
  let cachorro = buscar(idDigitado);  

  if(cachorro) {
    console.log(cachorro);
  } else {
    console.log(`Não existe cachorro com o id ${idDigitado}`);
  }
}


//Criando função adicionar 
let dog = {
   "nome": "Bob",
   "sexo": "m",
   "castrado": false,
   "dataDeNascimento": "2020-10-12",
   "peso": 3
};

function adicionar(dog) {
  let newDog = dog;

  newDog.id = cachorros.length + 1;
  newDog.vacinas = [];
  newDog.servicos = [];
  cachorros.push(newDog);
}

function vacinar(id, dadosVacina) {
  let dadosDoCachorro = buscar(id);

  if(dadosDoCachorro.nome) {  
    dadosDoCachorro.vacinas.push(dadosVacina);
  } else {
    console.log("Animal inexistente");
  }
}

function atribuicaoDeServico(id, dadosDoServico) {
  let dadosDoCachorro = buscar(id);
  if(dadosDoCachorro.id) {
    dadosDoCachorro.servicos.push(dadosDoServico)
  } else {
    console.log("Animal inexistente");
  }
}

function remover(id) {
  let servicosArray = buscar(id);
  if(servicosArray.id){
    servicosArray = [];
  } else {
    console.log("Animal inexistente");
  }
  }
