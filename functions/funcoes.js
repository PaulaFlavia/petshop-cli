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
salvar();





 function buscar(idBuscado)  { 
   function temIdIgualAoBuscado(cachorro){
    if(cachorro.id == idBuscado){
         return  true;
        
    } else {
        return false;
        }
   }
    return cachorros.find(temIdIgualAoBuscado);
      
        }
       
    

console.log(buscar(3));

 module.exports ={salvar, buscar} 

