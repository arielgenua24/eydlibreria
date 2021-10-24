import {ShowUserChoicesResume} from './showRecomendations'

import {booksCategories, neuroCiencia, desarrolloPersonal,tecnologia,PNL,marketing,autoayuda,Finanzas,liderazgo,psicologia,Empresa,Biografias} from './booksCategories'


export const arrayChoicesSelected: string[] = [];


function userChoicesRecomendations(){

    
    const section_div_people__Node:any = document.querySelector('.section_div__people')
    const fatherNode:any = document.querySelector('.section_div_choices')
        
    const endChoicesButton:any = document.querySelector('#button_endChoices')

    endChoicesButton.addEventListener('click', ()=> {

        section_div_people__Node.removeChild(fatherNode);
        ShowUserChoicesResume();
        

    })

    const jobsRecomendations:any = document.querySelector('#button_jobs');

     jobsRecomendations.addEventListener('click', (event:undefined) => {

        const span_jobs:any = document.querySelector('.span_button-Jobs');
        arrayChoicesSelected.push(span_jobs.innerHTML);
        fatherNode.removeChild(jobsRecomendations)


        
    })

    const tecnologiaRecomendations:any = document.querySelector('#button_tecnologia');

    tecnologiaRecomendations.addEventListener('click',(event:undefined) => {

        const span_tecnologia:any = document.querySelector('.span_button-Tecnologia');
        arrayChoicesSelected.push(span_tecnologia.innerHTML);
        fatherNode.removeChild(tecnologiaRecomendations)
        

    })
    const RobertKiyosakiRecomendations:any = document.querySelector('#button_RobertKiyosaki');

    RobertKiyosakiRecomendations.addEventListener('click',(event:undefined) => {

        const span_RobertKiyosaki:any = document.querySelector('.span_button-RobertKiyosaki');
        arrayChoicesSelected.push(span_RobertKiyosaki.innerHTML);
        fatherNode.removeChild(RobertKiyosakiRecomendations)
        

    })

    const marketingRecomendations:any = document.querySelector('#button_Marketing');

    marketingRecomendations.addEventListener('click', (event:undefined) => {

        const span_Marketing:any = document.querySelector('.span_button-Marketing');
        arrayChoicesSelected.push(span_Marketing.innerHTML);
        fatherNode.removeChild(marketingRecomendations)
        

    })

    const psicologiaRecomendations:any = document.querySelector('#button_Psicologia');

    psicologiaRecomendations.addEventListener('click', (event:undefined) => {

        const span_Psicologia:any = document.querySelector('.span_button-Psicologia');
        arrayChoicesSelected.push(span_Psicologia.innerHTML);
        fatherNode.removeChild(psicologiaRecomendations)
        

    })

    const empresasRecomendations:any = document.querySelector('#button_empresas');

    empresasRecomendations.addEventListener('click',(event:undefined) => {

        const span_Empresas:any = document.querySelector('.span_button-Empresas');
        arrayChoicesSelected.push(span_Empresas.innerHTML);
        fatherNode.removeChild(empresasRecomendations)
        
        
    })



}
userChoicesRecomendations();

