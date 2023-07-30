
const nomes = [
    'Luiz', 'Otávio', 'Henrique'
]

// **For clássico -> Geralmente com iteráveis (array ou strings)
// for (let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i]);
// }

// **For in -> Retorna o índice ou chave (string, array  ou objetos)
// for (let i in nomes) {
//     console.log(nomes[i]);
// }

// **For of -> Retorna o valor em si (iteráveis, arrays ou strings)
for (let valor of nomes) {
    console.log(valor);
}