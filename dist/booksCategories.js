"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biografias = exports.Empresa = exports.psicologia = exports.liderazgo = exports.Finanzas = exports.autoayuda = exports.marketing = exports.PNL = exports.tecnologia = exports.desarrolloPersonal = exports.neuroCiencia = exports.booksCategories = void 0;
const books_1 = require("./books");
class booksCategories {
    constructor(categoryName, categoryTheme) {
        this.categoryName = categoryName;
        this.categoryTheme = categoryTheme;
        this.recomendations = [];
        this.books_From_category = [];
    }
    addBook(param) {
        param.forEach((el) => {
            this.books_From_category.push(el);
            if (el.isRecommended) {
                this.recomendations.push(el);
            }
        });
    }
}
exports.booksCategories = booksCategories;
const Empresa = new booksCategories('Empresa', ['Emprendimiento', 'start-ups', 'Servicios', 'Gestion']);
exports.Empresa = Empresa;
Empresa.addBook([books_1.laExperienciaDelCliente, books_1.elEstiloVirgin, books_1.elModeloToyota, books_1.nuncaTiresLaToalla, books_1.equiposExtremos, books_1.Originales]);
const Biografias = new booksCategories('Biografias', ['Aprendizaje', 'Historias', 'Conciencia', 'Inspiracion', 'Mentes brillantes']);
exports.Biografias = Biografias;
Biografias.addBook([books_1.yoSteveJobs, books_1.SteveJobs, books_1.quinientas__mujeres, books_1.quinientos__hombres]);
const Finanzas = new booksCategories('Finanzas', ['Dinero', 'Inversionistas', 'Riqueza', 'Libertad financiera']);
exports.Finanzas = Finanzas;
Finanzas.addBook([books_1.padreRicoPadrePobre_RobertKi, books_1.elJuegoDelDinero_RobertKi, books_1.elToqueDeMildas_RobertKi, books_1.segundaOportunidad, books_1.ElCuadrante]);
const liderazgo = new booksCategories('Liderazgo', ['Princpios', 'Networking', 'Cambios positivos', 'Coaching', 'Resistencia', 'Desafios']);
exports.liderazgo = liderazgo;
liderazgo.addBook([books_1.habitos_para_ser_millonario, books_1.como_hacer_que_la_gente_haga_cosas, books_1.liderazgoCentradoEnPrincpios, books_1.liderDe360, books_1.elABCdelCoaching, books_1.las48leyesDelPoder, books_1.maestriaEnLiderazgo]);
const psicologia = new booksCategories('Psicologia', ['Pensamiento', 'Entendimiento personal', 'Descubrimiento', 'Simbologias']);
exports.psicologia = psicologia;
psicologia.addBook([books_1.pensarRapidoPensarDespacio, books_1.elLibroRojo, books_1.loInconciente, books_1.Propaganda, books_1.elHombreYsusSimbolos, books_1.ElHombreEnBuscaSentido, books_1.pensamientos, books_1.las48leyesDelPoder]);
const autoayuda = new booksCategories('Autoayuda', ['Ley de la atraccion', 'pensamientos positivos', 'felicidad', 'vida plena']);
exports.autoayuda = autoayuda;
autoayuda.addBook([books_1.chrisGardener, books_1.despertandoAlGiganteInterior, books_1.elCaminoDeLaPerfeccion, books_1.las12PalancasDelExito, books_1.elPoderDeLaIntencion, books_1.Resiste, books_1.deDrogadictoAExitoso, books_1.las48leyesDelPoder]);
const marketing = new booksCategories('Marketing', ['Ventas', 'Publicidad', 'Innovacion', 'Entendimiento humano', 'Creacion de oportunidades']);
exports.marketing = marketing;
marketing.addBook([books_1.EstoEsMarketing, books_1.oceanoAzul]);
const PNL = new booksCategories('PNL', ['Mente', 'Confianza', 'Habitos positivos', 'Salud']);
exports.PNL = PNL;
const tecnologia = new booksCategories('Tecnologia', ['Tecnologia', 'Globalizacion', 'Start-ups', 'Empresas influyentes', 'Innovacion', 'Ideas']);
exports.tecnologia = tecnologia;
tecnologia.addBook([books_1.four, books_1.graciasPorLLegarTarde, books_1.innovadoresQueHacenHistoria]);
const desarrolloPersonal = new booksCategories('Desarrollo Personal', ['Aventura', 'Aprendizaje', 'Cambio de vida']);
exports.desarrolloPersonal = desarrolloPersonal;
const neuroCiencia = new booksCategories('Neuro Ciencia', ['Ciencia', 'Ventas', 'Mente humana', 'Neuromarketing', 'Origines de las cosas']);
exports.neuroCiencia = neuroCiencia;
