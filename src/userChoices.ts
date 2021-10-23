import {JobsrecomendationsAlgorithm, tecnologiaRecomendationsAlgorithm,Robert_kiAlgorithm, marketingRecomendationsAlgorithm, psicologiaRecomendationsAlgorithm, empresasRecomendationsAlgorithm} from './recomendationsAlgorithm';


const arrayChoicesSelected: string[] = [];


function userChoicesRecomendations(){

    

    const section_div_people__Node:any = document.querySelector('.section_div__people')
    const fatherNode:any = document.querySelector('.section_div_choices')
    const endChoicesButton:any = document.querySelector('#button_endChoices')

    
    
    
    
    const psicologiaRecomendations:any = document.querySelector('#button_Psicologia');
    const empresasRecomendations:any = document.querySelector('#button_empresas');
    


    function ShowUserChoicesResume(){
        let div:any = document.createElement('div');
        div = '';

        arrayChoicesSelected.forEach(element => {
            div = div + ` ${element} `
        });
        section_div_people__Node.append(div);


        console.log(arrayChoicesSelected)
    }



    endChoicesButton.addEventListener('click', ()=> {
        section_div_people__Node.removeChild(fatherNode);

        ShowUserChoicesResume();
        //cuandoo aprete el boton listo, este lo que hara es agregar una sola vez toda la data cargada en el dom
    
        //JobsrecomendationsAlgorithm();

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
        
        tecnologiaRecomendationsAlgorithm();        

        fatherNode.removeChild(tecnologiaRecomendations)
        

    })
    const RobertKiyosakiRecomendations:any = document.querySelector('#button_RobertKiyosaki');

    RobertKiyosakiRecomendations.addEventListener('click',(event:undefined) => {
        const span_RobertKiyosaki:any = document.querySelector('.span_button-RobertKiyosaki');
        arrayChoicesSelected.push(span_RobertKiyosaki.innerHTML);

        Robert_kiAlgorithm();
        fatherNode.removeChild(RobertKiyosakiRecomendations)
        

    })

    const marketingRecomendations:any = document.querySelector('#button_Marketing');

    marketingRecomendations.addEventListener('click', (event:undefined) => {
        const span_Marketing:any = document.querySelector('.span_button-Marketing');
        arrayChoicesSelected.push(span_Marketing.innerHTML);

        marketingRecomendationsAlgorithm();

        fatherNode.removeChild(marketingRecomendations)
        

    })
    psicologiaRecomendations.addEventListener('click', (event:undefined) => {

        const span_Psicologia:any = document.querySelector('.span_button-Psicologia');
        arrayChoicesSelected.push(span_Psicologia.innerHTML);

        psicologiaRecomendationsAlgorithm();
     
        fatherNode.removeChild(psicologiaRecomendations)
        

    })
    empresasRecomendations.addEventListener('click',(event:undefined) => {

        const span_Empresas:any = document.querySelector('.span_button-Empresas');
        arrayChoicesSelected.push(span_Empresas.innerHTML);

        empresasRecomendationsAlgorithm();

        fatherNode.removeChild(empresasRecomendations)
        
        
    })



}
userChoicesRecomendations();

