const Genero = Object.freeze({
    FICCAO: "Ficção",
    NAO_FICCAO: "Não-ficção",
    FANTASIA: "Fantasia",
    ROMANCE: "Romance",
    TERROR: "Terror",
    BIOGRAFIA: "Biografia",
});

const Acervo = require('./acervo');

class ObraLiteraria extends Acervo {
    constructor(autoria, dataPublicacao, categoria, editora, isbn, numeroPaginas, genero) {
        super(autoria, dataPublicacao, categoria);
        this._editora = editora;
        this._isbn = isbn;
        this._numeroPaginas = numeroPaginas;

        if (!Object.values(Genero).includes(genero)) {
            throw new Error(`Gênero inválido: ${genero}`);
        }
        this._genero = genero;
    }

    //gets

    getEditora() {
        return this._editora;
    }

    getISBN() {
        return this._isbn;
    }

    getNumeroPaginas() {
        return this._numeroPaginas;
    }

    getGenero() {
        return this._genero;
    }

    //sets

    setEditoras(editora) {
        this._editora = editora;
    }

    setISBN(isbn) {
        this._isbn = isbn;
    }

    setNumeroPaginas(numeroPaginas) {
        this._numeroPaginas = numeroPaginas;
    }

    setGenero(genero) {
        this._genero = genero;
    }
}

module.exports = ObraLiteraria;