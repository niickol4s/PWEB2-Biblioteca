class Acervo {
    constructor(autoria, dataPublicacao, categoria) {
        this._autoria = autoria;
        this._dataPublicacao = dataPublicacao;
        this._categoria = categoria;
    }

    getAutoria() {
        return this._autoria;
    }

    getDataPublicacao() {
        return this._dataPublicacao;
    }

    getCategoria() {
        return this._categoria;
    }

    setAutoria(autoria) {
        this._autoria = autoria;
    }

    setDataPublicacao(dataPublicacao) {
        this._dataPublicacao = dataPublicacao;
    }

    setCategoria(categoria) {
        this._categoria = categoria;
    }
}

module.exports = Acervo;