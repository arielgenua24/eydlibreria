console.log(`hola`)

jobs = {
    libros: ['la lalalal prueba 1', 'jobs j']
}

const arrayRecomendations = [];
const arrayPeopleSelected = [];


function userChoicesRecomendations(){

    
    const fatherNode = document.querySelector('.section_div__people')
    const jobsRecomendations = document.querySelector('#button_jobs');
    const tecnologiaRecomendations = document.querySelector('#button_tecnologia');
    const RobertKiyosakiRecomendations =document.querySelector('#button_RobertKiyosaki');
    const marketingRecomendations =document.querySelector('#button_Marketing');
    const psicologiaRecomendations =document.querySelector('#button_Psicologia');
    const empresasRecomendations =document.querySelector('#button_empresas');


    let accion = () => {
        console.log(`tengo una serpiente en mi bota`)
        const data = jobs.libros;
        arrayRecomendations.push(data)
        console.log(arrayRecomendations)
    }


    
    jobsRecomendations.addEventListener('click', (event) => {
        const span_jobs = document.querySelector('.span_button-Jobs');
        arrayPeopleSelected.push(span_jobs.innerHTML);

        accion();
        
        fatherNode.removeChild(jobsRecomendations)
        
    })

    tecnologiaRecomendations.addEventListener('click',(event) => {
        const span_jobs = document.querySelector('.span_button-Jobs');
        arrayPeopleSelected.push(span_jobs.innerHTML);
        
        accion();
        fatherNode.removeChild(tecnologiaRecomendations)
        

    })
    RobertKiyosakiRecomendations.addEventListener('click',(event) => {
        accion();
        fatherNode.removeChild(RobertKiyosakiRecomendations)
        

    })
    marketingRecomendations.addEventListener('click', (event) => {
        accion();
        fatherNode.removeChild(marketingRecomendations)
        

    })
    psicologiaRecomendations.addEventListener('click', (event) => {
        accion();
        fatherNode.removeChild(psicologiaRecomendations)
        

    })
    empresasRecomendations.addEventListener('click',(event) => {
        accion();
        fatherNode.removeChild(empresasRecomendations)
        
        
    })
    
    

    console.log(arrayPeopleSelected)

}
userChoicesRecomendations();

