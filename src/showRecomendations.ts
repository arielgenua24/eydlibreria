import {booksCategories, neuroCiencia, desarrolloPersonal,tecnologia,PNL,marketing,autoayuda,Finanzas,liderazgo,psicologia,Empresa,Biografias} from './booksCategories';

import {arrayChoicesSelected} from './userChoices'

const section_div_people__Node:any = document.querySelector('.section_div__people')

export function ShowUserChoicesResume(){

    /*

    let div:any = document.createElement('div');
    div = '';

    arrayChoicesSelected.forEach(element => {
        div = div + ` ${element} `
    });
    section_div_people__Node.append(div);
*/

    console.log(arrayChoicesSelected)
}


let container:any = [];

export function showRecomendations(param:any) {

    const array = param
    //param va a tener 2 elementos

    array.forEach((el:any) => {
        
    const section__recomendations:any = document.createElement('section');
    section__recomendations.className = 'section__recomendations'

    const div__book__Container: any = document.createElement('div')
    div__book__Container.className = 'div__book__Container'

    const h2 = document.createElement('h2')
    h2.textContent = `${el.bookName}`
    h2.className = 'div__span-fontSize'
    div__book__Container.append(h2)
    
    const image = document.createElement('img')
    image.src = `${el.image}`
    image.className = "image_size"
    div__book__Container.append(image) 
    console.log(image) 


    const div__book__Resume:any = document.createElement('div')
    div__book__Resume.className = 'div__book__Resume';
    const paragraph: any = document.createElement("p")
    paragraph.textContent = `${el.description}`
    div__book__Resume.append(paragraph)
    console.log(paragraph)

    

    const div__book__buy: any = document.createElement('div')
    div__book__buy.className = "div__book__buy"
    const button = document.createElement('button')
    button.textContent = 'Conectar con el vendedor por WhatsApp'
    div__book__buy.append(button)



    section__recomendations.append(div__book__Container, div__book__Resume,div__book__buy) 

    container.push(section__recomendations)

    });

    

    

}

//el apend total sera todos los elementos creados, se uniran a section_div_people__Node.


export function finalAppend() {

    section_div_people__Node.append(...container)


}

