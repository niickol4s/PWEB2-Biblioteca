class Orientador {
    constructor(nome, formacao, especializacao) {
        this._nome = nome;
        this._formacao = formacao;
        this._especializacao = especializacao;
    }

    getNome() {
        return this._nome;
    }

    getFormacao() {
        return this._formacao;
    }

    getEspecializacao() {
        return this._especializacao;
    }

    setNome(nome) {
        this._nome = nome;
    }

    setFormacao(formacao) {
        this._formacao = formacao;
    }

    setEspecializacao(especializacao) {
        this._especializacao = especializacao;
    }

    toString() {
        return `Orientador: ${this._nome}, Formação: ${this._formacao}, Especialização: ${this._especializacao}`;
    }
}

module.exports = Orientador;
