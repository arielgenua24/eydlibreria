import {searchBooks} from './searchBooks'
import {showRecomendations,finalAppend} from './showRecomendations'

const father_node:any = document.querySelector('.main_section')
const section_explore:any = document.querySelector('.section_explore');


    function delete_home() {
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

function openSearchWindow() {
    

    console.log(search_section__Container.length)
    

    if(search_section__Container.length < 1 ) {
        
        search_section__Container.push(search_section)
        console.log(search_section__Container.length)
        father_node.appendChild(search_section)

        console.log(search_section__Container)

    } else {
        console.log(`NO ESTOY ELIMINANDOOOO`)

        father_node.removeChild(search_section)
        father_node.appendChild(search_section)
        
        
    }
    
}

const searchBar:any = document.getElementById('searchBar');

    
    searchBar.addEventListener('keyup',(event:any) => {
    
    
    let text = event.target.value;
    
    if(text.length == 0) {
        father_node.removeChild(search_section)
        search_section__Container.pop();
    }


    if(text.length > 0) {
        delete_home()
    } 

    const response = searchBooks(text);
    
    if(response) {
        console.log(`siiii`)
        openSearchWindow()
    } 
    


})