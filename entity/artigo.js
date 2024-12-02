const Acervo = require('./acervo');

class Artigo extends Acervo {
    constructor(autoria, dataPublicacao, categoria, volume, edicao) {
        super(autoria, dataPublicacao, categoria);
        this._volume = volume;
        this._edicao = edicao;
    }

    // Gets
    getVolume() {
        return this._volume;
    }

    getEdicao() {
        return this._edicao;
    }

    // Sets
    setVolume(volume) {
        this._volume = volume;
    }

    setEdicao(edicao) {
        this._edicao = edicao;
    }
}

module.exports = Artigo;
