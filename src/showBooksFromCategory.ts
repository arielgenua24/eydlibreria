import {Empresa} from './booksCategories'


const father_node:any = document.querySelector('.main_section')
const section_explore:any = document.querySelector('.section_explore')
const section_categories:any = document.querySelector('.section_categories')

const books_From_category:any = document.createElement('div')
books_From_category.className = 'books_From_category'


const books_from_Empresa = Empresa.books_From_category
console.log(books_from_Empresa)

let container:any = [];


function showBooksFromCategory(param:any[]) {
    const array = param;

    array.forEach(el => {
        
    const section__books:any = document.createElement('section');
    section__books.className = 'section__books'

    const div__book__Container: any = document.createElement('div')
    div__book__Container.className = 'div__book__Container--Fromcategories'

    const h2 = document.createElement('h2')
    h2.textContent = `${el.bookName}`
    h2.className = 'div__bookTitle'
    div__book__Container.append(h2)
    console.log(h2)
    
    const image = document.createElement('img')
    image.src = `${el.image}`
    image.className = "bookImage_size"
    div__book__Container.append(image) 
    console.log(image) 


    const div__book__Resume:any = document.createElement('div')
    div__book__Resume.className = 'div__book__Resume--fromCategories';
    const paragraph: any = document.createElement("p")
    paragraph.textContent = `${el.description}`
    div__book__Resume.append(paragraph)
    console.log(paragraph)


    const div__book__buy: any = document.createElement('div')
    div__book__buy.className = "div__book__buy--fromCategories"
    const button = document.createElement('button')
    button.textContent = 'Conectar con el vendedor por WhatsApp'
    div__book__buy.append(button)
    console.log(div__book__buy)



    section__books.append(div__book__Container, div__book__Resume,div__book__buy) 

    container.push(section__books)
    

    });


    books_From_category.append(...container)

}





const category__empresa:any = document.querySelector('.button__categorie--empresa')

category__empresa.addEventListener('click', () => {
    father_node.removeChild(section_explore)
    father_node.removeChild(section_categories)
    father_node.appendChild(books_From_category)


    showBooksFromCategory(books_from_Empresa)


})