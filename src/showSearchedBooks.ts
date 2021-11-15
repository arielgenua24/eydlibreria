import {searchBooks} from './searchBooks'


export function showSearchedBooks() {

    const father_node:any = document.querySelector('.main_section')
    const section__welcome:any = document.querySelector('.section__welcome')
    const section_explore:any = document.querySelector('.section_explore');
    const section_categories:any = document.querySelector('.section_categories')
    const section_all:any = document.querySelector('.section_all')
    const section__knowMinds:any  = document.querySelector('.section__knowMinds')
     

    function delete_section_explore() {
        
        father_node.removeChild(section_explore);
        father_node.removeChild(section__welcome);
        father_node.removeChild(section_categories);
        father_node.removeChild(section_all);
        father_node.removeChild(section__knowMinds);
            
        
    } 


    const search_section__Container:any[] = [];
    const search_section = document.createElement('section')
    search_section.className = 'search_section'

    let counter = 1;


     function openSearchWindow(param:any[]) {
            const div__searchedBook__Container = document.createElement('div')
            div__searchedBook__Container.className = 'div__searchedBook__Container';

            father_node.style.height = '715px';


            const div__text__container = document.createElement('div')
            div__text__container.className = 'div__text__container'
            const h2 = document.createElement('h2')
            h2.textContent = `Esta ha sido tu busqueda numero ${counter} :`
            h2.className = 'h2__search--size'
            div__text__container.appendChild(h2)

            
            

        if(search_section__Container.length < 1 ) {

            search_section__Container.push(search_section)
            father_node.appendChild(search_section)
            search_section.appendChild(div__searchedBook__Container)

        }
            console.log(`ESTOY ELIMINANDOOOO`)
                
            search_section.removeChild(div__searchedBook__Container)

            father_node.removeChild(search_section)
                
            
            param.forEach((el:any) => {
                
                console.log(el)

                const paragraph = document.createElement('p')
                paragraph.className = 'div__span-fontSize'
                paragraph.textContent = `${el.bookName}`

                const image = document.createElement('img')
                image.src = `${el.image}`
                image.className = "image_size"

                div__searchedBook__Container.append(paragraph,image,div__text__container)
                console.log(el)
            });

            father_node.appendChild(search_section)
            search_section.append(div__searchedBook__Container)
            
            
            
        
    }




    const searchBar:any = document.getElementById('searchBar');

        
        searchBar.addEventListener('keyup',(event:any) => {
        
        
        let userText = event.target.value;
        
        if(userText.length == 0) {

        

            father_node.removeChild(search_section)
            search_section__Container.pop(); 



        }


        if(userText.length > 0 && userText.length < 4) {
            delete_section_explore()
        } 

        const response = searchBooks(userText);
        console.log(response)
        
        if(response) {
            console.log(`siiii`)
            openSearchWindow(response)
            counter = counter + 1;
        } 
        


    })



}

    