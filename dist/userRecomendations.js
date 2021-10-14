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
var RobertKiyosaki = new recomendations(['El juego del dinero'], ['Robert T. Kiyosaki'], 'Finanazas', 'Descubra como puede mantener el dinero en movimiento en lugar de tenerlo estancado en la cuenta de alguien mas');
var RobertKiyosaki2 = new recomendations(['Padre rico, Padre pobre'], ['Robert T. Kiyosaki'], 'Finanzas', 'Que les enseñan los ricos a sus hijos acerca del dinero, y que la clase media no!');
var empresas = new recomendations(['Equipos Extremos', 'El estilo virgin', 'El modelo toyota'], ['Robert Bruce Shaw', 'Richard Branson', 'Jefrey K. Liker'], 'empresas', '');
console.log(empresas.author[0]);
console.log(empresas.book[0]);
var psicologia = new recomendations(['Pensar rapido, pensar despacio', 'Lo inconsciente', 'Propaganda'], ['Daniel Kahneman', 'Jung', 'Edward Bernays'], 'Psicologia', '');
var tecnologia = new recomendations(['Gracias por llegar tarde', 'Four', 'Innovadores que hacen historia'], ['Thomas Friedman', 'Scott Galloway', 'Jim Stengel & Tom Post'], 'Tecnologia', '');
var Marketing = new recomendations(['Esto es marketing', 'La estrategia del oceano azul'], ['Seth Godin', 'W.Chan Kim|Renee Mauborgne'], 'Marketing', '');
