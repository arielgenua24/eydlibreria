"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ninaObject = void 0;
var ninaObject = /** @class */ (function () {
    function ninaObject(id, nombre, patas) {
        this.id = id;
        this.nombre = nombre;
        this.patas = patas;
    }
    ninaObject.prototype.waowao = function (parametro) {
        this.patas.push(parametro);
        console.log(this.nombre + " Ahora tiene " + parametro);
    };
    return ninaObject;
}());
exports.ninaObject = ninaObject;
