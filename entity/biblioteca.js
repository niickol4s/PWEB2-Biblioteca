class Biblioteca {
    constructor(id,nome, endereco){
        this._id = id;
        this._nome = nome;
        this._endereco = endereco;
    }

    getId() {
        return this._id;
    }

    getNome() {
        return this._nome;
    }

    getEndereco() {
        return this._endereco
    }

    setId(id) {
        this._id = id;
    }

    setNome(nome) {
        this._nome = nome;
    }

    setEndereco(endereco) {
        this._endereco = endereco;
    }
}

module.exports = Biblioteca;