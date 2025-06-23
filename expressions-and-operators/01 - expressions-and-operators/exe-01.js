// Exercício 1: Soma de dois números
// Crie uma função chamada sum que recebe dois números e retorna a soma deles.

function sum(number1, number2) {
  return number1 + number2;
}

console.log(sum(5, 3));
console.log(sum(8, 8));

// Output:
// 8
// 16

//---------------------------------------------------------------------------------------

// Exercício 2: Subtração de dois números
// Crie uma função chamada subtract que recebe dois números e retorna a subtração do primeiro pelo segundo.

function subtract(numb1, numb2) {
  return numb1 - numb2;
}

console.log(subtract(10, 4));
console.log(subtract(10, 2));
console.log(subtract(2, 4));
console.log(subtract(12, 4));

// Output:
// 6
// 8
// -2

//---------------------------------------------------------------------------------------

// Exercício 3: Multiplicação de dois números
// Crie uma função chamada multiply que recebe dois números e retorna o resultado da multiplicação.

function multiply(numb1, numb2) {
  return numb1 * numb2;
}

console.log(multiply(6, 7));
console.log(multiply(4, 2));

// Output;
// 42
// 8

//---------------------------------------------------------------------------------------

// Exercício 4: Divisão de dois números
// Crie uma função chamada divide que recebe dois números e retorna o resultado da divisão.

function divide(number1, number2) {
  return number1 / number2;
}

console.log(divide(20, 4));
console.log(divide(16, 2));

// Output:
// 5
// 8

//---------------------------------------------------------------------------------------

// Exercício 5: Verificar se um número é maior que outro
// Crie uma função chamada isGreater que recebe dois números e retorna true se o primeiro for maior que o segundo, ou false caso contrário.

// function isGreater(numb1, numb2) {
//   if (numb1 > numb2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Output:
// true
// false

//----------------------------**********---------------------------

function isGreaterV2(numb1, numb2) {
  return numb1 > numb2 ? true : false;
}

console.log(isGreaterV2(10, 5));
console.log(isGreaterV2(4, 7));
console.log(isGreaterV2(2, 4));
console.log(isGreaterV2(8, 2));

// Output:
// true
// false
// false
// true

//---------------------------------------------------------------------------------------

// Exercício 6: Verificar se dois números são iguais
// Crie uma função chamada isEqual que recebe dois números e retorna true se forem iguais ou false se forem diferentes.

function isEqual(number1, number2) {
  return number1 === number2 ? true : false;
}

console.log(isEqual(8, 8));
console.log(isEqual(3, 9));
console.log(isEqual(4, 6));
console.log(isEqual(8, 8));

// Output:
// true
// false
// false
// true

//---------------------------------------------------------------------------------------

// Exercício 7: Usar operador lógico AND
// Crie uma função chamada canEnter que recebe duas variáveis: idade e temIngresso. Retorne true se a pessoa tiver idade maior ou igual a 18 e tiver ingresso.

function canEnter(age, hasTicket) {
  return age >= 18 && hasTicket === true ? true : false;
}

console.log(canEnter(20, true));
console.log(canEnter(16, true));
console.log(canEnter(20, false));
console.log(canEnter(18, true));

// Output:
// true
// false
// false
// true

//---------------------------------------------------------------------------------------

// Exercício 8: Usar operador lógico OR
// Crie uma função chamada canRide que recebe duas variáveis: altura e acompanhadoPorAdulto. Retorne true se a pessoa tiver altura maior ou igual a 1.5 metros OU estiver acompanhada por adulto.

function canRide(height, accompaniedByAnAdult) {
  return height >= 1.5 || accompaniedByAnAdult === true ? true : false;
}

console.log(canRide(1.6, false));
console.log(canRide(1.4, true));
console.log(canRide(1.3, false));
console.log(canRide(1.8, true));

// Output:
// true
// true
// false
// true

//---------------------------------------------------------------------------------------

// Exercício 9: Operador de negação
// Crie uma função chamada isNotEqual que recebe dois números e retorna true se eles forem diferentes.

function isNotEqual(numb1, numb2) {
  return numb1 !== numb2 ? true : false;
}

console.log(isNotEqual(5, 8));
console.log(isNotEqual(3, 3));
console.log(isNotEqual(8, 2));
console.log(isNotEqual(2, 8));

// Output:
// true
// false
// true
// true

//---------------------------------------------------------------------------------------

// Exercício 10: Expressão matemática com parênteses
// Crie uma função chamada calculateExpression que resolve a seguinte expressão matemática:
// (5 + 3) * 2

// Retorne o resultado.

const number1 = 5;
const number2 = 3;
const number3 = 2;

function calculateExpression() {
  const sum = (number1 + number2) * number3;
  return sum;
}

console.log(calculateExpression());

// Output:
// 16
