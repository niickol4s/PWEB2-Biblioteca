class Autor{
    constructor(nome, nacionalidade,cpf){
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this._cpf = cpf;
    
}

    setNome(nome){
        this.nome = nome;
    }

    getNome(){
        return this.nome;
    }

    setNacionalidade(nacionalidade){
        this.nacionalidade = nacionalidade;
    }

    getNacionalidade(){
        return this.nacionalidade;
    }
    
    setCPF(cpf){
        this._cpf = cpf;
    }

    getCPF(){
        return this._cpf;
    }
}