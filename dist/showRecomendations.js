"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowUserChoicesResume = void 0;
var userChoices_1 = require("./userChoices");
var section_div_people__Node = document.querySelector('.section_div__people');
function ShowUserChoicesResume() {
    var div = document.createElement('div');
    div = '';
    userChoices_1.arrayChoicesSelected.forEach(function (element) {
        div = div + (" " + element + " ");
    });
    section_div_people__Node.append(div);
    console.log(userChoices_1.arrayChoicesSelected);
}
exports.ShowUserChoicesResume = ShowUserChoicesResume;
function showRecomendations() {
    var section__recomendations = document.createElement('section');
    var div__book__Container = document.createElement('div');
    var image = document.createElement('img');
    image.src = 'img';
    div__book__Container.append(image);
    var div__book__Resume = document.querySelector('div');
    var paragraph = document.createTextNode('');
    div__book__Resume.append(paragraph);
    var div__book__stadistics = document.querySelector('div');
    var stadistics = document.createTextNode('');
    div__book__stadistics.append(stadistics);
    var div__book__buy = document.querySelector('div');
    var button = document.createElement('button');
    button.textContent = '';
    div__book__buy.append(button);
    section__recomendations.append(div__book__Container, div__book__Resume, div__book__buy, div__book__stadistics);
    //el apend total sera todos los elementos creados, se uniran a section_div_people__Node.
    function finalAppend() {
        section_div_people__Node.append(section__recomendations);
    }
}
