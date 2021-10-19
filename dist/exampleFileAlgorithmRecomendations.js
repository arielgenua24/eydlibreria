
const arrayRecomendations = [];



function userChoicesRecomendations(){

    const arrayPeopleSelected = [];

    const section_div_people__Node = document.querySelector('.section_div__people')
    const fatherNode = document.querySelector('.section_div_choices')
    const endChoicesButton = document.querySelector('#button_endChoices')

    const jobsRecomendations = document.querySelector('#button_jobs');
    const tecnologiaRecomendations = document.querySelector('#button_tecnologia');
    const RobertKiyosakiRecomendations = document.querySelector('#button_RobertKiyosaki');
    const marketingRecomendations = document.querySelector('#button_Marketing');
    const psicologiaRecomendations = document.querySelector('#button_Psicologia');
    const empresasRecomendations = document.querySelector('#button_empresas');
    


    function ShowUserChoicesResume(){
        let div = document.createElement('div');
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
        const data = jobs.libros;
        arrayRecomendations.push(data)
        console.log(arrayRecomendations)
        console.log(arrayPeopleSelected)

    }


    
    jobsRecomendations.addEventListener('click', (event) => {
        const span_jobs = document.querySelector('.span_button-Jobs');
        arrayPeopleSelected.push(span_jobs.innerHTML);

        accion();
        
        fatherNode.removeChild(jobsRecomendations)
        
    })

    tecnologiaRecomendations.addEventListener('click',(event) => {
        const span_tecnologia = document.querySelector('.span_button-Tecnologia');
        arrayPeopleSelected.push(span_tecnologia.innerHTML);
        
        accion();
        fatherNode.removeChild(tecnologiaRecomendations)
        

    })
    RobertKiyosakiRecomendations.addEventListener('click',(event) => {
        const span_RobertKiyosaki = document.querySelector('.span_button-RobertKiyosaki');
        arrayPeopleSelected.push(span_RobertKiyosaki.innerHTML);


        accion();
        fatherNode.removeChild(RobertKiyosakiRecomendations)
        

    })
    marketingRecomendations.addEventListener('click', (event) => {
        const span_Marketing = document.querySelector('.span_button-Marketing');
        arrayPeopleSelected.push(span_Marketing.innerHTML);


        accion();
        fatherNode.removeChild(marketingRecomendations)
        

    })
    psicologiaRecomendations.addEventListener('click', (event) => {

        const span_Psicologia = document.querySelector('.span_button-Psicologia');
        arrayPeopleSelected.push(span_Psicologia.innerHTML);

        accion();
        fatherNode.removeChild(psicologiaRecomendations)
        

    })
    empresasRecomendations.addEventListener('click',(event) => {

        const span_Empresas = document.querySelector('.span_button-Empresas');
        arrayPeopleSelected.push(span_Empresas.innerHTML);

        accion();
        fatherNode.removeChild(empresasRecomendations)
        
        
    })



}
userChoicesRecomendations();

