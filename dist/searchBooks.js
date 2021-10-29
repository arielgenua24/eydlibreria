"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const books_1 = require("./books");
//El algoritmo solo trabajara con la primer palabra de lo que de el usuario, si el nombre del libro es muy largo, si el nombre no es muy largo, trbajaremos normal.
//El usuario puede brindarme el libro que busca, si el titulo es muy largo, busco solo la primer palabra, si o si, sea la palabra que sea, este debe estar en toLowerCase()
//El usurio me ira dando letra por letra, 
function stringToNumber(bookName) {
    if (bookName.length > 5) {
        const newBookName = bookName.slice(0, 5);
        let bookNameLowerCase = newBookName.toLowerCase();
        let bookStrToArray = [...bookNameLowerCase];
        let concatNumbers = ``;
        bookStrToArray.forEach(element => {
            let stringToNumber = element.charCodeAt(0);
            concatNumbers += `${stringToNumber}`;
        });
        let Id = Number(concatNumbers.slice(0, 12));
        return Id;
    }
    else {
        let bookNameLowerCase = bookName.toLowerCase();
        let bookStrToArray = [...bookNameLowerCase];
        let concatNumbers = ``;
        bookStrToArray.forEach(element => {
            let stringToNumber = element.charCodeAt(0);
            concatNumbers += `${stringToNumber}`;
        });
        let Id = Number(concatNumbers.slice(0, 12));
        return Id;
    }
}
;
let userData = stringToNumber('steve jobs ');
const books = [books_1.habitos_para_ser_millonario, books_1.yoSteveJobs, books_1.como_hacer_que_la_gente_haga_cosas, books_1.SteveJobs, books_1.four, books_1.equiposExtremos, books_1.elEstiloVirgin, books_1.elModeloToyota, books_1.nuncaTiresLaToalla, books_1.Propaganda, books_1.elHombreYsusSimbolos, books_1.laExperienciaDelCliente, books_1.loInconciente, books_1.innovadoresQueHacenHistoria, books_1.elLibroRojo, books_1.oceanoAzul, books_1.graciasPorLLegarTarde, books_1.EstoEsMarketing, books_1.pensarRapidoPensarDespacio, books_1.padreRicoPadrePobre_RobertKi, books_1.elJuegoDelDinero_RobertKi, books_1.elToqueDeMildas_RobertKi];
function showBookfinded(param) {
    const x = books.filter(element => element.id == param);
    console.log(`este es tu libro`);
    console.log(x);
}
//tenemos que encontrar un numero
let lista = [books_1.habitos_para_ser_millonario.id, books_1.yoSteveJobs.id, books_1.como_hacer_que_la_gente_haga_cosas.id, books_1.SteveJobs.id, books_1.four.id, books_1.equiposExtremos.id, books_1.elEstiloVirgin.id, books_1.elModeloToyota.id, books_1.nuncaTiresLaToalla.id, books_1.Propaganda.id, books_1.elHombreYsusSimbolos.id,
    books_1.laExperienciaDelCliente.id, books_1.loInconciente.id, books_1.innovadoresQueHacenHistoria.id, books_1.elLibroRojo.id, books_1.oceanoAzul.id, books_1.graciasPorLLegarTarde.id, books_1.EstoEsMarketing.id, books_1.pensarRapidoPensarDespacio.id, books_1.padreRicoPadrePobre_RobertKi.id, books_1.elJuegoDelDinero_RobertKi.id, books_1.elToqueDeMildas_RobertKi.id];
//let lista =  [2,4,6]
let listaSorted = lista.sort();
let final = listaSorted.length;
function binarySearch(lista, comienzo, final, objetivo) {
    console.log(lista, comienzo, final, objetivo);
    if (comienzo > final) {
        console.log(`lo siento, tu libro no se ha encontrado`);
        return false;
    }
    let medio = Math.round((comienzo + final) / 2);
    if (lista[medio] == objetivo) {
        console.log(`Se ha encontrado tu libro!: ${lista[medio]}`);
        showBookfinded(lista[medio]);
    }
    else if (objetivo > lista[medio]) {
        return binarySearch(lista, medio + 1, final, objetivo);
    }
    else if (objetivo < lista[medio]) {
        return binarySearch(lista, comienzo, medio - 1, objetivo);
    }
}
let x = binarySearch(listaSorted, 0, listaSorted.length, userData);
