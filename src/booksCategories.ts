
export class booksCategories{
    categoryName: string;
    categoryTheme: string[];
    constructor(
        categoryName: string,
        categoryTheme: string[]
    ){
        this.categoryName = categoryName;
        this.categoryTheme = categoryTheme;
    }
}



export const Empresa = new booksCategories('Empresa',['Emprendimiento','start-ups','Servicios','Gestion'])

export const Biografias = new booksCategories('Biografias',['Aprendizaje','Historias','Conciencia','Inspiracion','Mentes brillantes'])

export const Finanzas = new booksCategories('Finanzas',['Dinero','Inversionistas','Riqueza','Libertad financiera'])

export const liderazgo = new booksCategories('Liderazgo',['Princpios','Networking','Cambios positivos','Coaching','Resistencia','Desafios'])

export const psicologia = new booksCategories('Psicologia',['Pensamiento','Entendimiento personal','Descubrimiento','Simbologias'])

export const autoayuda = new booksCategories('Autoayuda',['Ley de la atraccion','pensamientos positivos','felicidad','vida plena'])

export const marketing = new booksCategories('Marketing',['Ventas','Publicidad','Innovacion','Entendimiento humano','Creacion de oportunidades'])

export const PNL = new booksCategories('PNL',['Mente','Confianza','Habitos positivos','Salud'])

export const tecnologia = new booksCategories('Tecnologia',['Tecnologia','Globalizacion','Start-ups','Empresas influyentes','Innovacion','Ideas'])

export const desarrolloPersonal = new booksCategories('Desarrollo Personal',['Aventura','Aprendizaje','Cambio de vida'])

export const neuroCiencia = new booksCategories('Neuro Ciencia',['Ciencia','Ventas','Mente humana','Neuromarketing','Origines de las cosas'])




