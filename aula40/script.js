//Continue -> continua para a próxima iteração
//Break -> Sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o núimero 2');
        continue; //Quando a engine encontrar a palavra continue será pulado para a próxima iteração do laço
    }
    //Quando a engine encontrar a palavra break então vai parar o laço naquele momento, não terá próxima iteração
    if (numero === 7) {
        console.log('7 encontrado, saindo..')
        break;
    }
    console.log(numero);
}