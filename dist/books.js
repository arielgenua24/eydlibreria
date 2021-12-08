"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.las48leyesDelPoder = exports.deDrogadictoAExitoso = exports.pensamientos = exports.ElCuadrante = exports.segundaOportunidad = exports.elABCdelCoaching = exports.liderDe360 = exports.Resiste = exports.liderazgoCentradoEnPrincpios = exports.quinientos__hombres = exports.quinientas__mujeres = exports.ElHombreEnBuscaSentido = exports.Originales = exports.elPoderDeLaIntencion = exports.las12PalancasDelExito = exports.elCaminoDeLaPerfeccion = exports.despertandoAlGiganteInterior = exports.chrisGardener = exports.elToqueDeMildas_RobertKi = exports.elJuegoDelDinero_RobertKi = exports.padreRicoPadrePobre_RobertKi = exports.pensarRapidoPensarDespacio = exports.EstoEsMarketing = exports.graciasPorLLegarTarde = exports.oceanoAzul = exports.elLibroRojo = exports.innovadoresQueHacenHistoria = exports.maestriaEnLiderazgo = exports.loInconciente = exports.laExperienciaDelCliente = exports.elHombreYsusSimbolos = exports.Propaganda = exports.nuncaTiresLaToalla = exports.elModeloToyota = exports.elEstiloVirgin = exports.equiposExtremos = exports.four = exports.SteveJobs = exports.como_hacer_que_la_gente_haga_cosas = exports.yoSteveJobs = exports.habitos_para_ser_millonario = exports.four_Id = exports.elEstiloVirgin_Id = exports.yoSteveJobs_Id = exports.nuncaTiresLaToalla_Id = void 0;
class books {
    constructor(bookName, author, description, image, isRecommended = false, category) {
        this.bookName = bookName;
        this.author = author;
        this.description = description;
        this.image = image;
        this.isRecommended = isRecommended;
        this.category = category;
        this.id = 0;
    }
    setId(bookName) {
        if (bookName.length > 5) {
            const newBookName = bookName.slice(0, 5);
            let bookNameLowerCase = newBookName.toLowerCase();
            let bookStrToArray = [...bookNameLowerCase];
            let concatNumbers = ``;
            bookStrToArray.forEach(element => {
                let stringToNumber = element.charCodeAt(0);
                concatNumbers += `${stringToNumber}`;
            });
            let Id = Number(concatNumbers.slice(0, 12));
            this.id = Id;
        }
        else {
            let bookNameLowerCase = bookName.toLowerCase();
            let bookStrToArray = [...bookNameLowerCase];
            let concatNumbers = ``;
            bookStrToArray.forEach(element => {
                let stringToNumber = element.charCodeAt(0);
                concatNumbers += `${stringToNumber}`;
            });
            let Id = Number(concatNumbers.slice(0, 12));
            this.id = Id;
        }
    }
}
//Nota, la imagen a demas de ser relevante en los objetos de la libreria, lo es a la hora de poder aplicarla de manera efectiva en una estructura de datos  que me permita mostrar este misma en el DOM de manera efectiva.
//nota 2, la imagen no es una string, es un conjunto de datos, que addquieren tanto una string como vinculos determinados.
//liderazgo
const habitos_para_ser_millonario = new books('Habitos para ser millonario', 'Brian Tracy', '¿Por qué algunas personas son más exitosas que otras? El 95 % de todo lo que piensas, sientes, haces y logras es resultado del hábito. Simplificando y organizando las ideas, Brian Tracy, experto en temas de liderazgo, estrategia, creatividad y psicología del éxito, ha escrito magistralmente un libro de obligada lectura sobre hábitos que asegura completamente el éxito personal.', 'https://image.cdn1.buscalibre.com/5c93e2f952cb61e9338b4567.__RS360x360__.jpg', true, 'liderazgo');
exports.habitos_para_ser_millonario = habitos_para_ser_millonario;
habitos_para_ser_millonario.setId(habitos_para_ser_millonario.bookName);
const como_hacer_que_la_gente_haga_cosas = new books('Como hacer que la gente haga cosas', 'Robert Conkin', 'La clave para convencer,dirigir,motivar,supervisar e influir en los demas', 'https://images-na.ssl-images-amazon.com/images/I/51g27aj0Z8L._SX318_BO1,204,203,200_.jpg', false, 'liderazgo');
exports.como_hacer_que_la_gente_haga_cosas = como_hacer_que_la_gente_haga_cosas;
como_hacer_que_la_gente_haga_cosas.setId(como_hacer_que_la_gente_haga_cosas.bookName);
const liderazgoCentradoEnPrincpios = new books('Liderazago centrado en princpios', 'Stephen R. Covey', 'Covey nos brinda una vigorosa filosofia de la vida que es tambien una garantia de exito en los negocios', 'https://images-na.ssl-images-amazon.com/images/I/81rpwgzALfL.jpg', false, 'liderazgo');
exports.liderazgoCentradoEnPrincpios = liderazgoCentradoEnPrincpios;
liderazgoCentradoEnPrincpios.setId(liderazgoCentradoEnPrincpios.bookName);
const maestriaEnLiderazgo = new books('Maestria En Liderazgo', 'Dale Carnegie', 'Tecnicas y consejos para desafiarse a usted mismo, desafiar a otros y alzanzar la grandeza', 'https://tienda.sophosenlinea.com/imagenes/9786073/978607311469.GIF', true, 'liderazgo');
exports.maestriaEnLiderazgo = maestriaEnLiderazgo;
maestriaEnLiderazgo.setId(maestriaEnLiderazgo.bookName);
const Resiste = new books('Resiste', 'Jhon C. Maxwell', 'Como liderar en la adversidad', 'https://http2.mlstatic.com/D_NQ_NP_913282-MLA30696227085_052019-O.jpg', true, 'liderazgo');
exports.Resiste = Resiste;
Resiste.setId(Resiste.bookName);
const liderDe360 = new books('Lider de 360 grados', 'John C. Maxwell', 'Como sesarrollar su influencia desde cualquier posicion en su organizacion', 'https://www.getabstract.com/summary-img/10653-JSAA3FC8.jpg?s=M', true, 'liderazgo');
exports.liderDe360 = liderDe360;
liderDe360.setId(liderDe360.bookName);
const elABCdelCoaching = new books('El ABC del Coaching', 'Jhon C. Maxwell', 'Ayudar a los demas a tener exito, produce la mayor de las satisfacciones', 'https://http2.mlstatic.com/D_NQ_NP_2X_732141-MLA32745994985_112019-F.webp', true, 'liderazgo');
exports.elABCdelCoaching = elABCdelCoaching;
elABCdelCoaching.setId(elABCdelCoaching.bookName);
//biografias
const yoSteveJobs = new books('Yo Steve Jobs', 'George Beahm', 'Sus inpiradoras e innovadoras ideas en sus propias palabras', 'https://http2.mlstatic.com/D_NQ_NP_2X_833794-MLA30166326733_042019-F.webp', true, 'Biografia');
exports.yoSteveJobs = yoSteveJobs;
yoSteveJobs.setId(yoSteveJobs.bookName);
const yoSteveJobs_Id = yoSteveJobs.id;
exports.yoSteveJobs_Id = yoSteveJobs_Id;
const SteveJobs = new books('Steve Jobs', 'Walter Isaacson', 'La biografia definitiva de steve Jobs. Esta es la unica biografia escrita con la colaboracion de Jobs', 'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg', true, 'biografia');
exports.SteveJobs = SteveJobs;
SteveJobs.setId(SteveJobs.bookName);
const quinientas__mujeres = new books('500 mujeres que hicieron historia', 'Rodolfo C. Taboada', 'Hay mujeres que dejaron una huella en la historia...', 'https://http2.mlstatic.com/D_NQ_NP_2X_764672-MLA46345841976_062021-F.webp', true, 'Biografia');
exports.quinientas__mujeres = quinientas__mujeres;
quinientas__mujeres.setId(quinientas__mujeres.bookName);
const quinientos__hombres = new books('500 hombres que hicieron historia', 'Rodolfo C. Taboada', 'Hay hombres que dejaron una huella en la historia...', 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/533807.jpg', false, 'Biografia');
exports.quinientos__hombres = quinientos__hombres;
quinientos__hombres.setId(quinientos__hombres.bookName);
//tecnologia
const four = new books('Four', 'Scott Galloway', 'El adn secreto de Amazon,Apple,Facebook y Google', 'https://http2.mlstatic.com/D_NQ_NP_2X_988097-MLA46366104100_062021-F.webp', true, 'tecnologia');
exports.four = four;
four.setId(four.bookName);
const four_Id = four.id;
exports.four_Id = four_Id;
const graciasPorLLegarTarde = new books('Gracias por llegar tarde', 'Thomas L. Friedman', 'Como la tecnologia,la globalizacion y el cambio climatico transformaran el mundo en los proximosm años', 'https://www.planetadelibros.com.ar/usuaris/libros/fotos/275/m_libros/portada_gracias-por-llegar-tarde_thomas-friedman_201807032109.jpg', true, 'tecnologia');
exports.graciasPorLLegarTarde = graciasPorLLegarTarde;
graciasPorLLegarTarde.setId(graciasPorLLegarTarde.bookName);
const innovadoresQueHacenHistoria = new books('Innovadores que hacen historia', 'Jim Stengel', 'Como las Startups y emprendedores dan vida a las grandes empresas', 'https://www.planetadelibros.com.ar/usuaris/libros/fotos/301/m_libros/portada_innovadores-que-hacen-historia_jim-stengel_201907111634.jpg', true, 'tecnologia');
exports.innovadoresQueHacenHistoria = innovadoresQueHacenHistoria;
innovadoresQueHacenHistoria.setId(innovadoresQueHacenHistoria.bookName);
//finanzas
const padreRicoPadrePobre_RobertKi = new books('Padre Rico, Padre Pobre', 'Robert Kiyosaki', 'Que les enseñan los ricos a sus hijos acerca del dinero y que los pobre y clase media no!', 'https://images-na.ssl-images-amazon.com/images/I/51AfxoGfb1L.jpg', true, 'finanzas');
exports.padreRicoPadrePobre_RobertKi = padreRicoPadrePobre_RobertKi;
padreRicoPadrePobre_RobertKi.setId(padreRicoPadrePobre_RobertKi.bookName);
const elJuegoDelDinero_RobertKi = new books('El juego del dinero', 'Robert Kiyosaki', 'Por que los inversionistas lentos pierden, y el dinero rapido gana!', 'https://m.media-amazon.com/images/I/519uxzNtMmL.jpg', true, 'finanzas');
exports.elJuegoDelDinero_RobertKi = elJuegoDelDinero_RobertKi;
elJuegoDelDinero_RobertKi.setId(elJuegoDelDinero_RobertKi.bookName);
const elToqueDeMildas_RobertKi = new books('El toque de mildas', 'Robert Kiyosaki, Donald Trump', 'Por que algunos empresarios se hacen ricos y la mayoria no', 'https://contentv2.tap-commerce.com/cover/large/9789877350104_1.jpg?id_com=1113', true, 'finanzas');
exports.elToqueDeMildas_RobertKi = elToqueDeMildas_RobertKi;
elToqueDeMildas_RobertKi.setId(elToqueDeMildas_RobertKi.bookName);
const segundaOportunidad = new books('Segunda oportunidad', 'Robert Kiyosaki', 'Una segunda oportunidad para tu vida, dinero y nuestro mundo', 'https://www.actualidadliteratura.com/wp-content/uploads/2016/03/Segunda-oportunidad.jpg', false, 'finanzas');
exports.segundaOportunidad = segundaOportunidad;
segundaOportunidad.setId(segundaOportunidad.bookName);
const ElCuadrante = new books('El Cuadrante del flujo del dinero', 'Robert Kiyosaki', 'Por que algunas personas ganan mas y trabajan menos, Es el futuro financiero', 'https://kbimages1-a.akamaihd.net/b01af704-fc75-4174-8e66-e7f966e999cf/1200/1200/False/el-cuadrante-del-flujo-de-dinero-1.jpg', false, 'finanzas');
exports.ElCuadrante = ElCuadrante;
ElCuadrante.setId(ElCuadrante.bookName);
//marketing
const EstoEsMarketing = new books('Esto es Marketing', 'Seth Godin', 'Un enfoque innovador sobre Marketing, Ventas y Publicidad', 'https://www.planetadelibros.com.ar/usuaris/libros/fotos/291/m_libros/290386_portada___201811071104.jpg', true, 'marketing');
exports.EstoEsMarketing = EstoEsMarketing;
EstoEsMarketing.setId(EstoEsMarketing.bookName);
const oceanoAzul = new books('La estrategia del Oceano Azul', 'W. Chan Kim, Renee Mauborgne', 'Un enfoque innovador sobre Marketing, Ventas y Publicidad', 'https://images-na.ssl-images-amazon.com/images/I/71LaKkJVeFL.jpg', true, 'marketing');
exports.oceanoAzul = oceanoAzul;
oceanoAzul.setId(oceanoAzul.bookName);
//psicologia
const pensarRapidoPensarDespacio = new books('Pensar rapido, Pensar despacio', 'Daniel Kahneman', 'Este autor ganador del premio Nobel de economia, revela como funciona el cerebro y la toma de decisiones', 'https://m.media-amazon.com/images/I/41vmyPJqWQL._SL500_.jpg', true, 'psicologia');
exports.pensarRapidoPensarDespacio = pensarRapidoPensarDespacio;
pensarRapidoPensarDespacio.setId(pensarRapidoPensarDespacio.bookName);
const elLibroRojo = new books('El libro rojo', 'C.G Jung', 'Durante la Primera Guerra Mundial, Jung comenzó una larga autoexploración que denominó su confrontación con lo inconsciente. Durante este período, desarrolló sus principales teorías de lo inconsciente colectivo, los arquetipos, los tipos psicológicos y el proceso de individuación.', 'https://contentv2.tap-commerce.com/cover/large/9789873761416_1.jpg?id_com=1143', true, 'psicologia');
exports.elLibroRojo = elLibroRojo;
elLibroRojo.setId(elLibroRojo.bookName);
const loInconciente = new books('Lo inconsciente', 'C.G Jung', 'En una conferencia pronunciada en 1914, un mes antes del estallido de la Gran Guerra, Jung define lo inconsciente como “todos los procesos psíquicos que están bajo el umbral de la conciencia”', 'https://contentv2.tap-commerce.com/cover/large/9789500372923_1.jpg?id_com=1113', false, 'psicologia');
exports.loInconciente = loInconciente;
loInconciente.setId(loInconciente.bookName);
const Propaganda = new books('Propaganda', 'Edward Bernays', 'Como maniupular la opinion es democracia', 'https://beersandpolitics.com/wp-content/uploads/2016/07/propaganda.jpg', true, 'psicologia');
exports.Propaganda = Propaganda;
Propaganda.setId(Propaganda.bookName);
const elHombreYsusSimbolos = new books('El hombre y sus simbolos', 'Carl G. Jung', 'Estudiar la relevancia de simbolos, nunca ha sido tan importante', 'https://www.planetadelibros.com.ar/usuaris/libros/fotos/246/m_libros/portada_el-hombre-y-sus-simbolos_carl-g-jung_201707111454.jpg', false, 'psicologia');
exports.elHombreYsusSimbolos = elHombreYsusSimbolos;
elHombreYsusSimbolos.setId(elHombreYsusSimbolos.bookName);
const ElHombreEnBuscaSentido = new books('El hombre en busca del sentido', 'Viktor Frankl', 'Es un estremecedor relato en el que vikor Frnakl narra su eexperiencia en los camposd de concentracion', 'https://m.media-amazon.com/images/I/51Tcd2inwEL._SL500_.jpg', true, 'psicologia');
exports.ElHombreEnBuscaSentido = ElHombreEnBuscaSentido;
ElHombreEnBuscaSentido.setId(ElHombreEnBuscaSentido.bookName);
const pensamientos = new books('Pensamientos', 'Marco Aurelio', 'Hacemos libros que perduran en el tiempo', 'https://http2.mlstatic.com/D_NQ_NP_2X_660296-MLA48436082512_122021-F.webp', false, 'psicoloigia');
exports.pensamientos = pensamientos;
pensamientos.setId(pensamientos.bookName);
//empresa
const laExperienciaDelCliente = new books('La experiencia del cliente', 'Hugo Brunetta', 'Este libro es un manual detallado y práctico sobre la administración de la experiencia del cliente desde una perspectiva ciento por ciento real, producto de muchos años de actividad y competencia del autor en consultoría y capacitación. ', 'https://www.planetadelibros.com.ar/usuaris/libros/fotos/303/m_libros/portada_la-experiencia-del-cliente_hugo-brunetta_201909131633.jpg', true, 'empresa');
exports.laExperienciaDelCliente = laExperienciaDelCliente;
laExperienciaDelCliente.setId(laExperienciaDelCliente.bookName);
const elEstiloVirgin = new books('El estilo Virgin', 'Richard Branson', 'Escuchar, aprender,reir y liderar. El estilo virgin trae consecuencias empredecibles y nos lleva a lugares donde otros mas sensatos no se aventuran', 'https://m.media-amazon.com/images/I/51ELKbasxwL._SL500_FMwebp_.jpg', true, 'empresa');
exports.elEstiloVirgin = elEstiloVirgin;
elEstiloVirgin.setId(elEstiloVirgin.bookName);
const elEstiloVirgin_Id = elEstiloVirgin.id;
exports.elEstiloVirgin_Id = elEstiloVirgin_Id;
const elModeloToyota = new books('El modelo toyota', 'Jeffrey K. Liker', 'Este es un libro el cual habla sobre una excelente filosofia de gestion, muestra como las empresas de servicios ganan valor', 'https://m.media-amazon.com/images/I/51Wq8VhaH0S._SL500_FMwebp_.jpg', false, 'empresa');
exports.elModeloToyota = elModeloToyota;
elModeloToyota.setId(elModeloToyota.bookName);
const Originales = new books('Originales', 'Adam Grant', 'Como los inconformes mueven el mundo', 'https://m.media-amazon.com/images/I/51tXnHCIW2L._SL500_.jpg', true, 'empresa');
exports.Originales = Originales;
Originales.setId(Originales.bookName);
const nuncaTiresLaToalla = new books('Nunca tires la toalla', 'Donald Trump', 'Como converti mis mayores desafios en grandes exitos', 'https://www.planetadelibros.com.ar/usuaris/libros/fotos/246/m_libros/portada_nunca-tires-la-toalla_donald-trump_201612282142.jpg', false, 'empresa');
exports.nuncaTiresLaToalla = nuncaTiresLaToalla;
nuncaTiresLaToalla.setId(nuncaTiresLaToalla.bookName);
const nuncaTiresLaToalla_Id = nuncaTiresLaToalla.id;
exports.nuncaTiresLaToalla_Id = nuncaTiresLaToalla_Id;
const equiposExtremos = new books('Equipos Extremos', 'Robert Bruce Shaw', 'Por que pixar, Airbnb, y otras empresas triunfan donde la mayoria fracasan', 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/652997.jpg', false, 'empresa');
exports.equiposExtremos = equiposExtremos;
equiposExtremos.setId(equiposExtremos.bookName);
//autoAyuda
const chrisGardener = new books('Chris Gardener', 'Chris Gardener', 'Un libro que te enseña como cambiar de lo imposible a lo posible. Uno de de los mejores libros de autoayuda', 'https://m.media-amazon.com/images/I/51aJcnRHtsL._SL500_.jpg', true, 'autoayuda');
exports.chrisGardener = chrisGardener;
chrisGardener.setId(chrisGardener.bookName);
const despertandoAlGiganteInterior = new books('Despertando al gigante interior', 'Anthony Robbins', 'Un viaje de autodescubrimiento hacia la realizacion personal', 'https://images-na.ssl-images-amazon.com/images/I/91LAf5CTqTL.jpg', true, 'autoayuda');
exports.despertandoAlGiganteInterior = despertandoAlGiganteInterior;
despertandoAlGiganteInterior.setId(despertandoAlGiganteInterior.bookName);
const elCaminoDeLaPerfeccion = new books('El camino de la perfeccion', 'Wayne W. Dyer', 'Ese libro dirige nuestra mirada hacia nuestro interior,pensamientos que ayudan a mejorar.', 'https://www.elsotano.com/imagenes_grandes/9786073/978607312716.JPG', true, 'autoayuda');
exports.elCaminoDeLaPerfeccion = elCaminoDeLaPerfeccion;
elCaminoDeLaPerfeccion.setId(elCaminoDeLaPerfeccion.bookName);
const las12PalancasDelExito = new books('Las 12 palncas del exito', 'Stephen R. Covey', 'Nos enseña los principios para lograr una vida plena y feliz', 'https://www.planetadelibros.com/usuaris/libros/fotos/216/m_libros/portada_las-12-palancas-del-exito_stephen-r-covey_201605271834.jpg', false, 'autoayuda');
exports.las12PalancasDelExito = las12PalancasDelExito;
las12PalancasDelExito.setId(las12PalancasDelExito.bookName);
const elPoderDeLaIntencion = new books('El poder de ;a intencion', 'Wayne W. Dyer', 'Aprende a usar tu intencion para construir una vida plena y feliz', 'https://pictures.abebooks.com/isbn/9789502803753-us.jpg', false, 'autoayuda');
exports.elPoderDeLaIntencion = elPoderDeLaIntencion;
elPoderDeLaIntencion.setId(elPoderDeLaIntencion.bookName);
const deDrogadictoAExitoso = new books('De Drogadicto A Exitoso', 'Santiago Perez', 'La historia de superacion personal y guia para evitar la autodestruccion', 'img', true, 'autoayuda');
exports.deDrogadictoAExitoso = deDrogadictoAExitoso;
const las48leyesDelPoder = new books('Las 48 Leyes Del Poder', 'Robert Greene', 'El best seller absoluto para los que quieren obtener, estudiar o commbatir el poder absoluto', 'https://image.cdn0.buscalibre.com/5d1bafa125f0b54d298b4567.__RS360x360__.jpg', true, 'autoayuda');
exports.las48leyesDelPoder = las48leyesDelPoder;
las48leyesDelPoder.setId(las48leyesDelPoder.bookName);
