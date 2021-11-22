
const section_div_people__Node:any = document.querySelector('.section_div__people')


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
    console.log(h2)
    
    const image = document.createElement('img')
    image.src = `${el.image}`
    image.className = "image_size"
    div__book__Container.append(image) 
    console.log(image) 


    const div__book__Resume:any = document.createElement('div')
    div__book__Resume.className = 'div__book__Resume';
    const paragraph: any = document.createElement("p")
    paragraph.textContent = `${el.description}`
    console.log(paragraph.length)

    if(paragraph.length > 49) {
        console.log(paragraph.length)
        const oldParagraph  = paragraph;
        const lessParagraph = oldParagraph.slice(0,50)
        const newParagraph = `${lessParagraph}...` 
        div__book__Resume.append(newParagraph)
        console.log(paragraph.length)
        console.log(newParagraph.length)


 
     } else {
         div__book__Resume.append(paragraph)
         console.log(paragraph.length)
 

     }




    const instagramLink = document.createElement('a')
    instagramLink.className = 'instagramLink'
    instagramLink.href = 'https://www.instagram.com/eydlibreria/'
    instagramLink.innerHTML = '<img class="instagram__icon" src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"/>'


    div__book__Resume.append(instagramLink)
    console.log(paragraph)

    

    const div__book__buy: any = document.createElement('div')
    div__book__buy.className = "div__book__buy"
    const button = document.createElement('button')
    button.textContent = 'Conectar con el vendedor por WhatsApp'
    div__book__buy.append(button)
    console.log(div__book__buy)

    section__recomendations.append(div__book__Container, div__book__Resume,div__book__buy) 

    container.push(section__recomendations)

    });

}

//el apend total sera todos los elementos creados, se uniran a section_div_people__Node.


export function finalAppend() {

    section_div_people__Node.append(...container)


}

