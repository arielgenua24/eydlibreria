"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalAppend = exports.showRecomendations = exports.ShowUserChoicesResume = void 0;
var userChoices_1 = require("./userChoices");
var section_div_people__Node = document.querySelector('.section_div__people');
function ShowUserChoicesResume() {
    /*

    let div:any = document.createElement('div');
    div = '';

    arrayChoicesSelected.forEach(element => {
        div = div + ` ${element} `
    });
    section_div_people__Node.append(div);
*/
    console.log(userChoices_1.arrayChoicesSelected);
}
exports.ShowUserChoicesResume = ShowUserChoicesResume;
var container = [];
function showRecomendations(param) {
    var array = param;
    //param va a tener 2 elementos
    array.forEach(function (el) {
        var section__recomendations = document.createElement('section');
        section__recomendations.className = 'section__recomendations';
        var div__book__Container = document.createElement('div');
        div__book__Container.className = 'div__book__Container';
        var h2 = document.createElement('h2');
        h2.textContent = "" + el.bookName;
        h2.className = 'div__span-fontSize';
        div__book__Container.append(h2);
        var image = document.createElement('img');
        image.src = "" + el.image;
        image.className = 'image_size';
        div__book__Container.append(image);
        console.log(image);
        var div__book__Resume = document.createElement('div');
        div__book__Resume.className = 'div__book__Resume';
        var paragraph = document.createElement("p");
        paragraph.textContent = "" + el.description;
        div__book__Resume.append(paragraph);
        console.log(paragraph);
        var div__book__buy = document.createElement('div');
        div__book__buy.className = "div__book__buy";
        var button = document.createElement('button');
        button.textContent = 'Conectar con el vendedor por WhatsApp';
        div__book__buy.append(button);
        section__recomendations.append(div__book__Container, div__book__Resume, div__book__buy);
        container.push(section__recomendations);
    });
}
exports.showRecomendations = showRecomendations;
//el apend total sera todos los elementos creados, se uniran a section_div_people__Node.
function finalAppend() {
    section_div_people__Node.append.apply(section_div_people__Node, container);
}
exports.finalAppend = finalAppend;
