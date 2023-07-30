/*
Escreva uma função chamada ePaisagem que recebe dois argumentos
Largura e altura de uma imagem (number)
Retorne true se a imgaem estiver no modo paisagem
*/

const ePaisagem = (largura, altura) => {
    return largura > altura;
}

console.log(ePaisagem(1200, 900))