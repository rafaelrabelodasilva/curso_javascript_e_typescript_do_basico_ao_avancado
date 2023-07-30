//  Objeto
// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// console.log(pessoa1.nome)
// console.log(pessoa1.sobrenome)

// //Função que cria um objeto
// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome:nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
// console.log(pessoa1.nome)

// // Melhorando a função acima
//Função que cria um objeto
// function criaPessoa (nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
// console.log(pessoa1.nome)

//Função dentro de um objeto
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} que tem ${this.idade} está falando oi...`)
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();