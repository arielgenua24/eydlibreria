import { booksCategories,Empresa, Biografias, Finanzas, liderazgo, psicologia, autoayuda, marketing, PNL,tecnologia, desarrolloPersonal, neuroCiencia} from './booksCategories'


 class books {
    bookName: string;
    author: string;
    description: string;
    image: any;
    isRecommended : boolean;
    category: string;

    constructor(
        bookName: string,
        author: string,
        description: string,
        image: any,
        isRecommended : boolean = false,
        category: string
        ){
            this.bookName = bookName;
            this.author = author;
            this.description = description;
            this.image = image;
            this.isRecommended = isRecommended;
            this.category = category;
        }
}

//Nota, la imagen a demas de ser relevante en los objetos de la libreria, lo es a la hora de poder aplicarla de manera efectiva en una estructura de datos  que me permita mostrar este misma en el DOM de manera efectiva.

//nota 2, la imagen no es una string, es un conjunto de datos, que addquieren tanto una string como vinculos determinados.





//liderazgo
 const habitos_para_ser_millonario = new books('Habitos para ser millonario','Brian Tracy','¿Por qué algunas personas son más exitosas que otras? El 95 % de todo lo que piensas, sientes, haces y logras es resultado del hábito. Simplificando y organizando las ideas, Brian Tracy, experto en temas de liderazgo, estrategia, creatividad y psicología del éxito, ha escrito magistralmente un libro de obligada lectura sobre hábitos que asegura completamente el éxito personal.','src::',true,'liderazgo')

 const como_hacer_que_la_gente_haga_cosas = new books('Como hacer que la gente haga cosas','Robert Conkin','La clave para convencer,dirigir,motivar,supervisar e influir en los demas','src::',false,'liderazgo')

 
 
//biografias
const yoSteveJobs = new books('Yo, Steve Jobs','George Beahm', 'Sus inpiradoras e innovadoras ideas en sus propias palabras','https://http2.mlstatic.com/D_NQ_NP_2X_833794-MLA30166326733_042019-F.webp',true,'Biografia')

const SteveJobs = new books('Steve Jobs','Walter Isaacson', 'La biografia definitiva de steve Jobs. Esta es la unica biografia escrita con la colaboracion de Jobs','https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg',true,'biografia')


//tecnologia
const four = new books('Four','Scott Galloway','El adn secreto de Amazon,Apple,Facebook y Google','https://http2.mlstatic.com/D_NQ_NP_2X_988097-MLA46366104100_062021-F.webp',true,'tecnologia')

const graciasPorLLegarTarde = new books('Gracias por llegar tarde','Thomas L. Friedman','Como la tecnologia,la globalizacion y el cambio climatico transformaran el mundo en los proximosm años','https://www.planetadelibros.com.ar/usuaris/libros/fotos/275/m_libros/portada_gracias-por-llegar-tarde_thomas-friedman_201807032109.jpg',true,'tecnologia')

const innovadoresQueHacenHistoria = new books(' Innovadores que hacen historia', 'Jim Stengel','Como las Startups y emprendedores dan vida a las grandes empresas','https://www.planetadelibros.com.ar/usuaris/libros/fotos/301/m_libros/portada_innovadores-que-hacen-historia_jim-stengel_201907111634.jpg',true,'tecnologia')


//finanzas
const padreRicoPadrePobre_RobertKi = new books('Padre Rico, Padre Pobre','Robert Kiyosaki','Que les enseñan los ricos a sus hijos acerca del dinero y que los pobre y clase media no!','https://images-na.ssl-images-amazon.com/images/I/51AfxoGfb1L.jpg',true,'finanzas')

const elJuegoDelDinero_RobertKi = new books('El juego del dinero','Robert Kiyosaki','Por que los inversionistas lentos pierden, y el dinero rapido gana!','https://m.media-amazon.com/images/I/519uxzNtMmL.jpg',true,'finanzas')

const elToqueDeMildas_RobertKi = new books('El toque de mildas','Robert Kiyosaki, Donald Trump','Por que algunos empresarios se hacen ricos y la mayoria no','https://contentv2.tap-commerce.com/cover/large/9789877350104_1.jpg?id_com=1113',true,'finanzas')


//marketing
const EstoEsMarketing = new books('Esto es Marketing','Seth Godin','Un enfoque innovador sobre Marketing, Ventas y Publicidad','https://www.planetadelibros.com.ar/usuaris/libros/fotos/291/m_libros/290386_portada___201811071104.jpg',true,'marketing')

const oceanoAzul = new books('La estrategia del Oceano Azul','W. Chan Kim, Renee Mauborgne','Un enfoque innovador sobre Marketing, Ventas y Publicidad','https://images-na.ssl-images-amazon.com/images/I/71LaKkJVeFL.jpg',true,'marketing')



//psicologia
const pensarRapidoPensarDespacio = new books('Pensar rapido, Pensar despacio','Daniel Kahneman','Este autor ganador del premio Nobel de economia, revela como funciona el cerebro y la toma de decisiones','src::',true,'psicologia')

const elLibroRojo = new books('El libro rojo','C.G Jung','Durante la Primera Guerra Mundial, Jung comenzó una larga autoexploración que denominó su confrontación con lo inconsciente. Durante este período, desarrolló sus principales teorías de lo inconsciente colectivo, los arquetipos, los tipos psicológicos y el proceso de individuación.','img::',true,'psicologia')

const loInconciente = new books('Lo inconsciente','C.G Jung','En una conferencia pronunciada en 1914, un mes antes del estallido de la Gran Guerra, Jung define lo inconsciente como “todos los procesos psíquicos que están bajo el umbral de la conciencia”','img::',false,'psicologia')

const Propaganda = new books('Propaganda','Edward Bernays','Como maniupular la opinion es democracia','imag::',true,'psicologia')

const elHombreYsusSimbolos = new books('El hombre y sus simbolos','Carl G. Jung','Estudiar la relevancia de simbolos, nunca ha sido tan importante','src::',false,'psicologia')


//empresa
const laExperienciaDelCliente = new books('La experiencia del cliente','Hugo Brunetta','Este libro es un manual detallado y práctico sobre la administración de la experiencia del cliente desde una perspectiva ciento por ciento real, producto de muchos años de actividad y competencia del autor en consultoría y capacitación. ','img::',true,'empresa') 

const elEstiloVirgin = new books('El estilo Virgin','Richard Branson','Escuchar, aprender,reir y liderar. El estilo virgin trae consecuencias empredecibles y nos lleva a lugares donde otros mas sensatos no se aventuran','src::',true,'empresa')

const elModeloToyota = new books('El modelo toyota','Jeffrey K. Liker','Este es un libro el cual habla sobre una excelente filosofia de gestion, muestra como las empresas de servicios ganan valor','img::',true,'empresa')

const nuncaTiresLaToalla = new books('Nunca tires la toalla','Donald Trump','Como converti mis mayores desafios en grandes exitos','img::',false,'empresa')

const equiposExtremos = new books('Equipos Extremos','Robert Bruce Shaw','Por que pixar, Airbnb, y otras empresas triunfan donde la mayoria fracasan','img::',false,'empresa')




export {habitos_para_ser_millonario, yoSteveJobs, como_hacer_que_la_gente_haga_cosas, SteveJobs, four, equiposExtremos,elEstiloVirgin, elModeloToyota, nuncaTiresLaToalla, Propaganda, elHombreYsusSimbolos,laExperienciaDelCliente,loInconciente,innovadoresQueHacenHistoria,elLibroRojo,oceanoAzul,graciasPorLLegarTarde,EstoEsMarketing,pensarRapidoPensarDespacio,padreRicoPadrePobre_RobertKi,elJuegoDelDinero_RobertKi,elToqueDeMildas_RobertKi }

