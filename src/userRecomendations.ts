class recomendations{
    book: string[];
    author: string[];
    theme: string;
    description: string;
        constructor(
        book: string[],
        author: string[],
        theme: string,
        description: string,
    ){
        this.book = book;
        this.author = author;
        this.theme = theme;
        this.description = description;
    }
    
}

const steveJobs_George = new recomendations(['yo Steve Jobs'],['George Beahm'], 'Emprendimiento', 'Basado en las entrevistas e intervenciones publicas que Steve Jobs realizo a lo largo de su vida, este libro recoge los pensamientos mas sagaces y brillantes de este visionario.')

const steveJobs_WalterIsaacson = new recomendations([' Steve Jobs'],['WalterIsaacson'], 'Emprendimiento', 'La biografia definitiva de Steve Jobs, tras entrevistar a todos los que lo han rodeado, Walter Isaacson nos presenta la unica biografia colaborada con el mismo Steve.');

const RobertKiyosaki = new recomendations(['El juego del dinero'], ['Robert T. Kiyosaki'], 'Finanazas', 'Descubra como puede mantener el dinero en movimiento en lugar de tenerlo estancado en la cuenta de alguien mas')

const RobertKiyosaki2 = new recomendations(['Padre rico, Padre pobre'], ['Robert T. Kiyosaki'], 'Finanzas', 'Que les enseñan los ricos a sus hijos acerca del dinero, y que la clase media no!')


const empresas = new recomendations(['Equipos Extremos', 'El estilo virgin', 'El modelo toyota'],['Robert Bruce Shaw','Richard Branson', 'Jefrey K. Liker'],'empresas','')

const psicologia = new recomendations(['Pensar rapido, pensar despacio','Lo inconsciente','Propaganda'],['Daniel Kahneman','Jung','Edward Bernays'],'Psicologia','')

const tecnologia = new recomendations(['Gracias por llegar tarde','Four','Innovadores que hacen historia'],['Thomas Friedman','Scott Galloway','Jim Stengel & Tom Post'],'Tecnologia','')

const Marketing = new recomendations(['Esto es marketing','La estrategia del oceano azul'],['Seth Godin','W.Chan Kim|Renee Mauborgne'],'Marketing','')


