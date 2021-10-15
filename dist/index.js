"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var event = function (param) {
    var userBase = new user_1.user('ariel', ['none']);
    userBase.newUserPleasures(param);
};
event('emprendimiento');
