import {habitos_para_ser_millonario, yoSteveJobs, como_hacer_que_la_gente_haga_cosas, SteveJobs, four, equiposExtremos,elEstiloVirgin, elModeloToyota, nuncaTiresLaToalla, Propaganda, elHombreYsusSimbolos,laExperienciaDelCliente,loInconciente,innovadoresQueHacenHistoria,elLibroRojo,oceanoAzul,graciasPorLLegarTarde,EstoEsMarketing,pensarRapidoPensarDespacio,padreRicoPadrePobre_RobertKi,elJuegoDelDinero_RobertKi,elToqueDeMildas_RobertKi } from './books'



class booksCategories{
    categoryName: string;
    categoryTheme: string[];
    recomendations: any[];
    constructor(
        categoryName: string,
        categoryTheme: string[],
    ){
        this.categoryName = categoryName;
        this.categoryTheme = categoryTheme;
        this.recomendations = [];
    }

    addRecomendations(param:any[]) {
        param.forEach(el => {
            if(el.isRecommended) {
                this.recomendations.push(el)
            }
        });
        
    }


}



const Empresa = new booksCategories('Empresa',['Emprendimiento','start-ups','Servicios','Gestion'])
Empresa.addRecomendations([laExperienciaDelCliente,elEstiloVirgin,elModeloToyota,nuncaTiresLaToalla,equiposExtremos])


const Biografias = new booksCategories('Biografias',['Aprendizaje','Historias','Conciencia','Inspiracion','Mentes brillantes'])
Biografias.addRecomendations([yoSteveJobs, SteveJobs])


const Finanzas = new booksCategories('Finanzas',['Dinero','Inversionistas','Riqueza','Libertad financiera'])
Finanzas.addRecomendations([padreRicoPadrePobre_RobertKi,elJuegoDelDinero_RobertKi,elToqueDeMildas_RobertKi])




const liderazgo = new booksCategories('Liderazgo',['Princpios','Networking','Cambios positivos','Coaching','Resistencia','Desafios'])
liderazgo.addRecomendations([habitos_para_ser_millonario,como_hacer_que_la_gente_haga_cosas])




const psicologia = new booksCategories('Psicologia',['Pensamiento','Entendimiento personal','Descubrimiento','Simbologias'])
psicologia.addRecomendations([pensarRapidoPensarDespacio,elLibroRojo,loInconciente,Propaganda,elHombreYsusSimbolos])




const autoayuda = new booksCategories('Autoayuda',['Ley de la atraccion','pensamientos positivos','felicidad','vida plena'])

const marketing = new booksCategories('Marketing',['Ventas','Publicidad','Innovacion','Entendimiento humano','Creacion de oportunidades'])
marketing.addRecomendations([EstoEsMarketing,oceanoAzul])




const PNL = new booksCategories('PNL',['Mente','Confianza','Habitos positivos','Salud'])

const tecnologia = new booksCategories('Tecnologia',['Tecnologia','Globalizacion','Start-ups','Empresas influyentes','Innovacion','Ideas'])
tecnologia.addRecomendations([four,graciasPorLLegarTarde,innovadoresQueHacenHistoria])


const desarrolloPersonal = new booksCategories('Desarrollo Personal',['Aventura','Aprendizaje','Cambio de vida'])

const neuroCiencia = new booksCategories('Neuro Ciencia',['Ciencia','Ventas','Mente humana','Neuromarketing','Origines de las cosas'])

export {booksCategories, neuroCiencia, desarrolloPersonal,tecnologia,PNL,marketing,autoayuda,Finanzas,liderazgo,psicologia,Empresa,Biografias}




