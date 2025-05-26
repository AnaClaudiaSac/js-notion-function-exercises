// Exercício 1: Somar e multiplicar sem parênteses
// Crie uma função chamada sumAndMultiply que retorna o resultado de 5 + 3 * 2.

function sumAndMultiply() {
  return 5 + 3 * 2;
}

console.log(sumAndMultiply());

// Output:
// 11

//---------------------------------------------------------------------------------------------

// Exercício 2: Somar e multiplicar com parênteses
// Crie uma função chamada groupedSumFirst que retorna o resultado de (5 + 3) * 2.

function groupedSumFirst() {
  return (5 + 3) * 2;
}

console.log(groupedSumFirst());

// Output;
// 16;

//---------------------------------------------------------------------------------------------

// Exercício 3: Subtração e divisão sem parênteses
// Crie uma função chamada subtractAndDivide que retorna o resultado de 20 - 6 / 2.

function subtractAndDivide() {
  return 20 - 6 / 2;
}

console.log(subtractAndDivide());

// Output:
// 17

//---------------------------------------------------------------------------------------------

// Exercício 4: Subtração e divisão com parênteses
// Crie uma função chamada groupedDivideFirst que retorna o resultado de (20 - 6) / 2.

function groupedDivideFirst() {
  return (20 - 6) / 2;
}

console.log(groupedDivideFirst());

// Output:
// 7

//---------------------------------------------------------------------------------------------

// Exercício 5: Misturar operadores aritméticos e comparação
// Crie uma função chamada compareWithCalculation que retorna o resultado de 5 + 3 * 2 > 10.

function compareWithCalculation() {
  return 5 + 3 + 2 > 10;
}

console.log(compareWithCalculation());

// Output:
// false

//--------------------------------------------------------------------------------------------

// Exercício 6: Misturar operadores de comparação e lógicos
// Crie uma função chamada logicalComparison que retorna o resultado de 10 > 5 && 3 < 2.

function logicalComparison() {
  return 10 > 5 && 3 < 2;
}

console.log(logicalComparison());

//Output
// false

//---------------------------------------------------------------------------------------------

// Exercício 7: Operador lógico || com &&
// Crie uma função chamada logicalPriority que retorna true || false && false.

function logicalPriority() {
  return true || (false && false);
}

console.log(logicalPriority());

// Output:
// true

//---------------------------------------------------------------------------------------------
// Exercício 8: Uso de ! com operadores de comparação
// Crie uma função chamada negateComparison que retorna !false == true.

function negateComparison() {
  return !false == true;
}

console.log(negateComparison());

// Output:
// true;

//---------------------------------------------------------------------------------------------
// Exercício 9: Precedência entre igualdade e soma
// Crie uma função chamada equalityVsSum que retorna 1 + 2 === 3.

function equalityVsSum() {
  return 1 + 2 === 3;
}

console.log(equalityVsSum());

// Output:
// true

//---------------------------------------------------------------------------------------------

// Exercício 10: Combinar tudo com agrupamento
// Crie uma função chamada complexExpression que retorna o resultado de ((2 + 3) * 4) > (10 + 5).

function complexExpression() {
  return (2 + 3) * 4 > 10 + 5;
}

console.log(complexExpression());

// Output:
// true
