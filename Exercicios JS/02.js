
  console.log(éprimo(7)); // 7 é primo entao retorna "true"
  console.log(éprimo(83)); // 83 é primo entao retorna "true"
  console.log(éprimo(10)); // 10 nao é primo entao retorna "false"
  console.log(éprimo(30)); // 30 nao é primo entao retorna "false"
  
  function éprimo(n1) {

    // verifica se o número é divisível por qualquer valor de 2 
    for (let i = 2; i <= Math.sqrt(n1); i++) {
      if (n1 % i === 0) {
        return false; // se for ele nao é primo
      }
    }

  // um numero menor que 2 nao é primo
    if (n1 < 2) {
      return false;
    }
    return true; // caso nao tenha divisores é primo
  }
  

  
  