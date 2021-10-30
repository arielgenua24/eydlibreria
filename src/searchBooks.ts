import {habitos_para_ser_millonario, yoSteveJobs, como_hacer_que_la_gente_haga_cosas, SteveJobs, four, equiposExtremos,elEstiloVirgin, elModeloToyota, nuncaTiresLaToalla, Propaganda, elHombreYsusSimbolos,laExperienciaDelCliente,loInconciente,innovadoresQueHacenHistoria,elLibroRojo,oceanoAzul,graciasPorLLegarTarde,EstoEsMarketing,pensarRapidoPensarDespacio,padreRicoPadrePobre_RobertKi,elJuegoDelDinero_RobertKi,elToqueDeMildas_RobertKi } from './books'


const books = [habitos_para_ser_millonario, yoSteveJobs, como_hacer_que_la_gente_haga_cosas, SteveJobs, four, equiposExtremos,elEstiloVirgin, elModeloToyota, nuncaTiresLaToalla, Propaganda, elHombreYsusSimbolos,laExperienciaDelCliente,loInconciente,innovadoresQueHacenHistoria,elLibroRojo,oceanoAzul,graciasPorLLegarTarde,EstoEsMarketing,pensarRapidoPensarDespacio,padreRicoPadrePobre_RobertKi,elJuegoDelDinero_RobertKi,elToqueDeMildas_RobertKi]



let lista = [habitos_para_ser_millonario.id, yoSteveJobs.id, como_hacer_que_la_gente_haga_cosas.id, SteveJobs.id, four.id,equiposExtremos.id,elEstiloVirgin.id, elModeloToyota.id, nuncaTiresLaToalla.id, Propaganda.id, elHombreYsusSimbolos.id
   ,laExperienciaDelCliente.id,loInconciente.id,innovadoresQueHacenHistoria.id,elLibroRojo.id,oceanoAzul.id,graciasPorLLegarTarde.id,EstoEsMarketing.id,pensarRapidoPensarDespacio.id,padreRicoPadrePobre_RobertKi.id,elJuegoDelDinero_RobertKi.id,elToqueDeMildas_RobertKi.id]




function searchBooks(param:string) {

let userSearch = param;

function stringToNumber(bookName:string) {
   
   
   if(bookName.length > 5) {
      const newBookName = bookName.slice(0,5)
      
      let bookNameLowerCase = newBookName.toLowerCase()

      let bookStrToArray = [...bookNameLowerCase]
     
      let concatNumbers = ``
  
      bookStrToArray.forEach(element => {
         let stringToNumber = element.charCodeAt(0);
         
          concatNumbers += `${stringToNumber}` 
  
     });
     
     let Id = Number(concatNumbers.slice(0,12))


     return Id

      } else{

      let bookNameLowerCase = bookName.toLowerCase()

      let bookStrToArray = [...bookNameLowerCase]
     
      let concatNumbers = ``
  
      bookStrToArray.forEach(element => {
         let stringToNumber = element.charCodeAt(0);
         
          concatNumbers += `${stringToNumber}` 
        
     });
     
     let Id = Number(concatNumbers.slice(0,12))
     
     return Id

   }


};

let userData = stringToNumber(userSearch)



let listaSorted = lista.sort();

   function binarySearch(lista:number[],comienzo:number,final:number,objetivo:number):any {

      if( comienzo > final) {
         console.log(`lo siento, tu libro no se ha encontrado`)
         return false;
         
      }

      let medio = Math.round((comienzo + final) / 2) 

      if(lista[medio] == objetivo) {
         
         console.log(`felicidade! este es tu libro`)
         const book = books.filter(element => element.id == lista[medio])

         return book;


      } else if(objetivo > lista[medio]) {
         return binarySearch(lista,medio + 1,final,objetivo)

      }else if(objetivo < lista[medio]) {
         return binarySearch(lista,comienzo,medio - 1,objetivo)

      }

   }
   let x = binarySearch(listaSorted,0,listaSorted.length,userData)
   return x   


}

export {searchBooks};

