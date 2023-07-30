/*
*Valores primitivos e valores por referência

*Primitivos (imutáveis) -> string, number, boolean, undefined, null (bigint, symbol)
*Valores copiados

*Referência (mutável) -> array, object, function
*Passados por referência
*/

//Exemplo de valor primitivo imutáveis
// let nome = 'Luiz';
// nome[0] = 'R';
// console.log(nome[0], nome)

//Exemplo de valor por referência
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}
const b = a //Passado a constante a como referência
a.nome = 'João'
console.log(b) //O resultado vai ser 'João'
