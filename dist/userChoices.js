"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recomendationsAlgorithm_1 = require("./recomendationsAlgorithm");
var arrayChoicesSelected = [];
function userChoicesRecomendations() {
    var section_div_people__Node = document.querySelector('.section_div__people');
    var fatherNode = document.querySelector('.section_div_choices');
    var endChoicesButton = document.querySelector('#button_endChoices');
    var jobsRecomendations = document.querySelector('#button_jobs');
    var tecnologiaRecomendations = document.querySelector('#button_tecnologia');
    var RobertKiyosakiRecomendations = document.querySelector('#button_RobertKiyosaki');
    var marketingRecomendations = document.querySelector('#button_Marketing');
    var psicologiaRecomendations = document.querySelector('#button_Psicologia');
    var empresasRecomendations = document.querySelector('#button_empresas');
    function ShowUserChoicesResume() {
        var div = document.createElement('div');
        div = '';
        arrayChoicesSelected.forEach(function (element) {
            div = div + (" " + element + " ");
        });
        section_div_people__Node.append(div);
        console.log(arrayChoicesSelected);
    }
    endChoicesButton.addEventListener('click', function () {
        section_div_people__Node.removeChild(fatherNode);
        ShowUserChoicesResume();
    });
    jobsRecomendations.addEventListener('click', function (event) {
        var span_jobs = document.querySelector('.span_button-Jobs');
        arrayChoicesSelected.push(span_jobs.innerHTML);
        (0, recomendationsAlgorithm_1.JobsrecomendationsAlgorithm)();
        fatherNode.removeChild(jobsRecomendations);
    });
    tecnologiaRecomendations.addEventListener('click', function (event) {
        var span_tecnologia = document.querySelector('.span_button-Tecnologia');
        arrayChoicesSelected.push(span_tecnologia.innerHTML);
        fatherNode.removeChild(tecnologiaRecomendations);
    });
    RobertKiyosakiRecomendations.addEventListener('click', function (event) {
        var span_RobertKiyosaki = document.querySelector('.span_button-RobertKiyosaki');
        arrayChoicesSelected.push(span_RobertKiyosaki.innerHTML);
        fatherNode.removeChild(RobertKiyosakiRecomendations);
    });
    marketingRecomendations.addEventListener('click', function (event) {
        var span_Marketing = document.querySelector('.span_button-Marketing');
        arrayChoicesSelected.push(span_Marketing.innerHTML);
        fatherNode.removeChild(marketingRecomendations);
    });
    psicologiaRecomendations.addEventListener('click', function (event) {
        var span_Psicologia = document.querySelector('.span_button-Psicologia');
        arrayChoicesSelected.push(span_Psicologia.innerHTML);
        fatherNode.removeChild(psicologiaRecomendations);
    });
    empresasRecomendations.addEventListener('click', function (event) {
        var span_Empresas = document.querySelector('.span_button-Empresas');
        arrayChoicesSelected.push(span_Empresas.innerHTML);
        fatherNode.removeChild(empresasRecomendations);
    });
}
userChoicesRecomendations();
