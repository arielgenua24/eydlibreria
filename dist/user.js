"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
class user {
    constructor(name, pleasures) {
        this._name = name;
        this.pleasures = pleasures;
    }
    newUserPleasures(pleasures) {
        this.pleasures.push(pleasures);
        console.log(`A el usuario: ${this._name}, le gusta ${pleasures} `);
    }
}
exports.user = user;
