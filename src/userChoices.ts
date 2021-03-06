import { showRecomendations, finalAppend} from './showRecomendations'

import {booksCategories, neuroCiencia, desarrolloPersonal,tecnologia,PNL,marketing,autoayuda,Finanzas,liderazgo,psicologia,Empresa,Biografias} from './booksCategories'


const arrayChoicesSelected: string[] = [];


export function userChoicesRecomendations(){

    const section_div_people__Node:any = document.querySelector('.section_div__people')
    const fatherNode:any = document.querySelector('.section_div_choices')
    const firstRowFather:any =document.querySelector('.div__firstRow--container')  
    const secondRowFather:any =document.querySelector('.div__secondRow--container')     

    const endChoicesButton:any = document.querySelector('#button_endChoices')

    endChoicesButton.addEventListener('click', (event:any)=> {

        section_div_people__Node.removeChild(fatherNode);
        event.stopPropagation();
        finalAppend()
        

    })


    const jobsRecomendations:any = document.querySelector('#button_jobs');

     jobsRecomendations.addEventListener('click', (event:any) => {

        const span_jobs:any = document.querySelector('.span_button-Jobs');
        arrayChoicesSelected.push(span_jobs.innerHTML);
        firstRowFather.removeChild(jobsRecomendations)
        event.stopPropagation();

        showRecomendations(Biografias.recomendations)

        
    })

    const tecnologiaRecomendations:any = document.querySelector('#button_tecnologia');

    tecnologiaRecomendations.addEventListener('click',(event:any) => {

        const span_tecnologia:any = document.querySelector('.span_button-Tecnologia');
        arrayChoicesSelected.push(span_tecnologia.innerHTML);
        firstRowFather.removeChild(tecnologiaRecomendations)
        event.stopPropagation();
        showRecomendations(tecnologia.recomendations)
        

    })
    const RobertKiyosakiRecomendations:any = document.querySelector('#button_RobertKiyosaki');

    RobertKiyosakiRecomendations.addEventListener('click',(event:any) => {

        const span_RobertKiyosaki:any = document.querySelector('.span_button-RobertKiyosaki');
        arrayChoicesSelected.push(span_RobertKiyosaki.innerHTML);
        firstRowFather.removeChild(RobertKiyosakiRecomendations)
        event.stopPropagation();
        showRecomendations(Finanzas.recomendations)
        

    })

    const marketingRecomendations:any = document.querySelector('.class__button--marketing');

    marketingRecomendations.addEventListener('click', (event:any) => {

        const span_Marketing:any = document.querySelector('.span_button-Marketing');
        arrayChoicesSelected.push(span_Marketing.innerHTML);
        secondRowFather.removeChild(marketingRecomendations)
        event.stopPropagation();
        showRecomendations(marketing.recomendations)
        

    })

    const psicologiaRecomendations:any = document.querySelector('#button_Psicologia');

    psicologiaRecomendations.addEventListener('click', (event:any) => {

        const span_Psicologia:any = document.querySelector('.span_button-Psicologia');
        arrayChoicesSelected.push(span_Psicologia.innerHTML);
        secondRowFather.removeChild(psicologiaRecomendations)
        event.stopPropagation();
        showRecomendations(psicologia.recomendations)
        

    })

    const empresasRecomendations:any = document.querySelector('#button_empresas');

    empresasRecomendations.addEventListener('click',(event:any) => {

        const span_Empresas:any = document.querySelector('.span_button-Empresas');
        arrayChoicesSelected.push(span_Empresas.innerHTML);
        secondRowFather.removeChild(empresasRecomendations)
        event.stopPropagation();
        showRecomendations(Empresa.recomendations)
        
        
    })



}


