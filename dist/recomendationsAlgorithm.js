"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresasRecomendationsAlgorithm = exports.psicologiaRecomendationsAlgorithm = exports.marketingRecomendationsAlgorithm = exports.Robert_kiAlgorithm = exports.tecnologiaRecomendationsAlgorithm = exports.JobsrecomendationsAlgorithm = void 0;
var booksToRecomend_1 = require("./booksToRecomend");
function JobsrecomendationsAlgorithm() {
    var jobsArray = booksToRecomend_1.booksToRecomend.Jobs;
    console.group('first book');
    console.log(jobsArray[0]);
    console.log(jobsArray[0].categoryName);
    console.log(jobsArray[0].bookName);
    console.log(jobsArray[0].author);
    console.log(jobsArray[0].categoryTheme);
    console.groupEnd();
    console.group('Second Book');
    console.log(jobsArray[1]);
    console.log(jobsArray[1].categoryName);
    console.log(jobsArray[1].bookName);
    console.log(jobsArray[1].author);
    console.log(jobsArray[1].categoryTheme);
    console.groupEnd();
}
exports.JobsrecomendationsAlgorithm = JobsrecomendationsAlgorithm;
function tecnologiaRecomendationsAlgorithm() {
    var tecnologiaArray = booksToRecomend_1.booksToRecomend.Tecnologia;
    console.group('first book');
    console.log(tecnologiaArray[0]);
    console.log(tecnologiaArray[0].categoryName);
    console.log(tecnologiaArray[0].bookName);
    console.log(tecnologiaArray[0].author);
    console.log(tecnologiaArray[0].categoryTheme);
    console.groupEnd();
    console.group('Second Book');
    console.log(tecnologiaArray[1]);
    console.log(tecnologiaArray[1].categoryName);
    console.log(tecnologiaArray[1].bookName);
    console.log(tecnologiaArray[1].author);
    console.log(tecnologiaArray[1].categoryTheme);
    console.groupEnd();
    console.group('Third Book');
    console.log(tecnologiaArray[2]);
    console.log(tecnologiaArray[2].categoryName);
    console.log(tecnologiaArray[2].bookName);
    console.log(tecnologiaArray[2].author);
    console.log(tecnologiaArray[2].categoryTheme);
    console.groupEnd();
}
exports.tecnologiaRecomendationsAlgorithm = tecnologiaRecomendationsAlgorithm;
function Robert_kiAlgorithm() {
    var RobertArray = booksToRecomend_1.booksToRecomend.Robert_Kiyosaki;
    console.group('first book');
    console.log(RobertArray[0]);
    console.log(RobertArray[0].categoryName);
    console.log(RobertArray[0].bookName);
    console.log(RobertArray[0].author);
    console.log(RobertArray[0].categoryTheme);
    console.groupEnd();
    console.group('Second Book');
    console.log(RobertArray[1]);
    console.log(RobertArray[1].categoryName);
    console.log(RobertArray[1].bookName);
    console.log(RobertArray[1].author);
    console.log(RobertArray[1].categoryTheme);
    console.groupEnd();
    console.group('Third Book');
    console.log(RobertArray[2]);
    console.log(RobertArray[2].categoryName);
    console.log(RobertArray[2].bookName);
    console.log(RobertArray[2].author);
    console.log(RobertArray[2].categoryTheme);
    console.groupEnd();
}
exports.Robert_kiAlgorithm = Robert_kiAlgorithm;
function marketingRecomendationsAlgorithm() {
    var marketingArray = booksToRecomend_1.booksToRecomend.Marketing;
    console.group('first book');
    console.log(marketingArray[0]);
    console.log(marketingArray[0].categoryName);
    console.log(marketingArray[0].bookName);
    console.log(marketingArray[0].author);
    console.log(marketingArray[0].categoryTheme);
    console.groupEnd();
    console.group('Second Book');
    console.log(marketingArray[1]);
    console.log(marketingArray[1].categoryName);
    console.log(marketingArray[1].bookName);
    console.log(marketingArray[1].author);
    console.log(marketingArray[1].categoryTheme);
    console.groupEnd();
}
exports.marketingRecomendationsAlgorithm = marketingRecomendationsAlgorithm;
function psicologiaRecomendationsAlgorithm() {
    var psicologiaArray = booksToRecomend_1.booksToRecomend.Psicologia;
    console.group('first book');
    console.log(psicologiaArray[0]);
    console.log(psicologiaArray[0].categoryName);
    console.log(psicologiaArray[0].bookName);
    console.log(psicologiaArray[0].author);
    console.log(psicologiaArray[0].categoryTheme);
    console.groupEnd();
    console.group('Second Book');
    console.log(psicologiaArray[4]);
    console.log(psicologiaArray[4].categoryName);
    console.log(psicologiaArray[4].bookName);
    console.log(psicologiaArray[4].author);
    console.log(psicologiaArray[4].categoryTheme);
    console.groupEnd();
    console.group('Third Book');
    console.log(psicologiaArray[3]);
    console.log(psicologiaArray[3].categoryName);
    console.log(psicologiaArray[3].bookName);
    console.log(psicologiaArray[3].author);
    console.log(psicologiaArray[3].categoryTheme);
    console.groupEnd();
}
exports.psicologiaRecomendationsAlgorithm = psicologiaRecomendationsAlgorithm;
function empresasRecomendationsAlgorithm() {
    var empresasArray = booksToRecomend_1.booksToRecomend.Empresa;
    console.group('first book');
    console.log(empresasArray[0]);
    console.log(empresasArray[0].categoryName);
    console.log(empresasArray[0].bookName);
    console.log(empresasArray[0].author);
    console.log(empresasArray[0].categoryTheme);
    console.groupEnd();
    console.group('Second Book');
    console.log(empresasArray[4]);
    console.log(empresasArray[4].categoryName);
    console.log(empresasArray[4].bookName);
    console.log(empresasArray[4].author);
    console.log(empresasArray[4].categoryTheme);
    console.groupEnd();
    console.group('Third Book');
    console.log(empresasArray[2]);
    console.log(empresasArray[2].categoryName);
    console.log(empresasArray[2].bookName);
    console.log(empresasArray[2].author);
    console.log(empresasArray[2].categoryTheme);
    console.groupEnd();
}
exports.empresasRecomendationsAlgorithm = empresasRecomendationsAlgorithm;