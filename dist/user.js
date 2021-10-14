"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var user = /** @class */ (function () {
    function user(name, pleasures) {
        this._name = name;
        this.pleasures = pleasures;
    }
    user.prototype.userPleasures = function (pleasures) {
        this.pleasures.push(pleasures);
        console.log("A el usuario: " + this._name + ", le gusta " + pleasures + " ");
    };
    return user;
}());
exports.user = user;
