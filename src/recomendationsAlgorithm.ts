import { booksToRecomend } from "./booksToRecomend";

export function JobsrecomendationsAlgorithm(){
    let jobsArray = booksToRecomend.Jobs

    console.group('first book')
        console.log(jobsArray[0]);
        console.log(jobsArray[0].categoryName);
        console.log(jobsArray[0].bookName);
        console.log(jobsArray[0].author);
        console.log(jobsArray[0].categoryTheme);
    console.groupEnd()

    console.group('Second Book')
        console.log(jobsArray[1]);
        console.log(jobsArray[1].categoryName);
        console.log(jobsArray[1].bookName);
        console.log(jobsArray[1].author);
        console.log(jobsArray[1].categoryTheme);
    console.groupEnd()



}