class booksCategories{
    name: string;
    themes: string[];
    constructor(
        name: string,
        themes: string[]
    ){
        this.name = name;
        this.themes = themes;
    }
}


const Empresa = new booksCategories('Empresa',['Emprendimiento','start-ups','Servicios','Gestion'])

const Biografias = new booksCategories('Biografias',['Aprendizaje','Historias','Conciencia','Inspiracion','Mentes brillantes'])

const Finanzas = new booksCategories('Finanzas',['Dinero','Inversionistas','Riqueza','Libertad financiera'])

const liderazgo = new booksCategories('Liderazgo',['Princpios','Networking','Cambios positivos','Coaching','Resistencia','Desafios'])

const psicologia = new booksCategories('Psicologia',['Pensamiento','Entendimiento personal','Descubrimiento','Simbologias'])

const autoayuda = new booksCategories('Autoayuda',['Ley de la atraccion','pensamientos positivos','felicidad','vida plena'])

const marketing = new booksCategories('Marketing',['Ventas','Publicidad','Innovacion','Entendimiento humano','Creacion de oportunidades'])

const PNL = new booksCategories('PNL',['Mente','Confianza','Habitos positivos','Salud'])

const tecnologia = new booksCategories('Tecnologia',['Tecnologia','Globalizacion','Start-ups','Empresas influyentes','Innovacion','Ideas'])

const desarrolloPersonal = new booksCategories('Desarrollo Personal',['Aventura','Aprendizaje','Cambio de vida'])

const neuroCiencia = new booksCategories('Neuro Ciencia',['Ciencia','Ventas','Mente humana','Neuromarketing','Origines de las cosas'])




