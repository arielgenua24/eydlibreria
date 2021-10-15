"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.neuroCiencia = exports.desarrolloPersonal = exports.tecnologia = exports.PNL = exports.marketing = exports.autoayuda = exports.psicologia = exports.liderazgo = exports.Finanzas = exports.Biografias = exports.Empresa = exports.booksCategories = void 0;
var booksCategories = /** @class */ (function () {
    function booksCategories(categoryName, categoryTheme) {
        this.categoryName = categoryName;
        this.categoryTheme = categoryTheme;
    }
    return booksCategories;
}());
exports.booksCategories = booksCategories;
exports.Empresa = new booksCategories('Empresa', ['Emprendimiento', 'start-ups', 'Servicios', 'Gestion']);
exports.Biografias = new booksCategories('Biografias', ['Aprendizaje', 'Historias', 'Conciencia', 'Inspiracion', 'Mentes brillantes']);
exports.Finanzas = new booksCategories('Finanzas', ['Dinero', 'Inversionistas', 'Riqueza', 'Libertad financiera']);
exports.liderazgo = new booksCategories('Liderazgo', ['Princpios', 'Networking', 'Cambios positivos', 'Coaching', 'Resistencia', 'Desafios']);
exports.psicologia = new booksCategories('Psicologia', ['Pensamiento', 'Entendimiento personal', 'Descubrimiento', 'Simbologias']);
exports.autoayuda = new booksCategories('Autoayuda', ['Ley de la atraccion', 'pensamientos positivos', 'felicidad', 'vida plena']);
exports.marketing = new booksCategories('Marketing', ['Ventas', 'Publicidad', 'Innovacion', 'Entendimiento humano', 'Creacion de oportunidades']);
exports.PNL = new booksCategories('PNL', ['Mente', 'Confianza', 'Habitos positivos', 'Salud']);
exports.tecnologia = new booksCategories('Tecnologia', ['Tecnologia', 'Globalizacion', 'Start-ups', 'Empresas influyentes', 'Innovacion', 'Ideas']);
exports.desarrolloPersonal = new booksCategories('Desarrollo Personal', ['Aventura', 'Aprendizaje', 'Cambio de vida']);
exports.neuroCiencia = new booksCategories('Neuro Ciencia', ['Ciencia', 'Ventas', 'Mente humana', 'Neuromarketing', 'Origines de las cosas']);
