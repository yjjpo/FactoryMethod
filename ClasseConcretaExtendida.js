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
exports.EditorTXT = exports.EditorXLSX = exports.EditorDOCX = exports.EditorPDF = void 0;
var ClasseAbstrata_1 = require("./ClasseAbstrata");
var ClassesConcretas_1 = require("./ClassesConcretas");
var EditorPDF = /** @class */ (function (_super) {
    __extends(EditorPDF, _super);
    function EditorPDF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorPDF.prototype.criarArquivo = function () {
        return new ClassesConcretas_1.ArquivoPDF();
    };
    return EditorPDF;
}(ClasseAbstrata_1.EditorArquivo));
exports.EditorPDF = EditorPDF;
var EditorDOCX = /** @class */ (function (_super) {
    __extends(EditorDOCX, _super);
    function EditorDOCX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorDOCX.prototype.criarArquivo = function () {
        return new ClassesConcretas_1.ArquivoDOCX();
    };
    return EditorDOCX;
}(ClasseAbstrata_1.EditorArquivo));
exports.EditorDOCX = EditorDOCX;
var EditorXLSX = /** @class */ (function (_super) {
    __extends(EditorXLSX, _super);
    function EditorXLSX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorXLSX.prototype.criarArquivo = function () {
        return new ClassesConcretas_1.ArquivoXLSX();
    };
    return EditorXLSX;
}(ClasseAbstrata_1.EditorArquivo));
exports.EditorXLSX = EditorXLSX;
var EditorTXT = /** @class */ (function (_super) {
    __extends(EditorTXT, _super);
    function EditorTXT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorTXT.prototype.criarArquivo = function () {
        return new ClassesConcretas_1.ArquivoTXT();
    };
    return EditorTXT;
}(ClasseAbstrata_1.EditorArquivo));
exports.EditorTXT = EditorTXT;
