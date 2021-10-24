import {booksCategories, neuroCiencia, desarrolloPersonal,tecnologia,PNL,marketing,autoayuda,Finanzas,liderazgo,psicologia,Empresa,Biografias} from './booksCategories';

import {arrayChoicesSelected} from './userChoices'

const section_div_people__Node:any = document.querySelector('.section_div__people')

export function ShowUserChoicesResume(){

    

    let div:any = document.createElement('div');
    div = '';

    arrayChoicesSelected.forEach(element => {
        div = div + ` ${element} `
    });
    section_div_people__Node.append(div);


    console.log(arrayChoicesSelected)
}

function showRecomendations() {

    const section__recomendations:any = document.createElement('section');

    const div__book__Container: any = document.createElement('div')
    const image = document.createElement('img')
    image.src = 'img'
    div__book__Container.append(image)



    const div__book__Resume:any = document.querySelector('div')
    const paragraph: any = document.createTextNode('')
    div__book__Resume.append(paragraph)


    const div__book__stadistics: any = document.querySelector('div')
    const stadistics: any = document.createTextNode('')
    div__book__stadistics.append(stadistics)
    
    const div__book__buy: any = document.querySelector('div')
    const button = document.createElement('button')
    button.textContent = ''
    div__book__buy.append(button)



    section__recomendations.append(div__book__Container,div__book__Resume,div__book__buy,div__book__stadistics)

    //el apend total sera todos los elementos creados, se uniran a section_div_people__Node.

    function finalAppend() {

        section_div_people__Node.append(section__recomendations)


    }



}

