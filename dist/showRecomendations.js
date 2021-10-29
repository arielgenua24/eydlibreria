"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalAppend = exports.showRecomendations = exports.ShowUserChoicesResume = void 0;
const userChoices_1 = require("./userChoices");
const section_div_people__Node = document.querySelector('.section_div__people');
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
let container = [];
function showRecomendations(param) {
    const array = param;
    //param va a tener 2 elementos
    array.forEach((el) => {
        const section__recomendations = document.createElement('section');
        section__recomendations.className = 'section__recomendations';
        const div__book__Container = document.createElement('div');
        div__book__Container.className = 'div__book__Container';
        const h2 = document.createElement('h2');
        h2.textContent = `${el.bookName}`;
        h2.className = 'div__span-fontSize';
        div__book__Container.append(h2);
        const image = document.createElement('img');
        image.src = `${el.image}`;
        image.className = "image_size";
        div__book__Container.append(image);
        console.log(image);
        const div__book__Resume = document.createElement('div');
        div__book__Resume.className = 'div__book__Resume';
        const paragraph = document.createElement("p");
        paragraph.textContent = `${el.description}`;
        div__book__Resume.append(paragraph);
        console.log(paragraph);
        const div__book__buy = document.createElement('div');
        div__book__buy.className = "div__book__buy";
        const button = document.createElement('button');
        button.textContent = 'Conectar con el vendedor por WhatsApp';
        div__book__buy.append(button);
        section__recomendations.append(div__book__Container, div__book__Resume, div__book__buy);
        container.push(section__recomendations);
    });
}
exports.showRecomendations = showRecomendations;
//el apend total sera todos los elementos creados, se uniran a section_div_people__Node.
function finalAppend() {
    section_div_people__Node.append(...container);
}
exports.finalAppend = finalAppend;
