// For in -> Lê os indices ou chaves do objeto

// const frutas = ['Maça', 'Pêra', 'Uva'];

// for (let index in frutas) {
//     console.log(frutas[index])
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}