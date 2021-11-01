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
Empresa.addBook([books_1.laExperienciaDelCliente, books_1.elEstiloVirgin, books_1.elModeloToyota, books_1.nuncaTiresLaToalla, books_1.equiposExtremos]);
const Biografias = new booksCategories('Biografias', ['Aprendizaje', 'Historias', 'Conciencia', 'Inspiracion', 'Mentes brillantes']);
exports.Biografias = Biografias;
Biografias.addBook([books_1.yoSteveJobs, books_1.SteveJobs]);
const Finanzas = new booksCategories('Finanzas', ['Dinero', 'Inversionistas', 'Riqueza', 'Libertad financiera']);
exports.Finanzas = Finanzas;
Finanzas.addBook([books_1.padreRicoPadrePobre_RobertKi, books_1.elJuegoDelDinero_RobertKi, books_1.elToqueDeMildas_RobertKi]);
const liderazgo = new booksCategories('Liderazgo', ['Princpios', 'Networking', 'Cambios positivos', 'Coaching', 'Resistencia', 'Desafios']);
exports.liderazgo = liderazgo;
liderazgo.addBook([books_1.habitos_para_ser_millonario, books_1.como_hacer_que_la_gente_haga_cosas]);
const psicologia = new booksCategories('Psicologia', ['Pensamiento', 'Entendimiento personal', 'Descubrimiento', 'Simbologias']);
exports.psicologia = psicologia;
psicologia.addBook([books_1.pensarRapidoPensarDespacio, books_1.elLibroRojo, books_1.loInconciente, books_1.Propaganda, books_1.elHombreYsusSimbolos]);
const autoayuda = new booksCategories('Autoayuda', ['Ley de la atraccion', 'pensamientos positivos', 'felicidad', 'vida plena']);
exports.autoayuda = autoayuda;
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
