const nome = 'Rafael'
const sobrenome = 'Rabelo'
const idade = 27
const peso = 90
const alturaEmM = 1.64
let indiceMassaCorporal
let anoNascimento

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade

// console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
// console.log('tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal)
// console.log(nome, sobrenome, 'nasceu em', anoNascimento)

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)