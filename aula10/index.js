/* 
* Dados primitivos 
* String, Number, Undefined, Null, Boolean e Symbol
*/
const nome = 'Luiz'; //String
const nome1 = "Luiz"; //String
const nome2 = `Luiz`; //String

const num1 = 10; //Number
const num2 = 10.52; //Number

let nomeAluno; // undefined = não aponta para local nenhuma na memória

const sobrenomeAluno = null; //Nulo = não aponta para local nenhuma na memória

const boolean = true; //Boolean = true, false (lógico)

console.log(typeof boolean)

const a = [1, 2];
const b = a;

console.log(a, b)