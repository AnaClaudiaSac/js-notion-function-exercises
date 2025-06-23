// Exercício 1: Controlar a ordem da soma e multiplicação
// Crie uma função chamada calculateExpression1 que retorna o resultado da expressão:
// 5 + 3 * 2, usando parênteses para somar primeiro.

function calculateExpression1() {
  return (5 + 3) * 2;
}

console.log(calculateExpression1());

// Output:
// 16

//-------------------------------------------------------------------------------------------

// Exercício 2: Executar multiplicação antes da soma
// Crie uma função chamada calculateExpression2 que retorna o resultado da expressão:
// 5 + (3 * 2)

function calculateExpression2() {
  return 3 * 2 + 5;
}

console.log(calculateExpression2());

// Output:
// 11

//-------------------------------------------------------------------------------------------

// Exercício 3: Agrupar subtração e divisão
// Crie uma função chamada calculateExpression3 que retorna o resultado de:
// (20 - 5) / 5

function calculateExpression3() {
  return (20 - 5) / 5;
}

console.log(calculateExpression3());

// Output:
// 3

//-------------------------------------------------------------------------------------------
// Exercício 4: Usar agrupamento em múltiplas operações
// Crie uma função chamada calculateExpression4 que retorna o resultado de:
// ((2 + 3) * 4) - 10

function calculateExpression4() {
  return (2 + 3) * 4 - 10;
}

console.log(calculateExpression4());

// Output:
// 10

//-------------------------------------------------------------------------------------------

// Exercício 5: Calcular a média de 3 notas com parênteses
// Crie uma função chamada calculateAverage que retorna a média de 3 notas:
// (7 + 8 + 9) / 3

function calculateAverage() {
  return (7 + 8 + 9) / 3;
}

console.log(calculateAverage());

// Output:
// 8

//-------------------------------------------------------------------------------------------

// Exercício 6: Usar agrupamento com números negativos
// Crie uma função chamada calculateNegative que retorna o resultado de:
// -(2 + 3) * 2

function calculateNegative() {
  return -(2 + 3) * 2;
}

console.log(calculateNegative());

// Output:
// -10

//------------------------------------------------------------------------------------------

// Exercício 7: Agrupar valores booleanos
// Crie uma função chamada groupBooleans que retorna o resultado de:
// true && (false || true)

function groupBooleans() {
  return true && (false || true);
}

console.log(groupBooleans());

// Output:
// true

//-------------------------------------------------------------------------------------------

// Exercício 8: Agrupar com números decimais
// Crie uma função chamada calculateDecimal que retorna o resultado de:
// (1.5 + 2.5) * 2

function calculateDecimal() {
  return (1.5 + 2.5) * 2;
}

console.log(calculateDecimal());

// Output:
// 8

//-------------------------------------------------------------------------------------------

// Exercício 9: Agrupar strings com concatenação
// Crie uma função chamada groupStrings que retorna o resultado de:
// "Olá " + ("Ana" + " Maria")

function groupStrings() {
  return "Olá " + ("Ana" + " Maria");
}

console.log(groupStrings());

// Output:
// Olá Ana Maria

//-------------------------------------------------------------------------------------------

// Exercício 10: Agrupar lógica com comparação
// Crie uma função chamada groupComparison que retorna o resultado de:
// (5 + 5) > (2 * 4)

function groupComparison() {
  return 5 + 5 > 2 * 4;
}

console.log(groupComparison());

// Output:
// true

//-------------------------------------------------------------------------------------------
