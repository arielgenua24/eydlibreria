"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elToqueDeMildas_RobertKi = exports.elJuegoDelDinero_RobertKi = exports.padreRicoPadrePobre_RobertKi = exports.pensarRapidoPensarDespacio = exports.EstoEsMarketing = exports.graciasPorLLegarTarde = exports.oceanoAzul = exports.elLibroRojo = exports.innovadoresQueHacenHistoria = exports.loInconciente = exports.laExperienciaDelCliente = exports.elHombreYsusSimbolos = exports.Propaganda = exports.nuncaTiresLaToalla = exports.elModeloToyota = exports.elEstiloVirgin = exports.equiposExtremos = exports.four = exports.SteveJobs = exports.como_hacer_que_la_gente_haga_cosas = exports.yoSteveJobs = exports.habitos_para_ser_millonario = void 0;
var books = /** @class */ (function () {
    function books(bookName, author, description, image, isRecommended, category) {
        if (isRecommended === void 0) { isRecommended = false; }
        this.bookName = bookName;
        this.author = author;
        this.description = description;
        this.image = image;
        this.isRecommended = isRecommended;
        this.category = category;
    }
    return books;
}());
//Nota, la imagen a demas de ser relevante en los objetos de la libreria, lo es a la hora de poder aplicarla de manera efectiva en una estructura de datos  que me permita mostrar este misma en el DOM de manera efectiva.
//nota 2, la imagen no es una string, es un conjunto de datos, que addquieren tanto una string como vinculos determinados.
//liderazgo
var habitos_para_ser_millonario = new books('Habitos para ser millonario', 'Brian Tracy', '¿Por qué algunas personas son más exitosas que otras? El 95 % de todo lo que piensas, sientes, haces y logras es resultado del hábito. Simplificando y organizando las ideas, Brian Tracy, experto en temas de liderazgo, estrategia, creatividad y psicología del éxito, ha escrito magistralmente un libro de obligada lectura sobre hábitos que asegura completamente el éxito personal.', 'src::', true, 'liderazgo');
exports.habitos_para_ser_millonario = habitos_para_ser_millonario;
var como_hacer_que_la_gente_haga_cosas = new books('Como hacer que la gente haga cosas', 'Robert Conkin', 'La clave para convencer,dirigir,motivar,supervisar e influir en los demas', 'src::', false, 'liderazgo');
exports.como_hacer_que_la_gente_haga_cosas = como_hacer_que_la_gente_haga_cosas;
//biografias
var yoSteveJobs = new books('Yo, Steve Jobs', 'George Beahm', 'Sus inpiradoras e innovadoras ideas en sus propias palabras', 'https://http2.mlstatic.com/D_NQ_NP_2X_833794-MLA30166326733_042019-F.webp', true, 'Biografia');
exports.yoSteveJobs = yoSteveJobs;
var SteveJobs = new books('Steve Jobs', 'Walter Isaacson', 'La biografia definitiva de steve Jobs. Esta es la unica biografia escrita con la colaboracion de Jobs', 'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg', true, 'biografia');
exports.SteveJobs = SteveJobs;
//tecnologia
var four = new books('Four', 'Scott Galloway', 'El adn secreto de Amazon,Apple,Facebook y Google', 'src::', true, 'tecnologia');
exports.four = four;
var graciasPorLLegarTarde = new books('Gracias por llegar tarde', 'Thomas L. Friedman', 'Como la tecnologia,la globalizacion y el cambio climatico transformaran el mundo en los proximosm años', 'src::', true, 'tecnologia');
exports.graciasPorLLegarTarde = graciasPorLLegarTarde;
var innovadoresQueHacenHistoria = new books(' Innovadores que hacen historia', 'Jim Stengel', 'Como las Startups y emprendedores dan vida a las grandes empresas', 'src::', true, 'tecnologia');
exports.innovadoresQueHacenHistoria = innovadoresQueHacenHistoria;
//finanzas
var padreRicoPadrePobre_RobertKi = new books('Padre Rico, Padre Pobre', 'Robert Kiyosaki', 'Que les enseñan los ricos a sus hijos acerca del dinero y que los pobre y clase media no!', 'src::', true, 'finanzas');
exports.padreRicoPadrePobre_RobertKi = padreRicoPadrePobre_RobertKi;
var elJuegoDelDinero_RobertKi = new books('El juego del dinero', 'Robert Kiyosaki', 'Por que los inversionistas lentos pierden, y el dinero rapido gana!', 'src::', true, 'finanzas');
exports.elJuegoDelDinero_RobertKi = elJuegoDelDinero_RobertKi;
var elToqueDeMildas_RobertKi = new books('El toque de mildas', 'Robert Kiyosaki, Donald Trump', 'Por que algunos empresarios se hacen ricos y la mayoria no', 'src', true, 'finanzas');
exports.elToqueDeMildas_RobertKi = elToqueDeMildas_RobertKi;
//marketing
var EstoEsMarketing = new books('Esto es Marketing', 'Seth Godin', 'Un enfoque innovador sobre Marketing, Ventas y Publicidad', 'image::', true, 'marketing');
exports.EstoEsMarketing = EstoEsMarketing;
var oceanoAzul = new books('La estrategia del Oceano Azul', 'W. Chan Kim, Renee Mauborgne', 'Un enfoque innovador sobre Marketing, Ventas y Publicidad', 'image::', true, 'marketing');
exports.oceanoAzul = oceanoAzul;
//psicologia
var pensarRapidoPensarDespacio = new books('Pensar rapido, Pensar despacio', 'Daniel Kahneman', 'Este autor ganador del premio Nobel de economia, revela como funciona el cerebro y la toma de decisiones', 'src::', true, 'psicologia');
exports.pensarRapidoPensarDespacio = pensarRapidoPensarDespacio;
var elLibroRojo = new books('El libro rojo', 'C.G Jung', 'Durante la Primera Guerra Mundial, Jung comenzó una larga autoexploración que denominó su confrontación con lo inconsciente. Durante este período, desarrolló sus principales teorías de lo inconsciente colectivo, los arquetipos, los tipos psicológicos y el proceso de individuación.', 'img::', true, 'psicologia');
exports.elLibroRojo = elLibroRojo;
var loInconciente = new books('Lo inconsciente', 'C.G Jung', 'En una conferencia pronunciada en 1914, un mes antes del estallido de la Gran Guerra, Jung define lo inconsciente como “todos los procesos psíquicos que están bajo el umbral de la conciencia”', 'img::', false, 'psicologia');
exports.loInconciente = loInconciente;
var Propaganda = new books('Propaganda', 'Edward Bernays', 'Como maniupular la opinion es democracia', 'imag::', true, 'psicologia');
exports.Propaganda = Propaganda;
var elHombreYsusSimbolos = new books('El hombre y sus simbolos', 'Carl G. Jung', 'Estudiar la relevancia de simbolos, nunca ha sido tan importante', 'src::', false, 'psicologia');
exports.elHombreYsusSimbolos = elHombreYsusSimbolos;
//empresa
var laExperienciaDelCliente = new books('La experiencia del cliente', 'Hugo Brunetta', 'Este libro es un manual detallado y práctico sobre la administración de la experiencia del cliente desde una perspectiva ciento por ciento real, producto de muchos años de actividad y competencia del autor en consultoría y capacitación. ', 'img::', true, 'empresa');
exports.laExperienciaDelCliente = laExperienciaDelCliente;
var elEstiloVirgin = new books('El estilo Virgin', 'Richard Branson', 'Escuchar, aprender,reir y liderar. El estilo virgin trae consecuencias empredecibles y nos lleva a lugares donde otros mas sensatos no se aventuran', 'src::', true, 'empresa');
exports.elEstiloVirgin = elEstiloVirgin;
var elModeloToyota = new books('El modelo toyota', 'Jeffrey K. Liker', 'Este es un libro el cual habla sobre una excelente filosofia de gestion, muestra como las empresas de servicios ganan valor', 'img::', true, 'empresa');
exports.elModeloToyota = elModeloToyota;
var nuncaTiresLaToalla = new books('Nunca tires la toalla', 'Donald Trump', 'Como converti mis mayores desafios en grandes exitos', 'img::', false, 'empresa');
exports.nuncaTiresLaToalla = nuncaTiresLaToalla;
var equiposExtremos = new books('Equipos Extremos', 'Robert Bruce Shaw', 'Por que pixar, Airbnb, y otras empresas triunfan donde la mayoria fracasan', 'img::', false, 'empresa');
exports.equiposExtremos = equiposExtremos;
