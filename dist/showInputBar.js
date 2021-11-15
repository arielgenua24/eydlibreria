"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show_inputBar = void 0;
const input_search = document.querySelector('.input__search');
const header_div = document.querySelector('.header_div');
const header_h1 = document.querySelector('.header-h1');
function show_inputBar() {
    input_search.style.visibility = 'visible';
    //header_div.style.height = '91px';
    header_h1.style.visibility = 'hidden';
}
exports.show_inputBar = show_inputBar;
