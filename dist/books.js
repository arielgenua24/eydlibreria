"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.equiposExtremos = exports.nuncaTiresLaToalla = exports.elModeloToyota = exports.elEstiloVirgin = exports.laExperienciaDelCliente = exports.elHombreYsusSimbolos = exports.Propaganda = exports.loInconciente = exports.elLibroRojo = exports.pensarRapidoPensarDespacio = exports.oceanoAzul = exports.EstoEsMarketing = exports.elToqueDeMildas_RobertKi = exports.elJuegoDelDinero_RobertKi = exports.padreRicoPadrePobre_RobertKi = exports.innovadoresQueHacenHistoria = exports.graciasPorLLegarTarde = exports.four = exports.SteveJobs = exports.yoSteveJobs = exports.como_hacer_que_la_gente_haga_cosas = exports.habitos_para_ser_millonario = exports.books = void 0;
var booksCategories_1 = require("./booksCategories");
var books = /** @class */ (function (_super) {
    __extends(books, _super);
    function books(categoryName, categoryTheme, bookName, author, description, image) {
        var _this = _super.call(this, categoryName, categoryTheme) || this;
        _this.bookName = bookName;
        _this.author = author;
        _this.description = description;
        _this.image = image;
        return _this;
    }
    return books;
}(booksCategories_1.booksCategories));
exports.books = books;
//Nota, la imagen a demas de ser relevante en los objetos de la libreria, lo es a la hora de poder aplicarla de manera efectiva en una estructura de datos  que me permita mostrar este misma en el DOM de manera efectiva.
//nota 2, la imagen no es una string, es un conjunto de datos, que addquieren tanto una string como vinculos determinados.
exports.habitos_para_ser_millonario = new books(booksCategories_1.desarrolloPersonal.categoryName, booksCategories_1.desarrolloPersonal.categoryTheme, 'Habitos para ser millonario', 'Brian Tracy', '¿Por qué algunas personas son más exitosas que otras? El 95 % de todo lo que piensas, sientes, haces y logras es resultado del hábito. Simplificando y organizando las ideas, Brian Tracy, experto en temas de liderazgo, estrategia, creatividad y psicología del éxito, ha escrito magistralmente un libro de obligada lectura sobre hábitos que asegura completamente el éxito personal.', 'src::');
exports.como_hacer_que_la_gente_haga_cosas = new books(booksCategories_1.liderazgo.categoryName, booksCategories_1.liderazgo.categoryTheme, 'Como hacer que la gente haga cosas', 'Robert Conkin', 'La clave para convencer,dirigir,motivar,supervisar e influir en los demas', 'src::');
exports.yoSteveJobs = new books(booksCategories_1.Biografias.categoryName, booksCategories_1.Biografias.categoryTheme, 'Yo, Steve Jobs', 'George Beahm', 'Sus inpiradoras e innovadoras ideas en sus propias palabras', 'src::');
exports.SteveJobs = new books(booksCategories_1.Biografias.categoryName, booksCategories_1.Biografias.categoryTheme, 'Steve Jobs', 'Walter Isaacson', 'La biografia definitiva de steve Jobs. Esta es la unica biografia escrita con la colaboracion de Jobs', 'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg');
exports.four = new books(booksCategories_1.tecnologia.categoryName, booksCategories_1.tecnologia.categoryTheme, 'Four', 'Scott Galloway', 'El adn secreto de Amazon,Apple,Facebook y Google', 'src::');
exports.graciasPorLLegarTarde = new books(booksCategories_1.tecnologia.categoryName, booksCategories_1.tecnologia.categoryTheme, 'Gracias por llegar tarde', 'Thomas L. Friedman', 'Como la tecnologia,la globalizacion y el cambio climatico transformaran el mundo en los proximosm años', 'src::');
exports.innovadoresQueHacenHistoria = new books(booksCategories_1.tecnologia.categoryName, booksCategories_1.tecnologia.categoryTheme, ' Innovadores que hacen historia', 'Jim Stengel', 'Como las Startups y emprendedores dan vida a las grandes empresas', 'src::');
exports.padreRicoPadrePobre_RobertKi = new books(booksCategories_1.Finanzas.categoryName, booksCategories_1.Finanzas.categoryTheme, 'Padre Rico, Padre Pobre', 'Robert Kiyosaki', 'Que les enseñan los ricos a sus hijos acerca del dinero y que los pobre y clase media no!', 'src::');
exports.elJuegoDelDinero_RobertKi = new books(booksCategories_1.Finanzas.categoryName, booksCategories_1.Finanzas.categoryTheme, 'El juego del dinero', 'Robert Kiyosaki', 'Por que los inversionistas lentos pierden, y el dinero rapido gana!', 'src::');
exports.elToqueDeMildas_RobertKi = new books(booksCategories_1.Finanzas.categoryName, booksCategories_1.Finanzas.categoryTheme, 'El toque de mildas', 'Robert Kiyosaki, Donald Trump', 'Por que algunos empresarios se hacen ricos y la mayoria no', 'src');
exports.EstoEsMarketing = new books(booksCategories_1.marketing.categoryName, booksCategories_1.marketing.categoryTheme, 'Esto es Marketing', 'Seth Godin', 'Un enfoque innovador sobre Marketing, Ventas y Publicidad', 'image::');
exports.oceanoAzul = new books(booksCategories_1.marketing.categoryName, booksCategories_1.marketing.categoryTheme, 'La estrategia del Oceano Azul', 'W. Chan Kim, Renee Mauborgne', 'Un enfoque innovador sobre Marketing, Ventas y Publicidad', 'image::');
exports.pensarRapidoPensarDespacio = new books(booksCategories_1.psicologia.categoryName, booksCategories_1.psicologia.categoryTheme, 'Pensar rapido, Pensar despacio', 'Daniel Kahneman', 'Este autor ganador del premio Nobel de economia, revela como funciona el cerebro y la toma de decisiones', 'src::');
exports.elLibroRojo = new books(booksCategories_1.psicologia.categoryName, booksCategories_1.psicologia.categoryTheme, 'El libro rojo', 'C.G Jung', 'Durante la Primera Guerra Mundial, Jung comenzó una larga autoexploración que denominó su confrontación con lo inconsciente. Durante este período, desarrolló sus principales teorías de lo inconsciente colectivo, los arquetipos, los tipos psicológicos y el proceso de individuación.', 'img::');
exports.loInconciente = new books(booksCategories_1.psicologia.categoryName, booksCategories_1.psicologia.categoryTheme, 'Lo inconsciente', 'C.G Jung', 'En una conferencia pronunciada en 1914, un mes antes del estallido de la Gran Guerra, Jung define lo inconsciente como “todos los procesos psíquicos que están bajo el umbral de la conciencia”', 'img::');
exports.Propaganda = new books(booksCategories_1.psicologia.categoryName, booksCategories_1.psicologia.categoryTheme, 'Propaganda', 'Edward Bernays', 'Como maniupular la opinion es democracia', 'imag::');
exports.elHombreYsusSimbolos = new books(booksCategories_1.psicologia.categoryName, booksCategories_1.psicologia.categoryTheme, 'El hombre y sus simbolos', 'Carl G. Jung', 'Estudiar la relevancia de simbolos, nunca ha sido tan importante', 'src::');
exports.laExperienciaDelCliente = new books(booksCategories_1.Empresa.categoryName, booksCategories_1.Empresa.categoryTheme, 'La experiencia del cliente', 'Hugo Brunetta', 'Este libro es un manual detallado y práctico sobre la administración de la experiencia del cliente desde una perspectiva ciento por ciento real, producto de muchos años de actividad y competencia del autor en consultoría y capacitación. ', 'img::');
exports.elEstiloVirgin = new books(booksCategories_1.Empresa.categoryName, booksCategories_1.Empresa.categoryTheme, 'El estilo Virgin', 'Richard Branson', 'Escuchar, aprender,reir y liderar. El estilo virgin trae consecuencias empredecibles y nos lleva a lugares donde otros mas sensatos no se aventuran', 'src::');
exports.elModeloToyota = new books(booksCategories_1.Empresa.categoryName, booksCategories_1.Empresa.categoryTheme, 'El modelo toyota', 'Jeffrey K. Liker', 'Este es un libro el cual habla sobre una excelente filosofia de gestion, muestra como las empresas de servicios ganan valor', 'img::');
exports.nuncaTiresLaToalla = new books(booksCategories_1.Empresa.categoryName, booksCategories_1.Empresa.categoryTheme, 'Nunca tires la toalla', 'Donald Trump', 'Como converti mis mayores desafios en grandes exitos', 'img::');
exports.equiposExtremos = new books(booksCategories_1.Empresa.categoryName, booksCategories_1.Empresa.categoryTheme, 'Equipos Extremos', 'Robert Bruce Shaw', 'Por que pixar, Airbnb, y otras empresas triunfan donde la mayoria fracasan', 'img::');
