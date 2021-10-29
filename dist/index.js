"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
let event = (param) => {
    const userBase = new user_1.user('ariel', ['none']);
    userBase.newUserPleasures(param);
};
event('emprendimiento');
