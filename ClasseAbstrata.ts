import { Arquivo } from './Arquivo';

abstract class EditorArquivo {
    abstract criarArquivo(): Arquivo;

    gerenciarArquivo(): void {
        const arquivo = this.criarArquivo();
        arquivo.abrir();
        arquivo.salvar();
    }
}
export { EditorArquivo };
