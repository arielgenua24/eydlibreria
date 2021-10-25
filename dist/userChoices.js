"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayChoicesSelected = void 0;
var showRecomendations_1 = require("./showRecomendations");
var booksCategories_1 = require("./booksCategories");
exports.arrayChoicesSelected = [];
function userChoicesRecomendations() {
    var section_div_people__Node = document.querySelector('.section_div__people');
    var fatherNode = document.querySelector('.section_div_choices');
    var endChoicesButton = document.querySelector('#button_endChoices');
    endChoicesButton.addEventListener('click', function (event) {
        section_div_people__Node.removeChild(fatherNode);
        (0, showRecomendations_1.ShowUserChoicesResume)();
        event.stopPropagation();
        (0, showRecomendations_1.finalAppend)();
    });
    var jobsRecomendations = document.querySelector('#button_jobs');
    jobsRecomendations.addEventListener('click', function (event) {
        var span_jobs = document.querySelector('.span_button-Jobs');
        exports.arrayChoicesSelected.push(span_jobs.innerHTML);
        fatherNode.removeChild(jobsRecomendations);
        event.stopPropagation();
        (0, showRecomendations_1.showRecomendations)(booksCategories_1.Biografias.recomendations);
    });
    var tecnologiaRecomendations = document.querySelector('#button_tecnologia');
    tecnologiaRecomendations.addEventListener('click', function (event) {
        var span_tecnologia = document.querySelector('.span_button-Tecnologia');
        exports.arrayChoicesSelected.push(span_tecnologia.innerHTML);
        fatherNode.removeChild(tecnologiaRecomendations);
        event.stopPropagation();
        (0, showRecomendations_1.showRecomendations)(booksCategories_1.tecnologia.recomendations);
    });
    var RobertKiyosakiRecomendations = document.querySelector('#button_RobertKiyosaki');
    RobertKiyosakiRecomendations.addEventListener('click', function (event) {
        var span_RobertKiyosaki = document.querySelector('.span_button-RobertKiyosaki');
        exports.arrayChoicesSelected.push(span_RobertKiyosaki.innerHTML);
        fatherNode.removeChild(RobertKiyosakiRecomendations);
        event.stopPropagation();
        (0, showRecomendations_1.showRecomendations)(booksCategories_1.Finanzas.recomendations);
    });
    var marketingRecomendations = document.querySelector('#button_Marketing');
    marketingRecomendations.addEventListener('click', function (event) {
        var span_Marketing = document.querySelector('.span_button-Marketing');
        exports.arrayChoicesSelected.push(span_Marketing.innerHTML);
        fatherNode.removeChild(marketingRecomendations);
        event.stopPropagation();
        (0, showRecomendations_1.showRecomendations)(booksCategories_1.marketing.recomendations);
    });
    var psicologiaRecomendations = document.querySelector('#button_Psicologia');
    psicologiaRecomendations.addEventListener('click', function (event) {
        var span_Psicologia = document.querySelector('.span_button-Psicologia');
        exports.arrayChoicesSelected.push(span_Psicologia.innerHTML);
        fatherNode.removeChild(psicologiaRecomendations);
        event.stopPropagation();
        (0, showRecomendations_1.showRecomendations)(booksCategories_1.psicologia.recomendations);
    });
    var empresasRecomendations = document.querySelector('#button_empresas');
    empresasRecomendations.addEventListener('click', function (event) {
        var span_Empresas = document.querySelector('.span_button-Empresas');
        exports.arrayChoicesSelected.push(span_Empresas.innerHTML);
        fatherNode.removeChild(empresasRecomendations);
        event.stopPropagation();
        (0, showRecomendations_1.showRecomendations)(booksCategories_1.Empresa.recomendations);
    });
}
userChoicesRecomendations();
