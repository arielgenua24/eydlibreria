const input_search:any = document.querySelector('.input__search');

const header_div:any = document.querySelector('.header_div')

const header_h1:any = document.querySelector('.header-h1')


export function show_inputBar() {
    input_search.style.visibility = 'visible';
    //header_div.style.height = '91px';
    header_h1.style.visibility = 'hidden'

}



