"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClasseConcretaExtendida_1 = require("./ClasseConcretaExtendida");
function testarEditor() {
    var editores = [
        new ClasseConcretaExtendida_1.EditorPDF(),
        new ClasseConcretaExtendida_1.EditorDOCX(),
        new ClasseConcretaExtendida_1.EditorXLSX(),
        new ClasseConcretaExtendida_1.EditorTXT()
    ];
    editores.forEach(function (editor) {
        console.log("Gerenciando arquivo:");
        editor.gerenciarArquivo();
        console.log("---------------------------");
    });
}
testarEditor();
