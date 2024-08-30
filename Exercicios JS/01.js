const palavras = ['Lucas gato', //entradas
    'Antonio chave', 
    'Eduardo junin', 
    'Joao damiano', 
    'André ruim', 
    'Arthur souza', 
    'Valesca popozuda', 
    'Arlindo pinto'];
const total = palavracomA(palavras);
console.log(total);

function palavracomA(array) {
    let total = [];
    for (let i = 0; 
        i < array.length; 
        i++) { //saída
        if (array[i][0].toUpperCase() === 'A') {
            total.push(array[i]);
        }
    }
    return total; //mostra o resultado
}



