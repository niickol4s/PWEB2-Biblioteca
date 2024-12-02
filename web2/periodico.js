class Periodico extends Acervo{

    constructor(nome, editora, ano, edicao, isbn, artigos){
        super(nome, editora, ano);
        this.edicao = edicao;
        this.isbn = isbn;
        this.artigos = artigos;
    }

    setNome(nome){
        this.nome = nome;
    }

    setEditora(editora){
        this.editora = editora;
    }

    setAno(ano){
        this.ano = ano;
    }

    setEdicao(edicao){
        this.edicao = edicao;
    }

    setIsbn(isbn){
        this.isbn = isbn;
    }

    setArtigos(artigos){
        this.artigos = artigos;
    }


    getNome(){
        return this.nome;
    }

    getEditora(){
        return this.editora;
    }

    getAno(){
        return this.ano;
    }

    getEdicao(){
        return this.edicao;
    }

    getIsbn(){
        return this.isbn;
    }

    getArtigos(){
        return this.artigos;
    }

    }
