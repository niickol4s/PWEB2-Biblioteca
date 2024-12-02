const Artigo = require('./entity/artigo');

const artigo = new Artigo(
    'Maria Clara',
    '2023-12-01',
    'Ciência',
    12, // Volume
    3 // Edição
);

console.log("_____________________________")
console.log(`Autor: ${artigo.getAutoria()}`);
console.log(`Data de Publicação: ${artigo.getDataPublicacao()}`);
console.log(`Categoria: ${artigo.getCategoria()}`);
console.log(`Volume: ${artigo.getVolume()}`);
console.log(`Edição: ${artigo.getEdicao()}`);
console.log("_____________________________")

const Orientador = require('./entity/orientador');
const TrabalhoAcademico = require('./entity/trabalhoAcademico');

const orientador = new Orientador('Dr. João', 'Doutorado em Computação', 'Inteligência Artificial');

const trabalho = new TrabalhoAcademico(
    'Maria Clara',
    '2023-12-01',
    'Tese',
    'Universidade XYZ',
    'Doutorado',
    orientador
);

console.log("_____________________________")
console.log(`Autor: ${trabalho.getAutoria()}`);
console.log(`Data de Publicação: ${trabalho.getDataPublicacao()}`);
console.log(`Categoria: ${trabalho.getCategoria()}`);
console.log(`Instituição: ${trabalho.getInstituicao()}`);
console.log(`Tipo: ${trabalho.getTipo()}`);
console.log(`Orientador: ${trabalho.getOrientador()}`);

trabalho.setInstituicao('Universidade ABC');
console.log(`Nova Instituição: ${trabalho.getInstituicao()}`);
console.log("_____________________________")

