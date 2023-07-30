let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

// const varAB = varB
// const varBC = varC
// const varCA = varA

[varA, varB, varC] = [varB, varC, varA];

// console.log(varAB, varBC, varCA)
console.log(varA, varB, varC);