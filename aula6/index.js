/* 
* Não podemos criar variáveis com palavras reservadas
* Variáveis precisam ter nomes significativos
* Não pode começar o nome de uma variável com um número
* Não podem conter espaços ou traços
* Utilizamos camelCase
* É case sensitive
* Não podemos redeclarar variáveis com let
* Não utilize var, utilize let
*/


let nome = 'João';

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome,'conheceu Maria');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo');

let nome2; //Declarou a variável
nome2 = 'Qualquer valor'; //Inicializado a variável
console.log(nome2)
nome2 = 'Rafael'
console.log(nome2)