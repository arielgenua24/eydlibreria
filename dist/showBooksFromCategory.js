"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showBooksFromCategory = void 0;
const booksCategories_1 = require("./booksCategories");
function showBooksFromCategory() {
    const father_node = document.querySelector('.main_section');
    const section_explore = document.querySelector('.section_explore');
    const section_categories = document.querySelector('.section_categories');
    const section__welcome = document.querySelector('.section__welcome');
    const section__knowMinds = document.querySelector('.section__knowMinds');
    const añadidosRecientemente = document.querySelector('.añadidosRecientemente');
    const search__button = document.querySelector('.search__button');
    const books_From_category = document.createElement('div');
    books_From_category.className = 'books_From_category';
    const books_from_Empresa = booksCategories_1.Empresa.books_From_category;
    const books_from_neuroCiencia = booksCategories_1.neuroCiencia.books_From_category;
    const books_from_desarrolloPersonal = booksCategories_1.desarrolloPersonal.books_From_category;
    const books_from_tecnologia = booksCategories_1.tecnologia.books_From_category;
    const books_from_PNL = booksCategories_1.PNL.books_From_category;
    const books_from_marketing = booksCategories_1.marketing.books_From_category;
    const books_from_autoayuda = booksCategories_1.autoayuda.books_From_category;
    const books_from_Finanzas = booksCategories_1.Finanzas.books_From_category;
    const books_from_liderazgo = booksCategories_1.liderazgo.books_From_category;
    const books_from_psicologia = booksCategories_1.psicologia.books_From_category;
    const books_from_Biografias = booksCategories_1.Biografias.books_From_category;
    let container = [];
    function showBooksFromCategory(param) {
        const array = param;
        array.forEach(el => {
            const section__books = document.createElement('section');
            section__books.className = 'section__books';
            const div__book__Container = document.createElement('div');
            div__book__Container.className = 'div__book__Container--Fromcategories';
            const h2 = document.createElement('h2');
            h2.textContent = `${el.bookName}`;
            h2.className = 'div__bookTitle';
            div__book__Container.append(h2);
            console.log(h2);
            const image = document.createElement('img');
            image.src = `${el.image}`;
            image.className = "bookImage_size";
            div__book__Container.append(image);
            console.log(image);
            const div__book__Resume = document.createElement('div');
            div__book__Resume.className = 'div__book__Resume--fromCategories';
            const paragraph = document.createElement("p");
            paragraph.textContent = `${el.description}`;
            div__book__Resume.append(paragraph);
            console.log(paragraph);
            const div__book__buy = document.createElement('div');
            div__book__buy.className = "div__book__buy--fromCategories";
            const buttonWhatsapp = document.createElement('a');
            buttonWhatsapp.href = `https://web.whatsapp.com/send?phone=543512264081?text=Me%20interesa%20el%20libro%20${el.bookName}`;
            buttonWhatsapp.target = '_blank';
            buttonWhatsapp.textContent = 'Conectar con el vendedor por WhatsApp';
            div__book__buy.append(buttonWhatsapp);
            console.log(div__book__buy);
            section__books.append(div__book__Container, div__book__Resume, div__book__buy);
            container.push(section__books);
        });
        books_From_category.append(...container);
    }
    function add_and_delete_Dom_Elements() {
        father_node.style.height = '710px';
        father_node.removeChild(section_explore);
        father_node.removeChild(section_categories);
        father_node.appendChild(books_From_category);
        father_node.removeChild(section__welcome);
        father_node.removeChild(section__knowMinds);
        father_node.removeChild(añadidosRecientemente);
    }
    const category__empresa = document.querySelector('.button__categorie--empresa');
    category__empresa.addEventListener('click', () => {
        add_and_delete_Dom_Elements();
        showBooksFromCategory(books_from_Empresa);
    });
    const category__biografias = document.querySelector('.button__categorie--biografias');
    category__biografias.addEventListener('click', () => {
        add_and_delete_Dom_Elements();
        showBooksFromCategory(books_from_Biografias);
    });
    const category__finanzas = document.querySelector('.button__categorie--Finanzas');
    category__finanzas.addEventListener('click', () => {
        add_and_delete_Dom_Elements();
        showBooksFromCategory(books_from_Finanzas);
    });
    const category__liderazgo = document.querySelector('.button__categorie--liderazgo');
    category__liderazgo.addEventListener('click', () => {
        add_and_delete_Dom_Elements();
        showBooksFromCategory(books_from_liderazgo);
    });
    const category__psicologia = document.querySelector('.button__categorie--psicologia');
    category__psicologia.addEventListener('click', () => {
        add_and_delete_Dom_Elements();
        showBooksFromCategory(books_from_psicologia);
    });
    const category__autoayuda = document.querySelector('.button__categorie--autoayuda');
    category__autoayuda.addEventListener('click', () => {
        add_and_delete_Dom_Elements();
        showBooksFromCategory(books_from_autoayuda);
    });
    const category__marketing = document.querySelector('.button__categorie--marketing');
    category__marketing.addEventListener('click', () => {
        add_and_delete_Dom_Elements();
        showBooksFromCategory(books_from_marketing);
    });
    const category__PNL = document.querySelector('.button__categorie--PNL');
    category__PNL.addEventListener('click', () => {
        add_and_delete_Dom_Elements();
        showBooksFromCategory(books_from_PNL);
    });
    const category__desarrolloPersonal = document.querySelector('.button__categorie--desarrolloPersonal');
    category__desarrolloPersonal.addEventListener('click', () => {
        add_and_delete_Dom_Elements();
        showBooksFromCategory(books_from_desarrolloPersonal);
    });
    const category__tecnologia = document.querySelector('.button__categorie--tecnologia');
    category__tecnologia.addEventListener('click', () => {
        add_and_delete_Dom_Elements();
        showBooksFromCategory(books_from_tecnologia);
    });
    const category__neuroCiencia = document.querySelector('.button__categorie--neuroCiencia');
    category__neuroCiencia.addEventListener('click', () => {
        add_and_delete_Dom_Elements();
        showBooksFromCategory(books_from_neuroCiencia);
    });
}
exports.showBooksFromCategory = showBooksFromCategory;
