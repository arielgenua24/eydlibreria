"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marketing = exports.tecnologia = exports.psicologia = exports.empresas = exports.RobertKiyosaki2 = exports.RobertKiyosaki = exports.steveJobs_WalterIsaacson = exports.steveJobs_George = exports.recomendations = void 0;
var recomendations = /** @class */ (function () {
    function recomendations(book, author, theme, description) {
        this.book = book;
        this.author = author;
        this.theme = theme;
        this.description = description;
    }
    return recomendations;
}());
exports.recomendations = recomendations;
exports.steveJobs_George = new recomendations(['yo Steve Jobs'], ['George Beahm'], 'Emprendimiento', 'Basado en las entrevistas e intervenciones publicas que Steve Jobs realizo a lo largo de su vida, este libro recoge los pensamientos mas sagaces y brillantes de este visionario.');
exports.steveJobs_WalterIsaacson = new recomendations([' Steve Jobs'], ['WalterIsaacson'], 'Emprendimiento', 'La biografia definitiva de Steve Jobs, tras entrevistar a todos los que lo han rodeado, Walter Isaacson nos presenta la unica biografia colaborada con el mismo Steve.');
exports.RobertKiyosaki = new recomendations(['El juego del dinero'], ['Robert T. Kiyosaki'], 'Finanazas', 'Descubra como puede mantener el dinero en movimiento en lugar de tenerlo estancado en la cuenta de alguien mas');
exports.RobertKiyosaki2 = new recomendations(['Padre rico, Padre pobre'], ['Robert T. Kiyosaki'], 'Finanzas', 'Que les enseñan los ricos a sus hijos acerca del dinero, y que la clase media no!');
exports.empresas = new recomendations(['Equipos Extremos', 'El estilo virgin', 'El modelo toyota'], ['Robert Bruce Shaw', 'Richard Branson', 'Jefrey K. Liker'], 'empresas', '');
exports.psicologia = new recomendations(['Pensar rapido, pensar despacio', 'Lo inconsciente', 'Propaganda'], ['Daniel Kahneman', 'Jung', 'Edward Bernays'], 'Psicologia', '');
exports.tecnologia = new recomendations(['Gracias por llegar tarde', 'Four', 'Innovadores que hacen historia'], ['Thomas Friedman', 'Scott Galloway', 'Jim Stengel & Tom Post'], 'Tecnologia', '');
exports.Marketing = new recomendations(['Esto es marketing', 'La estrategia del oceano azul'], ['Seth Godin', 'W.Chan Kim|Renee Mauborgne'], 'Marketing', '');
