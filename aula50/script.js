//Parâmetros da função 
//Se enviado o parâmetro e não tiver parâmetro 
//na função então ele será colocado diretamente dentro da variável
//arguments do JS como no caso abaixo
//Arguments suporta todos os argumentos enviados na função porém ele
//functiona apenas se a função estiver declarada como "function XXX(){"
//arguments não funciona em arrow functions
//Argumento é o que está sendo enviado para a função

// function funcao() {
//     console.log('Oie', arguments[0]);
// }
// funcao('Valor');

function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);

//Como colocar valor padrão no parâmetro da função
function funcao2(a, b = 2, c = 4) {
    console.log(a + b + c);
}

funcao2(2, 10);
//Para pular o b colocamos undefined
funcao2(2, undefined, 20);

//Desestruturação
// function funcao3({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade);
// }

// funcao3({ nome: 'Rafael', sobrenome: 'Rabelo', idade: 26});

//Desestruturação
function funcao3({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Rafael', sobrenome: 'Rabelo', idade: 26};

funcao3(obj);

//Usando array
function funcao4([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao4(['Rafael Rabelo', 'da Silva', 26])

//Rest operator
//in é index
//of é o valor
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('-', 0, 20, 30, 40, 50)

//Rest operator em arrow function
const conta2 = (...args) => {
    console.log(args);
}

conta2('+', 10, 20, 30, 40, 50)