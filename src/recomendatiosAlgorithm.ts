import {booksToRecomend} from './booksToRecomend';

let Jobs = booksToRecomend[0];


const arrayChoicesSelected: string[] = [];



function JobsrecomendationsAlgorithm(){
    let jobsArray = booksToRecomend.Jobs

        console.log(jobsArray[0]);
        console.log(jobsArray[0].categoryName);
        console.log(jobsArray[0].bookName);
        console.log(jobsArray[0].author);
        console.log(jobsArray[0].categoryTheme);

}



function userChoicesRecomendations(){

    

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

        arrayChoicesSelected.forEach(element => {
            div = div + ` ${element} `
        });
        section_div_people__Node.append(div);


        console.log(arrayChoicesSelected)
    }



    endChoicesButton.addEventListener('click', ()=> {
        section_div_people__Node.removeChild(fatherNode);

        ShowUserChoicesResume();
        


        //console.log(arrayRecomendations[0][0][0].categoryName);

    })

    jobsRecomendations.addEventListener('click', (event:undefined) => {
        const span_jobs:any = document.querySelector('.span_button-Jobs');
        arrayChoicesSelected.push(span_jobs.innerHTML);

        JobsrecomendationsAlgorithm();
        //arrayRecomendations.push(booksToRecomend.Jobs);
        

        fatherNode.removeChild(jobsRecomendations)
        
    })

    tecnologiaRecomendations.addEventListener('click',(event:undefined) => {
        const span_tecnologia:any = document.querySelector('.span_button-Tecnologia');
        arrayChoicesSelected.push(span_tecnologia.innerHTML);
        
        
        fatherNode.removeChild(tecnologiaRecomendations)
        

    })
    RobertKiyosakiRecomendations.addEventListener('click',(event:undefined) => {
        const span_RobertKiyosaki:any = document.querySelector('.span_button-RobertKiyosaki');
        arrayChoicesSelected.push(span_RobertKiyosaki.innerHTML);


        fatherNode.removeChild(RobertKiyosakiRecomendations)
        

    })
    marketingRecomendations.addEventListener('click', (event:undefined) => {
        const span_Marketing:any = document.querySelector('.span_button-Marketing');
        arrayChoicesSelected.push(span_Marketing.innerHTML);

        fatherNode.removeChild(marketingRecomendations)
        

    })
    psicologiaRecomendations.addEventListener('click', (event:undefined) => {

        const span_Psicologia:any = document.querySelector('.span_button-Psicologia');
        arrayChoicesSelected.push(span_Psicologia.innerHTML);

     
        fatherNode.removeChild(psicologiaRecomendations)
        

    })
    empresasRecomendations.addEventListener('click',(event:undefined) => {

        const span_Empresas:any = document.querySelector('.span_button-Empresas');
        arrayChoicesSelected.push(span_Empresas.innerHTML);


        fatherNode.removeChild(empresasRecomendations)
        
        
    })



}
userChoicesRecomendations();

