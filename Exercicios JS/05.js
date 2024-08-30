function exercicio05(array) {
    let cont = 0;
    for (let i = 0; i < array.length; i++) {
        cont += array[i].length;
    }
    return cont;
}
console.log(exercicio05(["ola", "mundo"]));   // 8
console.log(exercicio05(["lucas", "lindo"])); // 10
console.log(exercicio05(["santos", "maior", "do", "brasil"])); // 19
