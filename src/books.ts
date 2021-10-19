import { booksCategories,Empresa, Biografias, Finanzas, liderazgo, psicologia, autoayuda, marketing, PNL,tecnologia, desarrolloPersonal, neuroCiencia  } from './booksCategories'


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



