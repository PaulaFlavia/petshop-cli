const cachorros = require('../database/cachorros.json')

function descrever(idDigitado){
    function temIdIgualAoDigitado(id){
         if(idDigitado == cachorros.id){
            return true;
         } else if(idDigitado!= cachorros.id){
            return `Não existe cachorro com o id ${id}`;
            } else {
                return false;
              }
    }
            
         
     return cachorros.find(idDigitado);
       
} 
console.log(descrever(3));

// function buscar(idBuscado)  { 
//     function temIdIgualAoBuscado(cachorro){
//      if(cachorro.id === idBuscado){
//           return  true;
         
//      } else {
//          return false;
         
//      }
//     }
//      return cachorros.find(temIdIgualAoBuscado);
       
//          }
        