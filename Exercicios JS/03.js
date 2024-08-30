const produto = (n) => n.reduce((a, n) => a * n); 

console.log(produto([1,4,7])); // 1 * 4 * 7 = 28
console.log(produto([5,5,1])); // 5 * 5 * 1 = 25
console.log(produto([1,1,1])); // 1 * 1 * 1 = 1