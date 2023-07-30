const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoesData = {
    dateStyle: 'full'
};
const opcoesHora = {
    timeStyle: 'short'
};

const dataFormatada = data.toLocaleDateString('pt-BR', opcoesData);
const horaFormatada = data.toLocaleTimeString('pt-BR', opcoesHora);

h1.querySelector('.data').innerHTML = dataFormatada + ', ' + horaFormatada;