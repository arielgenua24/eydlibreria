"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biografias = exports.Empresa = exports.psicologia = exports.liderazgo = exports.Finanzas = exports.autoayuda = exports.marketing = exports.PNL = exports.tecnologia = exports.desarrolloPersonal = exports.neuroCiencia = exports.booksCategories = void 0;
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
        console.log(this.recomendations);
    };
    return booksCategories;
}());
exports.booksCategories = booksCategories;
var Empresa = new booksCategories('Empresa', ['Emprendimiento', 'start-ups', 'Servicios', 'Gestion']);
exports.Empresa = Empresa;
var Biografias = new booksCategories('Biografias', ['Aprendizaje', 'Historias', 'Conciencia', 'Inspiracion', 'Mentes brillantes']);
exports.Biografias = Biografias;
var Finanzas = new booksCategories('Finanzas', ['Dinero', 'Inversionistas', 'Riqueza', 'Libertad financiera']);
exports.Finanzas = Finanzas;
var liderazgo = new booksCategories('Liderazgo', ['Princpios', 'Networking', 'Cambios positivos', 'Coaching', 'Resistencia', 'Desafios']);
exports.liderazgo = liderazgo;
var psicologia = new booksCategories('Psicologia', ['Pensamiento', 'Entendimiento personal', 'Descubrimiento', 'Simbologias']);
exports.psicologia = psicologia;
var autoayuda = new booksCategories('Autoayuda', ['Ley de la atraccion', 'pensamientos positivos', 'felicidad', 'vida plena']);
exports.autoayuda = autoayuda;
var marketing = new booksCategories('Marketing', ['Ventas', 'Publicidad', 'Innovacion', 'Entendimiento humano', 'Creacion de oportunidades']);
exports.marketing = marketing;
var PNL = new booksCategories('PNL', ['Mente', 'Confianza', 'Habitos positivos', 'Salud']);
exports.PNL = PNL;
var tecnologia = new booksCategories('Tecnologia', ['Tecnologia', 'Globalizacion', 'Start-ups', 'Empresas influyentes', 'Innovacion', 'Ideas']);
exports.tecnologia = tecnologia;
var desarrolloPersonal = new booksCategories('Desarrollo Personal', ['Aventura', 'Aprendizaje', 'Cambio de vida']);
exports.desarrolloPersonal = desarrolloPersonal;
var neuroCiencia = new booksCategories('Neuro Ciencia', ['Ciencia', 'Ventas', 'Mente humana', 'Neuromarketing', 'Origines de las cosas']);
exports.neuroCiencia = neuroCiencia;
