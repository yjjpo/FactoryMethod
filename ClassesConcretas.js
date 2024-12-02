"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArquivoTXT = exports.ArquivoXLSX = exports.ArquivoDOCX = exports.ArquivoPDF = void 0;
var ArquivoPDF = /** @class */ (function () {
    function ArquivoPDF() {
    }
    ArquivoPDF.prototype.abrir = function () {
        console.log("Abrindo arquivo PDF...");
    };
    ArquivoPDF.prototype.salvar = function () {
        console.log("Salvando arquivo PDF...");
    };
    return ArquivoPDF;
}());
exports.ArquivoPDF = ArquivoPDF;
var ArquivoDOCX = /** @class */ (function () {
    function ArquivoDOCX() {
    }
    ArquivoDOCX.prototype.abrir = function () {
        console.log("Abrindo arquivo DOCX...");
    };
    ArquivoDOCX.prototype.salvar = function () {
        console.log("Salvando arquivo DOCX...");
    };
    return ArquivoDOCX;
}());
exports.ArquivoDOCX = ArquivoDOCX;
var ArquivoXLSX = /** @class */ (function () {
    function ArquivoXLSX() {
    }
    ArquivoXLSX.prototype.abrir = function () {
        console.log("Abrindo arquivo XLSX...");
    };
    ArquivoXLSX.prototype.salvar = function () {
        console.log("Salvando arquivo XLSX...");
    };
    return ArquivoXLSX;
}());
exports.ArquivoXLSX = ArquivoXLSX;
var ArquivoTXT = /** @class */ (function () {
    function ArquivoTXT() {
    }
    ArquivoTXT.prototype.abrir = function () {
        console.log("Abrindo arquivo TXT...");
    };
    ArquivoTXT.prototype.salvar = function () {
        console.log("Salvando arquivo TXT...");
    };
    return ArquivoTXT;
}());
exports.ArquivoTXT = ArquivoTXT;
