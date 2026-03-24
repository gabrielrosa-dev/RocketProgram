// Desafio 2: Recriando Métodos de Array

/**
 * Recria o método map() nativo.
 * O map() cria um novo array com os resultados da chamada de uma função para cada elemento do array.
 */
Array.prototype.meuMap = function(callback) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    novoArray.push(callback(this[i], i, this));
  }
  return novoArray;
};

/**
 * Recria o método filter() nativo.
 * O filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
 */
Array.prototype.meuFilter = function(callback) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      novoArray.push(this[i]);
    }
  }
  return novoArray;
};

/**
 * Recria o método reduce() nativo.
 * O reduce() executa uma função reducer (fornecida por você) para cada elemento do array, 
 * resultando num único valor de retorno.
 */
Array.prototype.meuReduce = function(callback, valorInicial) {
  let acumulador = valorInicial;
  let startIndex = 0;

  if (valorInicial === undefined) {
    if (this.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    acumulador = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};

/**
 * Recria o método forEach() nativo (Bônus).
 * O forEach() executa uma dada função em cada elemento de um array.
 */
Array.prototype.meuForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const numeros = [1, 2, 3, 4, 5];

console.log('--- TESTANDO meuMap ---');
const dobrados = numeros.meuMap(n => n * 2);
console.log('Dobrados:', dobrados); // Expected: [2, 4, 6, 8, 10]
console.log('Nativo correspondente:', numeros.map(n => n * 2));

console.log('\n--- TESTANDO meuFilter ---');
const pares = numeros.meuFilter(n => n % 2 === 0);
console.log('Pares:', pares); // Expected: [2, 4]
console.log('Nativo correspondente:', numeros.filter(n => n % 2 === 0));

console.log('\n--- TESTANDO meuReduce ---');
const soma = numeros.meuReduce((acc, n) => acc + n, 0);
console.log('Soma:', soma); // Expected: 15
console.log('Nativo correspondente:', numeros.reduce((acc, n) => acc + n, 0));

const somaSemInicial = [10, 20, 30].meuReduce((acc, n) => acc + n);
console.log('Soma sem valor inicial:', somaSemInicial); // Expected: 60

console.log('\n--- TESTANDO meuForEach ---');
numeros.meuForEach((n, i) => {
  console.log(`Posição ${i}: ${n}`);
});
