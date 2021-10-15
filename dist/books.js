"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var booksCategories_1 = require("./booksCategories");
var books = /** @class */ (function (_super) {
    __extends(books, _super);
    function books(categoryName, categoryTheme, bookName, author, description) {
        var _this = _super.call(this, categoryName, categoryTheme) || this;
        _this.bookName = bookName;
        _this.author = author;
        _this.description = description;
        return _this;
    }
    return books;
}(booksCategories_1.booksCategories));
var habitos_para_ser_millonario = new books(booksCategories_1.desarrolloPersonal.categoryName, booksCategories_1.desarrolloPersonal.categoryTheme, 'Habitos para ser millonario', 'Brian Tracy', '¿Por qué algunas personas son más exitosas que otras? El 95 % de todo lo que piensas, sientes, haces y logras es resultado del hábito. Simplificando y organizando las ideas, Brian Tracy, experto en temas de liderazgo, estrategia, creatividad y psicología del éxito, ha escrito magistralmente un libro de obligada lectura sobre hábitos que asegura completamente el éxito personal.');
console.log(habitos_para_ser_millonario);
