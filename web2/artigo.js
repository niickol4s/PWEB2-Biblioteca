class Artigo extends Acervo{
    constructor(id, titulo, autores, editora, anoPublicacao, referencias){
        super(id, titulo, autores, editora, anoPublicacao);
        this.referencias = referencias;
    }
}