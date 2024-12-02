"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorArquivo = void 0;
var EditorArquivo = /** @class */ (function () {
    function EditorArquivo() {
    }
    EditorArquivo.prototype.gerenciarArquivo = function () {
        var arquivo = this.criarArquivo();
        arquivo.abrir();
        arquivo.salvar();
    };
    return EditorArquivo;
}());
exports.EditorArquivo = EditorArquivo;
