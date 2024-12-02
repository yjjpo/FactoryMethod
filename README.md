# FactoryMethod
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

# Tecnologias Usadas:
TypeScript.

# Explicação do Código
1. Interface Arquivo
A interface Arquivo define os métodos abrir() e salvar(), que todas as classes de tipos de arquivos devem implementar. Isso garante que cada tipo de arquivo terá os métodos necessários, com a implementação específica para cada tipo.

2. Classes de Arquivos Concretas
Cada tipo de arquivo (como ArquivoPDF, ArquivoDOCX) implementa a interface Arquivo e define como os métodos abrir() e salvar() devem funcionar para aquele tipo de arquivo.

3. Classe Abstrata EditorArquivo
A classe abstrata EditorArquivo define a estrutura do editor de arquivos. O método gerenciarArquivo() cria um arquivo e chama seus métodos abrir() e salvar(). O método criarArquivo() é abstrato e será implementado nas subclasses.

4. Classes Concretas de Editor
As classes EditorPDF, EditorDOCX, etc., estendem EditorArquivo e implementam o método criarArquivo() para retornar o tipo de arquivo específico. Assim, o sistema pode criar e gerenciar diferentes tipos de arquivos sem precisar se preocupar com a implementação interna de cada um.

5. Testando o Sistema
No arquivo main.ts, as classes de editores são instanciadas, e o método gerenciarArquivo() é chamado para testar se a criação e manipulação dos arquivos funciona corretamente.
