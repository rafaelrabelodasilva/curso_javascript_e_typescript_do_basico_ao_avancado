// Declaração de função (Function hoisting)
//F.H significa que a função pode ser chamada antes da função ou depois

//Antes
// falaOi();

function falaOi() {
    console.log('Oie');
}

//Depois
// falaOi();

//First-class objects (objetos de primeira classe)
//Function express
//Pegar uma variável e jogar uma função dentro dela e depois usar a variável como a função
const souUmDado = function() {
    console.log('Sou um dado.');
}
souUmDado();

function exececutaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}

exececutaFuncao(souUmdado);

//Arrow function ES6
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

//Dentro do objeto podemos ter uma função
const obj = {
    falar: function() {
        console.log('Estou falando...');
    },
    falar2() {
        console.log('Outra maneira de adicionar a função em um objeto');
    }
}

obj.falar();
obj.falar2();