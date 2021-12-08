import {habitos_para_ser_millonario, yoSteveJobs, como_hacer_que_la_gente_haga_cosas, SteveJobs, four, equiposExtremos,elEstiloVirgin, elModeloToyota, nuncaTiresLaToalla, Propaganda, elHombreYsusSimbolos,laExperienciaDelCliente,loInconciente,maestriaEnLiderazgo,innovadoresQueHacenHistoria,elLibroRojo,oceanoAzul,graciasPorLLegarTarde,EstoEsMarketing,pensarRapidoPensarDespacio,padreRicoPadrePobre_RobertKi,elJuegoDelDinero_RobertKi,elToqueDeMildas_RobertKi,chrisGardener,despertandoAlGiganteInterior,elCaminoDeLaPerfeccion,las12PalancasDelExito,elPoderDeLaIntencion,Originales,ElHombreEnBuscaSentido,quinientas__mujeres,quinientos__hombres,liderazgoCentradoEnPrincpios,Resiste,liderDe360,elABCdelCoaching,segundaOportunidad,ElCuadrante,pensamientos,deDrogadictoAExitoso,las48leyesDelPoder} from './books'



class booksCategories{
    categoryName: string;
    categoryTheme: string[];
    recomendations: any[];
    books_From_category: any[];
    constructor(
        categoryName: string,
        categoryTheme: string[],
    ){
        this.categoryName = categoryName;
        this.categoryTheme = categoryTheme;
        this.recomendations = [];
        this.books_From_category = [];
    }
    addBook(param:any[]) {
        param.forEach((el) => {
            this.books_From_category.push(el)
            if(el.isRecommended) {
                this.recomendations.push(el)
            }
        })
    }


}



const Empresa = new booksCategories('Empresa',['Emprendimiento','start-ups','Servicios','Gestion'])
Empresa.addBook([laExperienciaDelCliente,elEstiloVirgin,elModeloToyota,nuncaTiresLaToalla,equiposExtremos,Originales])



const Biografias = new booksCategories('Biografias',['Aprendizaje','Historias','Conciencia','Inspiracion','Mentes brillantes'])
Biografias.addBook([yoSteveJobs, SteveJobs,quinientas__mujeres,quinientos__hombres])


const Finanzas = new booksCategories('Finanzas',['Dinero','Inversionistas','Riqueza','Libertad financiera'])
Finanzas.addBook([padreRicoPadrePobre_RobertKi,elJuegoDelDinero_RobertKi,elToqueDeMildas_RobertKi,segundaOportunidad,ElCuadrante])




const liderazgo = new booksCategories('Liderazgo',['Princpios','Networking','Cambios positivos','Coaching','Resistencia','Desafios'])
liderazgo.addBook([habitos_para_ser_millonario,como_hacer_que_la_gente_haga_cosas,liderazgoCentradoEnPrincpios,liderDe360,elABCdelCoaching,las48leyesDelPoder,maestriaEnLiderazgo])




const psicologia = new booksCategories('Psicologia',['Pensamiento','Entendimiento personal','Descubrimiento','Simbologias'])
psicologia.addBook([pensarRapidoPensarDespacio,elLibroRojo,loInconciente,Propaganda,elHombreYsusSimbolos,ElHombreEnBuscaSentido,pensamientos,las48leyesDelPoder])




const autoayuda = new booksCategories('Autoayuda',['Ley de la atraccion','pensamientos positivos','felicidad','vida plena'])
autoayuda.addBook([chrisGardener,despertandoAlGiganteInterior,elCaminoDeLaPerfeccion,las12PalancasDelExito,elPoderDeLaIntencion,Resiste,deDrogadictoAExitoso,las48leyesDelPoder])

const marketing = new booksCategories('Marketing',['Ventas','Publicidad','Innovacion','Entendimiento humano','Creacion de oportunidades'])
marketing.addBook([EstoEsMarketing,oceanoAzul])


const PNL = new booksCategories('PNL',['Mente','Confianza','Habitos positivos','Salud'])

const tecnologia = new booksCategories('Tecnologia',['Tecnologia','Globalizacion','Start-ups','Empresas influyentes','Innovacion','Ideas'])
tecnologia.addBook([four,graciasPorLLegarTarde,innovadoresQueHacenHistoria])


const desarrolloPersonal = new booksCategories('Desarrollo Personal',['Aventura','Aprendizaje','Cambio de vida'])

const neuroCiencia = new booksCategories('Neuro Ciencia',['Ciencia','Ventas','Mente humana','Neuromarketing','Origines de las cosas'])

export {booksCategories, neuroCiencia, desarrolloPersonal,tecnologia,PNL,marketing,autoayuda,Finanzas,liderazgo,psicologia,Empresa,Biografias}




