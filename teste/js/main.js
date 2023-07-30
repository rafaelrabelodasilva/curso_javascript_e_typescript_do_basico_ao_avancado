const usuario = {
    nome: 'Rafael',
    sobrenome: 'Rabelo',
    idade: '27',
    nascimento: '1996-26-08',
    sexo: 'Masculino',
    escolaridade: 'Superior completo'
}

const container = document.querySelector('.container');
const div = document.createElement('div');
let p = document.createElement('p')
p.innerHTML = usuario.nome
p.innerHTML = usuario.sobrenome
div.appendChild(p)

container.appendChild(div)