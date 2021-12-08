"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBooks = void 0;
const books_1 = require("./books");
const books = [books_1.habitos_para_ser_millonario, books_1.yoSteveJobs, books_1.como_hacer_que_la_gente_haga_cosas, books_1.SteveJobs, books_1.four, books_1.equiposExtremos, books_1.elEstiloVirgin, books_1.elModeloToyota, books_1.nuncaTiresLaToalla, books_1.Propaganda, books_1.elHombreYsusSimbolos, books_1.laExperienciaDelCliente, books_1.loInconciente, books_1.innovadoresQueHacenHistoria, books_1.elLibroRojo, books_1.oceanoAzul, books_1.graciasPorLLegarTarde, books_1.EstoEsMarketing, books_1.pensarRapidoPensarDespacio, books_1.padreRicoPadrePobre_RobertKi, books_1.elJuegoDelDinero_RobertKi, books_1.elToqueDeMildas_RobertKi, books_1.chrisGardener, books_1.despertandoAlGiganteInterior, books_1.elCaminoDeLaPerfeccion, books_1.las12PalancasDelExito, books_1.elPoderDeLaIntencion, books_1.Originales, books_1.ElHombreEnBuscaSentido, books_1.quinientas__mujeres, books_1.quinientos__hombres, books_1.liderazgoCentradoEnPrincpios];
let lista = [books_1.habitos_para_ser_millonario.id, books_1.yoSteveJobs.id, books_1.como_hacer_que_la_gente_haga_cosas.id, books_1.SteveJobs.id, books_1.four.id, books_1.equiposExtremos.id, books_1.elEstiloVirgin.id, books_1.elModeloToyota.id, books_1.nuncaTiresLaToalla.id, books_1.Propaganda.id, books_1.elHombreYsusSimbolos.id,
    books_1.laExperienciaDelCliente.id, books_1.loInconciente.id, books_1.innovadoresQueHacenHistoria.id, books_1.elLibroRojo.id, books_1.oceanoAzul.id, books_1.graciasPorLLegarTarde.id, books_1.EstoEsMarketing.id, books_1.pensarRapidoPensarDespacio.id, books_1.padreRicoPadrePobre_RobertKi.id, books_1.elJuegoDelDinero_RobertKi.id, books_1.elToqueDeMildas_RobertKi.id, books_1.chrisGardener.id, books_1.despertandoAlGiganteInterior.id, books_1.elCaminoDeLaPerfeccion.id, books_1.las12PalancasDelExito.id, books_1.elPoderDeLaIntencion.id, books_1.Originales, books_1.ElHombreEnBuscaSentido.id, books_1.quinientas__mujeres.id, books_1.quinientos__hombres.id, books_1.liderazgoCentradoEnPrincpios.id];
function searchBooks(param) {
    let userSearch = param;
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
    let userData = stringToNumber(userSearch);
    let listaSorted = lista.sort();
    function binarySearch(lista, comienzo, final, objetivo) {
        if (comienzo > final) {
            console.log(`lo siento, tu libro no se ha encontrado`);
            return false;
        }
        let medio = Math.round((comienzo + final) / 2);
        if (lista[medio] == objetivo) {
            console.log(`felicidade! este es tu libro`);
            const book = books.filter(element => element.id == lista[medio]);
            return book;
        }
        else if (objetivo > lista[medio]) {
            return binarySearch(lista, medio + 1, final, objetivo);
        }
        else if (objetivo < lista[medio]) {
            return binarySearch(lista, comienzo, medio - 1, objetivo);
        }
    }
    let x = binarySearch(listaSorted, 0, listaSorted.length, userData);
    return x;
}
exports.searchBooks = searchBooks;
