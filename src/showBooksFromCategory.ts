import {booksCategories, neuroCiencia, desarrolloPersonal,tecnologia,PNL,marketing,autoayuda,Finanzas,liderazgo,psicologia,Empresa,Biografias} from './booksCategories'


export function showBooksFromCategory() {
    const father_node:any = document.querySelector('.main_section')
    const section_explore:any = document.querySelector('.section_explore')
    const section_categories:any = document.querySelector('.section_categories')
    const section__welcome:any = document.querySelector('.section__welcome')
    const section__knowMinds:any = document.querySelector('.section__knowMinds');


    const books_From_category:any = document.createElement('div')
    books_From_category.className = 'books_From_category'


    const books_from_Empresa = Empresa.books_From_category
    const books_from_neuroCiencia = neuroCiencia.books_From_category
    const books_from_desarrolloPersonal = desarrolloPersonal.books_From_category
    const books_from_tecnologia = tecnologia.books_From_category
    const books_from_PNL = PNL.books_From_category
    const books_from_marketing = marketing.books_From_category
    const books_from_autoayuda = autoayuda.books_From_category
    const books_from_Finanzas = Finanzas.books_From_category
    const books_from_liderazgo = liderazgo.books_From_category
    const books_from_psicologia = psicologia.books_From_category
    const books_from_Biografias = Biografias.books_From_category



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

    function add_and_delete_Dom_Elements() {

        father_node.style.height = '710px'

        father_node.removeChild(section_explore)
        father_node.removeChild(section_categories)
        father_node.appendChild(books_From_category)
        father_node.removeChild(section__welcome)
        father_node.removeChild(section__knowMinds)


    }





    const category__empresa:any = document.querySelector('.button__categorie--empresa')
    category__empresa.addEventListener('click', () => {
        add_and_delete_Dom_Elements()

        showBooksFromCategory(books_from_Empresa)


    })

    const category__biografias:any = document.querySelector('.button__categorie--biografias')

    category__biografias.addEventListener('click', () => {
        add_and_delete_Dom_Elements()

        showBooksFromCategory(books_from_Biografias)


    })

    const category__finanzas:any = document.querySelector('.button__categorie--Finanzas')

    category__finanzas.addEventListener('click', () => {
        add_and_delete_Dom_Elements()

        showBooksFromCategory(books_from_Finanzas)


    })

    const category__liderazgo:any = document.querySelector('.button__categorie--liderazgo')

    category__liderazgo.addEventListener('click', () => {
        add_and_delete_Dom_Elements()


        showBooksFromCategory(books_from_liderazgo)


    })


    const category__psicologia:any = document.querySelector('.button__categorie--psicologia')

    category__psicologia.addEventListener('click', () => {
        add_and_delete_Dom_Elements()


        showBooksFromCategory(books_from_psicologia)


    })


    const category__autoayuda:any = document.querySelector('.button__categorie--autoayuda')

    category__autoayuda.addEventListener('click', () => {
        add_and_delete_Dom_Elements()

        showBooksFromCategory(books_from_autoayuda)


    })

    const category__marketing:any = document.querySelector('.button__categorie--marketing')


    category__marketing.addEventListener('click', () => {
        add_and_delete_Dom_Elements()


        showBooksFromCategory(books_from_marketing)


    })



    const category__PNL:any = document.querySelector('.button__categorie--PNL')

    category__PNL.addEventListener('click', () => {
        add_and_delete_Dom_Elements()

        showBooksFromCategory(books_from_PNL)


    })

    const category__desarrolloPersonal:any = document.querySelector('.button__categorie--desarrolloPersonal')

    category__desarrolloPersonal.addEventListener('click', () => {
        add_and_delete_Dom_Elements()


        showBooksFromCategory(books_from_desarrolloPersonal)


    })



    const category__tecnologia:any = document.querySelector('.button__categorie--tecnologia')


    category__tecnologia.addEventListener('click', () => {
        add_and_delete_Dom_Elements()

        showBooksFromCategory(books_from_tecnologia)


    })

    const category__neuroCiencia:any = document.querySelector('.button__categorie--neuroCiencia')

    category__neuroCiencia.addEventListener('click', () => {
        add_and_delete_Dom_Elements()


        showBooksFromCategory(books_from_neuroCiencia)


    })



}


