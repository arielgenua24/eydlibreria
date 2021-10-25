"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biografias = exports.Empresa = exports.psicologia = exports.liderazgo = exports.Finanzas = exports.autoayuda = exports.marketing = exports.PNL = exports.tecnologia = exports.desarrolloPersonal = exports.neuroCiencia = exports.booksCategories = void 0;
var books_1 = require("./books");
var booksCategories = /** @class */ (function () {
    function booksCategories(categoryName, categoryTheme) {
        this.categoryName = categoryName;
        this.categoryTheme = categoryTheme;
        this.recomendations = [];
    }
    booksCategories.prototype.addRecomendations = function (param) {
        var _this = this;
        param.forEach(function (el) {
            if (el.isRecommended) {
                _this.recomendations.push(el);
            }
        });
    };
    return booksCategories;
}());
exports.booksCategories = booksCategories;
var Empresa = new booksCategories('Empresa', ['Emprendimiento', 'start-ups', 'Servicios', 'Gestion']);
exports.Empresa = Empresa;
Empresa.addRecomendations([books_1.laExperienciaDelCliente, books_1.elEstiloVirgin, books_1.elModeloToyota, books_1.nuncaTiresLaToalla, books_1.equiposExtremos]);
var Biografias = new booksCategories('Biografias', ['Aprendizaje', 'Historias', 'Conciencia', 'Inspiracion', 'Mentes brillantes']);
exports.Biografias = Biografias;
Biografias.addRecomendations([books_1.yoSteveJobs, books_1.SteveJobs]);
var Finanzas = new booksCategories('Finanzas', ['Dinero', 'Inversionistas', 'Riqueza', 'Libertad financiera']);
exports.Finanzas = Finanzas;
Finanzas.addRecomendations([books_1.padreRicoPadrePobre_RobertKi, books_1.elJuegoDelDinero_RobertKi, books_1.elToqueDeMildas_RobertKi]);
var liderazgo = new booksCategories('Liderazgo', ['Princpios', 'Networking', 'Cambios positivos', 'Coaching', 'Resistencia', 'Desafios']);
exports.liderazgo = liderazgo;
liderazgo.addRecomendations([books_1.habitos_para_ser_millonario, books_1.como_hacer_que_la_gente_haga_cosas]);
var psicologia = new booksCategories('Psicologia', ['Pensamiento', 'Entendimiento personal', 'Descubrimiento', 'Simbologias']);
exports.psicologia = psicologia;
psicologia.addRecomendations([books_1.pensarRapidoPensarDespacio, books_1.elLibroRojo, books_1.loInconciente, books_1.Propaganda, books_1.elHombreYsusSimbolos]);
var autoayuda = new booksCategories('Autoayuda', ['Ley de la atraccion', 'pensamientos positivos', 'felicidad', 'vida plena']);
exports.autoayuda = autoayuda;
var marketing = new booksCategories('Marketing', ['Ventas', 'Publicidad', 'Innovacion', 'Entendimiento humano', 'Creacion de oportunidades']);
exports.marketing = marketing;
marketing.addRecomendations([books_1.EstoEsMarketing, books_1.oceanoAzul]);
var PNL = new booksCategories('PNL', ['Mente', 'Confianza', 'Habitos positivos', 'Salud']);
exports.PNL = PNL;
var tecnologia = new booksCategories('Tecnologia', ['Tecnologia', 'Globalizacion', 'Start-ups', 'Empresas influyentes', 'Innovacion', 'Ideas']);
exports.tecnologia = tecnologia;
tecnologia.addRecomendations([books_1.four, books_1.graciasPorLLegarTarde, books_1.innovadoresQueHacenHistoria]);
var desarrolloPersonal = new booksCategories('Desarrollo Personal', ['Aventura', 'Aprendizaje', 'Cambio de vida']);
exports.desarrolloPersonal = desarrolloPersonal;
var neuroCiencia = new booksCategories('Neuro Ciencia', ['Ciencia', 'Ventas', 'Mente humana', 'Neuromarketing', 'Origines de las cosas']);
exports.neuroCiencia = neuroCiencia;
