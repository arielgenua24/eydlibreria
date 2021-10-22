"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsrecomendationsAlgorithm = void 0;
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
