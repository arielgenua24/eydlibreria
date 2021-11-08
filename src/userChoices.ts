import { showRecomendations, finalAppend} from './showRecomendations'

import {booksCategories, neuroCiencia, desarrolloPersonal,tecnologia,PNL,marketing,autoayuda,Finanzas,liderazgo,psicologia,Empresa,Biografias} from './booksCategories'


const arrayChoicesSelected: string[] = [];


export function userChoicesRecomendations(){

    const section_div_people__Node:any = document.querySelector('.section_div__people')
    const section_div_choices:any = document.querySelector('.section_div_choices')
    const firstFatherNode:any = document.querySelector('.div__firstRow--container')
    const secondFatherNode:any = document.querySelector('.div__secondRow--container')    

    const endChoicesButton:any = document.querySelector('#button_endChoices')
    endChoicesButton.addEventListener('click', (event:any)=> {

        section_div_people__Node.removeChild(section_div_choices);
        event.stopPropagation();
        finalAppend()
        

    })


    const jobsRecomendations:any = document.querySelector('#button_jobs');
     jobsRecomendations.addEventListener('click', (event:any) => {

        const span_jobs:any = document.querySelector('.span_button-Jobs');
        arrayChoicesSelected.push(span_jobs.innerHTML);
        firstFatherNode.removeChild(jobsRecomendations)
        event.stopPropagation();

        showRecomendations(Biografias.recomendations)

        
    })

    const tecnologiaRecomendations:any = document.querySelector('#button_tecnologia');
    tecnologiaRecomendations.addEventListener('click',(event:any) => {

        const span_tecnologia:any = document.querySelector('.span_button-Tecnologia');
        arrayChoicesSelected.push(span_tecnologia.innerHTML);
        firstFatherNode.removeChild(tecnologiaRecomendations)
        event.stopPropagation();
        showRecomendations(tecnologia.recomendations)
        

    })
    const RobertKiyosakiRecomendations:any = document.querySelector('#button_RobertKiyosaki');
    RobertKiyosakiRecomendations.addEventListener('click',(event:any) => {

        const span_RobertKiyosaki:any = document.querySelector('.span_button-RobertKiyosaki');
        arrayChoicesSelected.push(span_RobertKiyosaki.innerHTML);
        firstFatherNode.removeChild(RobertKiyosakiRecomendations)
        event.stopPropagation();
        showRecomendations(Finanzas.recomendations)
        

    })

    /*const marketingRecomendations:any = document.querySelector('#button_marketing');

    marketingRecomendations.addEventListener('click', (event:any) => {

        const span_Marketing:any = document.querySelector('.span_button-Marketing');
        arrayChoicesSelected.push(span_Marketing.innerHTML);
        fatherNode.removeChild(marketingRecomendations)
        event.stopPropagation();
        showRecomendations(marketing.recomendations)
        

    }) */

    const psicologiaRecomendations:any = document.querySelector('#button_Psicologia');

    psicologiaRecomendations.addEventListener('click', (event:any) => {

        const span_Psicologia:any = document.querySelector('.span_button-Psicologia');
        arrayChoicesSelected.push(span_Psicologia.innerHTML);
        secondFatherNode.removeChild(psicologiaRecomendations)
        event.stopPropagation();
        showRecomendations(psicologia.recomendations)
        

    })

    const empresasRecomendations:any = document.querySelector('#button_empresas');

    empresasRecomendations.addEventListener('click',(event:any) => {

        const span_Empresas:any = document.querySelector('.span_button-Empresas');
        arrayChoicesSelected.push(span_Empresas.innerHTML);
        secondFatherNode.removeChild(empresasRecomendations)
        event.stopPropagation();
        showRecomendations(Empresa.recomendations)
        
        
    })



}


