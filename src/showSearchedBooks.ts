import {searchBooks} from './searchBooks'
import {showRecomendations,finalAppend} from './showRecomendations'

const father_node:any = document.querySelector('.main_section')
const section_explore:any = document.querySelector('.section_explore');


    function delete_section_explore() {
        try {
            father_node.removeChild(section_explore);
        }
        catch(err) {
            console.log(err)
        }
       
    } 


const search_section__Container:any[] = [];
const search_section = document.createElement('section')
search_section.className = 'search_section'

let counter = 0;


function openSearchWindow(param:any[]) {
        const div__book__Container = document.createElement('div')


        const div__text__container = document.createElement('div')
        const h2 = document.createElement('h2')
        h2.textContent = `Tu busqueda numero ${counter} es:`
        h2.className = 'h2__search--size'
        div__text__container.appendChild(h2)

        
        

    if(search_section__Container.length < 1 ) {

        search_section__Container.push(search_section)
        father_node.appendChild(search_section)
        search_section.appendChild(div__book__Container)

     }
        console.log(`ESTOY ELIMINANDOOOO`)
            
        search_section.removeChild(div__book__Container)

        father_node.removeChild(search_section)
               
        
        param.forEach((el:any) => {
            
            console.log(el)
            div__book__Container.className = 'div__book__Container'

            const paragraph = document.createElement('p')
            paragraph.className = 'div__span-fontSize'
            paragraph.textContent = `${el.bookName}`

            const image = document.createElement('img')
            image.src = `${el.image}`
            image.className = "image_size"

            div__book__Container.append(paragraph,image)
            console.log(el)
        });

        father_node.appendChild(search_section)
        search_section.append(div__book__Container,div__text__container)
        
        
        
    
}




const searchBar:any = document.getElementById('searchBar');

    
    searchBar.addEventListener('keyup',(event:any) => {
    
    
    let userText = event.target.value;
    
    if(userText.length == 0) {

        father_node.removeChild(search_section)
        search_section__Container.pop();



    }


    if(userText.length > 0 && userText.length < 2) {
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