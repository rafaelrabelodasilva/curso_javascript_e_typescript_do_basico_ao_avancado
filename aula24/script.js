
/*
Entre 0 - 11 -> Bom dia
Entre 12 - 17 -> Boa tarde
Entre 18 - 23 -> Boa noite

if -> Pode ser usado sozinho
else -> Sempre que utilizado else preciso de um if antes
Posso ter vários else ifs na checagem
Apenas posso ter um else sozinho na checagem
*/

const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite')
} else {
    console.log('Olá')
}