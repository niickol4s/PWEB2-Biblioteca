class Acervo {
    constructor(categoria, autoria, data_publicacao) {
        this._categoria = categoria;
        this._autoria = autoria;
        this._data_publicacao = data_publicacao;
    }
    
    setCategoria(categoria) {
        this._categoria = categoria;
    }

    getCategoria() {
        return this._categoria;
    }

    setAutoria(autoria) {
        this._autoria = autoria;
    }

    getAautoria() {
        return this._autoria;
    }
    
    setDataPublicacao(data_publicacao) {
        this._data_publicacao = data_publicacao;
    }

    getDataPublicacao() {
        return this._data_publicacao;
    }
    
}