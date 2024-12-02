class Artigo extends Acervo{
    constructor(id, titulo, autores, editora, anoPublicacao, referencias){
        super(id, titulo, autores, editora, anoPublicacao);
        this.referencias = referencias;
    }

    setId(id){
        this.id = id;
    }

    getId(){
        return this.id;
    }

    setTitulo(titulo){
        this.titulo = titulo;
    }

    getTitulo(){
        return this.titulo;
    }
    
    setAutores(autores){
        this.autores = autores;
    }

    getAutores(){
        return this.autores;
    }
    
    setEditora(editora){
        this.editora = editora;
    }

    getEditora(){
        return this.editora;
    }
    
    setAnoPublicacao(anoPublicacao){
        this.anoPublicacao = anoPublicacao;
    }

    getAnoPublicacao(){
        return this.anoPublicacao;
    }

    setReferencias(referencias){
        this.referencias = referencias;
    }

    getReferencias(){
        return this.referencias;
    }

}