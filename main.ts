import { EditorPDF, EditorDOCX, EditorXLSX, EditorTXT } from './ClasseConcretaExtendida';

function testarEditor() {
    const editores = [
        new EditorPDF(),
        new EditorDOCX(),
        new EditorXLSX(),
        new EditorTXT()
    ];

    editores.forEach(editor => {
        console.log("Gerenciando arquivo:");
        editor.gerenciarArquivo();
        console.log("---------------------------");
    });
}

testarEditor();
