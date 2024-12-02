class Periodico extends Acervo{

    constructor(nome, editora, ano, edicao, isbn, artigos){
        super(nome, editora, ano);
        this.edicao = edicao;
        this.isbn = isbn;
        this.artigos = artigos;
    }
}