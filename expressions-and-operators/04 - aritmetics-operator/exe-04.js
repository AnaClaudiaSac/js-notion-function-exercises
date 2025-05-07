// Exercício 1: Soma de dois números
// Crie uma função chamada sum que recebe dois números e retorna a soma deles.

function sum(number1, number2) {
  return number1 + number2;
}

console.log(sum(4, 6));
console.log(sum(5, 3));

// Output:
// 10
// 8

//------------------------------------------------------------------------------------------

// Exercício 2: Subtração de dois números
// Crie uma função chamada subtract que recebe dois números e retorna o resultado da subtração.

function subtract(num1, num2) {
  return num1 - num2;
}

console.log(subtract(10, 3));
console.log(subtract(16, 8));
console.log(subtract(10, 20));
console.log(subtract(20, 10));

// Output:
// 7
// 8
// -10
// 10

//------------------------------------------------------------------------------------------

// Exercício 3: Multiplicação de dois números
// Crie uma função chamada multiply que recebe dois números e retorna a multiplicação deles.

function multiply(number1, number2) {
  return number1 * number2;
}

console.log(multiply(7, 8));
console.log(multiply(2, 4));

// Output:
// 56
// 8

//------------------------------------------------------------------------------------------

// Exercício 4: Divisão de dois números
// Crie uma função chamada divide que recebe dois números e retorna o resultado da divisão.

function divide(num1, num2) {
  return num1 / num2;
}

console.log(divide(20, 4));
console.log(divide(16, 2));

// Output:
// 5
// 8

//------------------------------------------------------------------------------------------

// Exercício 5: Calcular o resto da divisão (módulo)
// Crie uma função chamada getRemainder que recebe dois números e retorna o resto da divisão entre eles.

function getRemainder(number1, number2) {
  return number1 % number2;
}

console.log(getRemainder(10, 3));
console.log(getRemainder(26, 4));

// Output:
// 1
// 2

//------------------------------------------------------------------------------------------

// Exercício 6: Dobrar um número
// Crie uma função chamada double que recebe um número e retorna o dobro dele (multiplicação por 2).

function double(number) {
  return number * 2;
}

console.log(double(9));
console.log(double(4));

// Output:
// 18
// 8

//------------------------------------------------------------------------------------------

// Exercício 7: Calcular a metade de um número
// Crie uma função chamada half que recebe um número e retorna a metade dele (divisão por 2).

function half(number) {
  return number / 2;
}

console.log(half(50));
console.log(half(20));

// Output:
// 25
// 10

//------------------------------------------------------------------------------------------

// Exercício 8: Elevar um número ao quadrado
// Crie uma função chamada square que recebe um número e retorna ele elevado ao quadrado (usando **).

function square(number) {
  return number ** 2;
}

console.log(square(5));
console.log(square(8));

// Output:
// 25
// 64

//------------------------------------------------------------------------------------------

// Exercício 9: Calcular a média de três números
// Crie uma função chamada average que recebe três números e retorna a média deles.

function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(average(10, 20, 30));
console.log(average(10, 10, 10));

// Output:
// 20
// 10

//------------------------------------------------------------------------------------------

// Exercício 10: Calcular uma expressão matemática
// Crie uma função chamada calculateExpression que calcula a expressão (5 + 3) * 2 - 4 / 2 e retorna o resultado.

function calculateExpression() {
  return (5 + 3) * 2 - 4 / 2;
}

console.log(calculateExpression());

// Output:
// 14
