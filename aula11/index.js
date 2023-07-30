/* 
* Operadores aritméticos:
* + = Adição ou concatenação
* - = Subtração
* * = Multiplicação
* / = Divisão
* ** = potenciação
* % = resto da divisão
* Precedência dos operadores aritméticos:
* ()
* **
* * / %
* + -
* Operador de incremento e decremento
* ++ = incremento
* -- = decremento
* Operadores de atribuição
* +=, -=, *=
* Conversão de string para numero
* parseInt() = para inteiro
* parseFloat() = para casas decimais
* Number() = é feito automático 
*/

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3);

let contador = 1;
contador++;
console.log(contador);

let contador2 = 0;
contador2 += 2; // É a mesma coisa que contador = contador + 2
contador2 *= 2;

console.log(contador2);

const num5 = 10;
const num6 = Number('5');
console.log(num5 + num6);

