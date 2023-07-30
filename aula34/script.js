// Para o for clássico vamos precisar de 3 coisas
// *Criar uma variável
// *Criar uma condição que irá parar esse laço repetitivo
// *Preciamos incrementar ou decrementar a variável de controle (i)

// i é de index
// for (let i = 0; i <= 5; i++) {
//     console.log(`Linha ${i}`);
// }

// for (let i = 0; i <= 10; i++) {
//     const par = i % 2 === 0 ? 'par' : 'ímpar';
//     console.log(i, par)
// }

const frutas = [
    'Maça', 'Uva', 'Pêra', 'Mamão', 'Morango', 'Abacaxi', 'Pêssego'
]

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}