const Acervo = require('./acervo');
const Orientador = require('./orientador');

class TrabalhoAcademico extends Acervo {
    constructor(autoria, dataPublicacao, categoria, instituicao, tipo, orientador) {
        super(autoria, dataPublicacao, categoria);

        if (!(orientador instanceof Orientador)) {
            throw new Error("O orientador deve ser uma instância da classe Orientador.");
        }

        this._instituicao = instituicao;
        this._tipo = tipo;
        this._orientador = orientador;
    }

    getInstituicao() {
        return this._instituicao;
    }

    getTipo() {
        return this._tipo;
    }

    getOrientador() {
        return this._orientador.toString();
    }

    setInstituicao(instituicao) {
        this._instituicao = instituicao;
    }

    setTipo(tipo) {
        this._tipo = tipo;
    }

    setOrientador(orientador) {
        if (!(orientador instanceof Orientador)) {
            throw new Error("O orientador deve ser uma instância da classe Orientador.");
        }
        this._orientador = orientador;
    }
}

module.exports = TrabalhoAcademico;
