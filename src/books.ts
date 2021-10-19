import { booksCategories,Empresa, Biografias, Finanzas, liderazgo, psicologia, autoayuda, marketing, PNL,tecnologia, desarrolloPersonal, neuroCiencia} from './booksCategories'
import { empresas, RobertKiyosaki } from './userRecomendations';


class books extends booksCategories{
    bookName: string;
    author: string;
    description: string;
    image: string;

    constructor(
        categoryName: string,
        categoryTheme: string[],
        bookName: string,
        author: string,
        description: string,
        image: string
        ){
            super(categoryName, categoryTheme);
            this.bookName = bookName;
            this.author = author;
            this.description = description;
            this.image = image;
        }
}

//Nota, la imagen a demas de ser relevante en los objetos de la libreria, lo es a la hora de poder aplicarla de manera efectiva en una estructura de datos  que me permita mostrar este misma en el DOM de manera efectiva.

//nota 2, la imagen no es una string, es un conjunto de datos, que addquieren tanto una string como vinculos determinados.

const habitos_para_ser_millonario = new books(desarrolloPersonal.categoryName,desarrolloPersonal.categoryTheme,'Habitos para ser millonario','Brian Tracy','¿Por qué algunas personas son más exitosas que otras? El 95 % de todo lo que piensas, sientes, haces y logras es resultado del hábito. Simplificando y organizando las ideas, Brian Tracy, experto en temas de liderazgo, estrategia, creatividad y psicología del éxito, ha escrito magistralmente un libro de obligada lectura sobre hábitos que asegura completamente el éxito personal.','src:')

const como_hacer_que_la_gente_haga_cosas = new books(liderazgo.categoryName,liderazgo.categoryTheme,'Como hacer que la gente haga cosas','Robert Conkin','La clave para convencer,dirigir,motivar,supervisar e influir en los demas','src::')

const yoSteveJobs = new books(Biografias.categoryName,Biografias.categoryTheme,'Yo, Steve Jobs','George Beahm', 'Sus inpiradoras e innovadoras ideas en sus propias palabras','src::')

const SteveJobs = new books(Biografias.categoryName,Biografias.categoryTheme,'Steve Jobs','Walter Isaacson', 'La biografia definitiva de steve Jobs. Esta es la unica biografia escrita con la colaboracion de Jobs','src::')

const four = new books(tecnologia.categoryName,tecnologia.categoryTheme,'Four','Scott Galloway','El adn secreto de Amazon,Apple,Facebook y Google','src::')

const graciasPorLLegarTarde = new books(tecnologia.categoryName,tecnologia.categoryTheme,'Gracias por llegar tarde','Thomas L. Friedman','Como la tecnologia,la globalizacion y el cambio climatico transformaran el mundo en los proximosm años','src::')


const innovadoresQueHacenHistoria = new books(tecnologia.categoryName,tecnologia.categoryTheme,' Innovadores que hacen historia', 'Jim Stengel','Como las Startups y emprendedores dan vida a las grandes empresas','src::')

const padreRicoPadrePobre_RobertKi = new books(Finanzas.categoryName,Finanzas.categoryTheme,'Padre Rico, Padre Pobre','Robert Kiyosaki','Que les enseñan los ricos a sus hijos acerca del dinero y que los pobre y clase media no!','src::')

const elJuegoDelDinero_RobertKi = new books(Finanzas.categoryName,Finanzas.categoryTheme,'El juego del dinero','Robert Kiyosaki','Por que los inversionistas lentos pierden, y el dinero rapido gana!','src::')

const elToqueDeMildas_RobertKi = new books(Finanzas.categoryName,Finanzas.categoryTheme,'El toque de mildas','Robert Kiyosaki, Donald Trump','Por que algunos empresarios se hacen ricos y la mayoria no','src')

const EstoEsMarketing = new books(marketing.categoryName,marketing.categoryTheme,'Esto es Marketing','Seth Godin','Un enfoque innovador sobre Marketing, Ventas y Publicidad','image::')

const oceanoAzul = new books(marketing.categoryName,marketing.categoryTheme,'La estrategia del Oceano Azul','W. Chan Kim, Renee Mauborgne','Un enfoque innovador sobre Marketing, Ventas y Publicidad','image::')

const pensarRapidoPensarDespacio = new books(psicologia.categoryName,psicologia.categoryTheme,'Pensar rapido, Pensar despacio','Daniel Kahneman','Este autor ganador del premio Nobel de economia, revela como funciona el cerebro y la toma de decisiones','src::')

const elLibroRojo = new books(psicologia.categoryName,psicologia.categoryTheme,'El libro rojo','C.G Jung','Durante la Primera Guerra Mundial, Jung comenzó una larga autoexploración que denominó su confrontación con lo inconsciente. Durante este período, desarrolló sus principales teorías de lo inconsciente colectivo, los arquetipos, los tipos psicológicos y el proceso de individuación.','img::')

const loInconciente = new books(psicologia.categoryName,psicologia.categoryTheme,'Lo inconsciente','C.G Jung','En una conferencia pronunciada en 1914, un mes antes del estallido de la Gran Guerra, Jung define lo inconsciente como “todos los procesos psíquicos que están bajo el umbral de la conciencia”','img::')

const Propaganda = new books(psicologia.categoryName,psicologia.categoryTheme,'Propaganda','Edward Bernays','Como maniupular la opinion es democracia','imag::')

const elHombreYsusSimbolos = new books(psicologia.categoryName,psicologia.categoryTheme,'El hombre y sus simbolos','Carl G. Jung','Estudiar la relevancia de simbolos, nunca ha sido tan importante','src::')

const laExperienciaDelCliente = new books(Empresa.categoryName,Empresa.categoryTheme,'La experiencia del cliente','Hugo Brunetta','Este libro es un manual detallado y práctico sobre la administración de la experiencia del cliente desde una perspectiva ciento por ciento real, producto de muchos años de actividad y competencia del autor en consultoría y capacitación. ','img::') 

const elEstiloVirgin = new books(Empresa.categoryName,Empresa.categoryTheme,'El estilo Virgin','Richard Branson','Escuchar, aprender,reir y liderar. El estilo virgin trae consecuencias empredecibles y nos lleva a lugares donde otros mas sensatos no se aventuran','src::')

const elModeloToyota = new books(Empresa.categoryName,Empresa.categoryTheme,'El modelo toyota','Jeffrey K. Liker','Este es un libro el cual habla sobre una excelente filosofia de gestion, muestra como las empresas de servicios ganan valor','img::')

const nuncaTiresLaToalla = new books(Empresa.categoryName,Empresa.categoryTheme,'Nunca tires la toalla','Donald Trump','Como converti mis mayores desafios en grandes exitos','img::')

const equiposExtremos = new books(Empresa.categoryName,Empresa.categoryTheme,'Equipos Extremos','Robert Bruce Shaw','Por que pixar, Airbnb, y otras empresas triunfan donde la mayoria fracasan','img::')





