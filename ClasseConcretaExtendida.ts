import { Criador } from 'Criador';
import { Arquivo } from 'Arquivo';

class EditorPDF extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoPDF();
    }
}

class EditorDOCX extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoDOCX();
    }
}

class EditorXLSX extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoXLSX();
    }
}

class EditorTXT extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoTXT();
    }
}