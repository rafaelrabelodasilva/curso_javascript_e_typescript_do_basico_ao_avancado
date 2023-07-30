/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY
false
0
'' "" ``
null undefined
NaN
*/

const a = 0;
const b = null;
const c = 'false'; //verdadeiro
const d = false;
const e = NaN;
//Ou vai retornar o último valor falso

console.log(a || b || c || d || e);