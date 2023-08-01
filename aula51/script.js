//Return
//Retorna um valor
//Termina a função

function soma(a, b) {
    return a + b;
}

document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});

function criaPessoa(nome, sobrenome) {
    //Quando é um retorno desta forma podemos abreviar
    //return { nome: nome, sobrenome: sobrenome };
    return { nome, sobrenome };
}

const p1 = criaPessoa('Rafael', 'Rabelo');


