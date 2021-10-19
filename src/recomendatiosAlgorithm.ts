import {recomendations, steveJobs_George, steveJobs_WalterIsaacson,RobertKiyosaki, RobertKiyosaki2, empresas, psicologia, tecnologia, Marketing } from './userRecomendations';


const arrayRecomendations: string[] = [];



function userChoicesRecomendations(){

    const arrayPeopleSelected: string[] = [];

    const section_div_people__Node:any = document.querySelector('.section_div__people')
    const fatherNode:any = document.querySelector('.section_div_choices')
    const endChoicesButton:any = document.querySelector('#button_endChoices')

    const jobsRecomendations:any = document.querySelector('#button_jobs');
    const tecnologiaRecomendations:any = document.querySelector('#button_tecnologia');
    const RobertKiyosakiRecomendations:any = document.querySelector('#button_RobertKiyosaki');
    const marketingRecomendations:any = document.querySelector('#button_Marketing');
    const psicologiaRecomendations:any = document.querySelector('#button_Psicologia');
    const empresasRecomendations:any = document.querySelector('#button_empresas');
    


    function ShowUserChoicesResume(){
        let div:any = document.createElement('div');
        div = '';

        arrayPeopleSelected.forEach(element => {
            div = div + ` ${element} `
        });
        section_div_people__Node.append(div);
    }




    endChoicesButton.addEventListener('click', ()=> {
        section_div_people__Node.removeChild(fatherNode);

        ShowUserChoicesResume();

    })





    let accion = () => {
        console.log(`tengo una serpiente en mi bota`)
        console.log(arrayRecomendations)
        console.log(arrayPeopleSelected)

    }


    
    jobsRecomendations.addEventListener('click', (event:undefined) => {
        const span_jobs:any = document.querySelector('.span_button-Jobs');
        arrayPeopleSelected.push(span_jobs.innerHTML);

        accion();
        
        fatherNode.removeChild(jobsRecomendations)
        
    })

    tecnologiaRecomendations.addEventListener('click',(event:undefined) => {
        const span_tecnologia:any = document.querySelector('.span_button-Tecnologia');
        arrayPeopleSelected.push(span_tecnologia.innerHTML);
        
        accion();
        fatherNode.removeChild(tecnologiaRecomendations)
        

    })
    RobertKiyosakiRecomendations.addEventListener('click',(event:undefined) => {
        const span_RobertKiyosaki:any = document.querySelector('.span_button-RobertKiyosaki');
        arrayPeopleSelected.push(span_RobertKiyosaki.innerHTML);


        accion();
        fatherNode.removeChild(RobertKiyosakiRecomendations)
        

    })
    marketingRecomendations.addEventListener('click', (event:undefined) => {
        const span_Marketing:any = document.querySelector('.span_button-Marketing');
        arrayPeopleSelected.push(span_Marketing.innerHTML);


        accion();
        fatherNode.removeChild(marketingRecomendations)
        

    })
    psicologiaRecomendations.addEventListener('click', (event:undefined) => {

        const span_Psicologia:any = document.querySelector('.span_button-Psicologia');
        arrayPeopleSelected.push(span_Psicologia.innerHTML);

        accion();
        fatherNode.removeChild(psicologiaRecomendations)
        

    })
    empresasRecomendations.addEventListener('click',(event:undefined) => {

        const span_Empresas:any = document.querySelector('.span_button-Empresas');
        arrayPeopleSelected.push(span_Empresas.innerHTML);

        accion();
        fatherNode.removeChild(empresasRecomendations)
        
        
    })



}
userChoicesRecomendations();

