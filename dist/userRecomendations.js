"use strict";
var recomendations = /** @class */ (function () {
    function recomendations(book, author, theme, description) {
        this.book = book;
        this.author = author;
        this.theme = theme;
        this.description = description;
    }
    return recomendations;
}());
var steveJobs_George = new recomendations(['yo Steve Jobs'], ['George Beahm'], 'Emprendimiento', 'Basado en las entrevistas e intervenciones publicas que Steve Jobs realizo a lo largo de su vida, este libro recoge los pensamientos mas sagaces y brillantes de este visionario.');
var steveJobs_WalterIsaacson = new recomendations([' Steve Jobs'], ['WalterIsaacson'], 'Emprendimiento', 'La biografia definitiva de Steve Jobs, tras entrevistar a todos los que lo han rodeado, Walter Isaacson nos presenta la unica biografia colaborada con el mismo Steve.');
console.log(steveJobs_George.author);
