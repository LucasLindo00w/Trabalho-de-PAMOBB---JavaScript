console.log(reversonumero(12345)); 
console.log(reversonumero(40028922));  

function reversonumero(n1) {
    let numeroString = n1.toString();
    let numeroReverso = numeroString.split('').reverse().join('');
    return parseInt(numeroReverso);
}


