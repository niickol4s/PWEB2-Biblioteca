class Biblioteca {
    constructor(id, nome, endereco) {
        this._id = id;
        this._nome = nome;
        this._endereco = endereco;
    }

    setId(id) {
        this._id = id;
    }

    getId() {
        return this._id;
    }

    setNome(nome) {
        this._nome = nome;
    }

    getNome() {
        return this._nome;
    }

    setEndereco(endereco) {
        this._endereco = endereco;
    }

    getEndereco() {
        return this._endereco;
    }
}