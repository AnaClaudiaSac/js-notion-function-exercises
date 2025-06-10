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
//Exercício 4: Criar uma função que processa um array com callback**

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

//----------------------------------------------------------------------------------------
// Exercício 5: Criar uma função que filtra números pares usando callback

// Crie uma função chamada `filterEvenNumbers` que recebe um **array de números** e um **callback**.

// O callback deve receber um número e retornar `true` se for par.

// Use essa função para retornar apenas os números pares do array.

function filterEvenNumbers() {}

// Exercício 5: Criar uma função que filtra números pares usando callback

// Crie uma função chamada `filterEvenNumbers` que recebe um **array de números** e um **callback**.

// O callback deve receber um número e retornar `true` se for par.

// Use essa função para retornar apenas os números pares do array.
function filterEvenNumbers(array, callback) {
  let evenNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      evenNumbers.push(array[i]);
    }
  }
  return evenNumbers;
}

const number = [1, 2, 3, 4, 5, 6, 7, 8];

const isEven = (num) => num % 2 === 0;

const evenNumbers = filterEvenNumbers(number, isEven);

console.log(evenNumbers);

// Output:
// [ 2, 4, 6, 8 ]

//--------------------------------------------------------------------------------------
// Exercício 6: Criar uma função que executa uma operação matemática com callback**

// Crie uma função chamada `calculate` que recebe **dois números** e um **callback** que pode ser uma operação matemática (soma, subtração, multiplicação, divisão).

// Teste chamando `calculate(10, 5, soma)`, `calculate(10, 5, multiplicação)`, etc.

// Exercício 6: Criar uma função que executa uma operação matemática com callback**

// Crie uma função chamada `calculate` que recebe **dois números** e um **callback** que pode ser uma operação matemática (soma, subtração, multiplicação, divisão).

// Teste chamando `calculate(10, 5, soma)`, `calculate(10, 5, multiplicação)`, etc.

function calculate(num1, num2, callBack) {
  return callBack(num1, num2);
}

function sum(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  if (num2 === 0) {
    return;
  }
  return num1 / num2;
}

const result1 = calculate(2, 2, sum);
console.log(result1);

const result2 = calculate(10, 8, subtract);
console.log(result2);

const result3 = calculate(8, 6, multiply);
console.log(result3);

const result4 = calculate(10, 5, division);
console.log(result4);

//Output:
// 4
// 2
// 48
// 2

//--------------------------------------------------------------------------------------

// Exercício 68: Criar uma função que executa um callback após um tempo**

// Crie uma função chamada `delayedExecution` que recebe um **callback** e um **tempo em milissegundos**.

// A função deve usar `setTimeout` para chamar o callback após o tempo especificado.

function delayedExecution(time, callBack) {}

//--------------------------------------------------------------------------------------

// Exercício 9: Criar uma função que formata nomes com callback**

// Crie uma função chamada `formatName` que recebe um **nome completo** e um **callback**.

// O callback pode retornar o nome em letras maiúsculas, apenas com as iniciais, ou invertido.

function formatName(fullName, callBack) {}

//--------------------------------------------------------------------------------------

// Exercício 10: Criar uma função que ordena um array usando um callback**

// Crie uma função chamada `sortArray` que recebe um **array de números** e um **callback** que define a ordem de classificação (crescente ou decrescente).

// O callback deve ser passado para a função `sort()`.

function sortArray() {}
