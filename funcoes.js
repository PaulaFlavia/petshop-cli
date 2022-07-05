const cachorros = require('./database/cachorros.json');

const fs = require('fs');
const path = require('path');
const { builtinModules } = require('module');

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function salvar(cachorro) {

    let arquivo = path.resolve('./database/cachorros.json');
    let json = JSON.stringify(cachorros, null, 4);

      fs.writeFileSync(arquivo, json);
}

//  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function buscar(id) { 
  let cachorro = cachorros.find(cachorro => {
     return cachorro.id == id;
  })
    if(cachorro) {
      return cachorro;
    } else {
      return `Não existe cachorro com o id ${id}`;
    }
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function listar(){
  console.table(cachorros);
}

// console.table(cachorros);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


function descrever(id) {
  let cachorro = buscar(id);  

  if(cachorro) {
    console.log(cachorro);
  } else {
    console.log(`Não existe cachorro com o id ${id}`);
  }
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let dog = {
   "nome": "Bob",
   "sexo": "m",
   "castrado": false,
   "dataDeNascimento": "2020-10-12",
   "peso": 3
}

function adicionar(dog) {
  let newDog = dog;

   newDog.id = cachorros.length + 1;
   newDog.vacinas = [];
   newDog.servicos = [];
   cachorros.push(newDog);
}
// adicionar(dog);
// console.table(cachorros);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//  let dadosVacina = {"nome": "giardia", "data": "2022-07-04"};

function vacinar(id, dadosVacina) {
  let dadosDoCachorro = buscar(id);

  if(dadosDoCachorro.id) {  
    dadosDoCachorro.vacinas.push(dadosVacina);
  } else {
    console.log("Animal inexistente");
  }
 } 
// vacinar(5, {"nome": "giardia", "data": "2022-07-04"} )
// console.table(cachorros);
// console.log(cachorros[4]);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// let dadosDoServico = {"nome": "banho", "data": "2022-07-04"};

function atribuirDeServico(id, dadosDoServico) {
  let dadosDoCachorro = buscar(id);
  if(dadosDoCachorro.id) {
    dadosDoCachorro.servicos.push(dadosDoServico)
  } else {
    console.log("Animal inexistente");
  }
}
// atribuirServico(5, {"nome": "banho", "data": "2022-07-04"});
// console.table(cachorros);
// console.log(cachorros[4]);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  function remover(id) {
    let dadosDoCachorro = buscar(id);
    // console.log(dadosDoCachorro);
    
    if(dadosDoCachorro.id){
      let indiceCachorro = cachorros.indexOf(dadosDoCachorro)
      // console.log('--- indice cachorro: ', indiceCachorro);
      cachorros[indiceCachorro].servicos = [];
    } else {
      console.log("Animal inexistente");
    }
  }

//   remover(20);

// console.table(cachorros);
module.exports = {};