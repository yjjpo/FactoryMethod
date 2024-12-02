# Factory Method
Este sistema simula a abertura e o salvamento de arquivos de diferentes tipos (PDF, DOCX, XLSX, TXT) aplicando o padrão de projeto Factory Method. O padrão é utilizado para delegar a criação dos objetos de cada tipo de arquivo a classes especializadas, mantendo a flexibilidade e a escalabilidade do código.

# Componentes principais:
Interface Arquivo:
Define os métodos abrir() e salvar(), que serão implementados por cada tipo de arquivo.

Classes Concretas de Arquivo (ArquivoPDF, ArquivoDOCX, etc.):
Implementam a interface Arquivo com a lógica específica para abrir e salvar os diferentes tipos de arquivos.

Classe Abstrata EditorArquivo:
Define o método abstrato criarArquivo(), que será implementado pelas classes concretas de editores.
O método gerenciarArquivo() chama os métodos abrir() e salvar() do arquivo.

Classes Concretas de Editor (EditorPDF, EditorDOCX, etc.):
Implementam a classe abstrata EditorArquivo e definem o método criarArquivo() para criar o tipo de arquivo específico.

Arquivo Principal (main.ts):
Testa o sistema criando editores e manipulando os arquivos de forma automática.

# Como Rodar
Basta digitar no TERMINAL do CodeSpace: node main.js

# Tecnologias Usadas:
TypeScript para implementação das classes e interfaces.

Node.js para execução do código.
