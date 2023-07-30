// O índice começa com o 0

// let umaString = "Um \"texto\"";
let umaString = 'O rato roeu a roupa do rei de roma.'

console.log(umaString[4])

console.log(umaString.charAt(4))

console.log(umaString.concat(' em', ' um', ' lindo dia.'))

console.log(umaString.indexOf('texto'))

console.log(umaString.lastIndexOf('o'))
console.log(umaString.lastIndexOf('m', 3))

console.log(umaString.replace('Um', 'Outro'))

console.log(umaString.length)
console.log(umaString.slice(2, 6))

console.log(umaString.split('r'))
console.log(umaString.split('', 3))

console.log(umaString.toUpperCase())
console.log(umaString.toLocaleLowerCase())