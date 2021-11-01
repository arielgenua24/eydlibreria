"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const booksCategories_1 = require("./booksCategories");
const books_from_Empresa = booksCategories_1.Empresa.recomendations;
console.log(books_from_Empresa);
function showBooksFromCategory(param) {
    const array = param;
    array.forEach(element => {
    });
}
const category__empresa = document.querySelector('.button__categorie--empresa');
category__empresa.addEventListener('click', () => {
    //showBooksFromCategory()
});
