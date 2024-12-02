import { Arquivo } from './Arquivo';

class ArquivoPDF implements Arquivo {
    abrir(): void {
        console.log("Abrindo arquivo PDF...");
    }

    salvar(): void {
        console.log("Salvando arquivo PDF...");
    }
}

class ArquivoDOCX implements Arquivo {
    abrir(): void {
        console.log("Abrindo arquivo DOCX...");
    }

    salvar(): void {
        console.log("Salvando arquivo DOCX...");
    }
}

class ArquivoXLSX implements Arquivo {
    abrir(): void {
        console.log("Abrindo arquivo XLSX...");
    }

    salvar(): void {
        console.log("Salvando arquivo XLSX...");
    }
}

class ArquivoTXT implements Arquivo {
    abrir(): void {
        console.log("Abrindo arquivo TXT...");
    }

    salvar(): void {
        console.log("Salvando arquivo TXT...");
    }
}
