
const cachorros = require('./database/cachorros.json');

const fs = require('fs');
const path = require('path');
const { builtinModules } = require('module');

let funcoes = {
  salvar: function() {
    let arquivo = path.resolve('./database/cachorros.json');
    let json = JSON.stringify(cachorros, null, 4);
  
    fs.writeFileSync(arquivo, json);
  } ,

  buscar: function(id) { 
    let cachorro = cachorros.find(cachorro => {
       return cachorro.id == id;
    })
      if(cachorro) {
        return cachorro;
      } else {
        return `Não existe cachorro com o id ${id}`;
      }
  },

  listar: function(){
    console.table(cachorros);
  },

  descrever:function(id) {
    let cachorro = this.buscar(id);  
  
    if(cachorro) {
      console.log(cachorro);
    } else {
      console.log(`Não existe cachorro com o id ${id}`);
    }
  },

  adicionar:function(dog) {
    let newDog = dog;
  
     newDog.id = cachorros.length + 1;
     newDog.vacinas = [];
     newDog.servicos = [];
     cachorros.push(newDog);
     this.salvar;
  },

  vacinar:function(id, dadosVacina) {
    let dadosDoCachorro = this.buscar(id);
  
    if(dadosDoCachorro.id) {  
      dadosDoCachorro.vacinas.push(dadosVacina);
    } else {
      console.log("Animal inexistente");
    }
   },

   atribuirServico: function(id, dadosDoServico) {
    let dadosDoCachorro = this.buscar(id);
    if(dadosDoCachorro.id) {
      dadosDoCachorro.servicos.push(dadosDoServico)
    } else {
      console.log("Animal inexistente");
    }
  },

  remover: function remover(id) {
    let dadosDoCachorro = this.buscar(id);
    if(dadosDoCachorro.id){
      let index = cachorros.findIndex(function(cachorros){
      return cachorros;
      })
      cachorros.splice(index,1 );
        this.salvar();
    } else {
        console.log("Animal inexistente");
      }

  }

}

  

module.exports = funcoes;