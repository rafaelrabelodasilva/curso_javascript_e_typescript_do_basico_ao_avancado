const alunos = ['Luiz', 'Maria', 'João']
// console.log(alunos[0])
// console.log(alunos.length)

// alunos[0] = 'Rafael'
// alunos[3] = 'Eduardo'
// console.log(alunos)

// alunos[alunos.length] = 'José'
// alunos[alunos.length] = 'Simão'
// alunos[alunos.length] = 'Rúbua'
// console.log(alunos)

// //Adiciona no final
// alunos.push('Lucas')
// console.log(alunos)

// //Adicionar no começo
// alunos.unshift('Mateus')
// console.log(alunos)

// //Remove do final do array
// const removido = alunos.pop()
// console.log(alunos, removido)

//Remove o primeiro elemento do array
// const removido = alunos.shift()
// console.log(alunos, removido)

//Remove um elemento do array deixando o índice vazio
// delete alunos[1]
// console.log(alunos)

//
alunos.push('Luiza', 'Eduardo')
// console.log(alunos.slice(0, 3))
// console.log(alunos.slice(0, -1))

console.log(typeof alunos) //Object
console.log(alunos instanceof Array) //True