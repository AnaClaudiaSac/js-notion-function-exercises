// Exercício 1: Criar uma função que recebe um callback e o executa
// Crie uma função chamada `executeCallback` que recebe uma função como parâmetro (callback) e a executa dentro dela.

// Teste chamando `executeCallback` passando uma função que exibe `"Callback executado!"` no console.
// 1 - Crie uma função chamada `executeCallback` que recebe uma função como parâmetro (callback) e a executa dentro dela.

// Teste chamando `executeCallback` passando uma função que exibe `"Callback executado!"` no console.

function executeCallback(callback) {
  console.log("Antes de executar a callBack");

  callback();

  console.log("Depois de excutar a callback");
}

executeCallback(() => {
  console.log("Callback executado!");
});

// Output:
// Callback executado!

// Output teste:
// Antes de executar a callBack
// Callback executado!
// Depois de excutar a callback
//

//---------------------------------------------------------------------------
// Exercício 2: Criar uma função que recebe um número e um callback**

// Crie uma função chamada `processNumber` que recebe um **número** e um **callback**.

// O callback deve receber esse número como parâmetro e exibir `"O número é: [número]"`.

function processNumber(number, callBack) {
  callBack(number);
}

processNumber(8, (number) => {
  console.log("O numero é:", number);
});

// Output:
// O numero é: 8

//---------------------------------------------------------------------------

// Exercício 3: Criar uma função que aplica um callback a dois números**

// Crie uma função chamada `applyOperation` que recebe **dois números** e um **callback**.

// O callback deve ser chamado passando os dois números como argumento.

// Teste chamando `applyOperation` passando um callback que soma os dois números.
function applyOperation(num1, num2, callBack) {
  return callBack(num1, num2);
}

function sum(num1, num2) {
  return num1 + num2;
}

const result = applyOperation(8, 3, sum);
console.log(result);

// Output:
// 11

//---------------------------------------------------------------------------
//Exercício 64: Criar uma função que processa um array com callback**

// Crie uma função chamada `processArray` que recebe um **array** e um **callback**.

// A função deve chamar o callback para cada elemento do array.

function processArray(array, callback) {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    resultArray.push(callback(array[i]));
  }
  return resultArray;
}

const numbers = [1, 2, 3, 4, 5, 7, 8];

const processedNumbers = processArray(numbers, (number) => {
  console.log(number);
  return number;
});

console.log(processedNumbers);

// Output:
// 1
// 2
// 3
// 4
// 5
// [1, 2, 3, 4, 5, 6, 7, 8]
