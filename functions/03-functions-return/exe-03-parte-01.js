// Exercício 1: Retornar uma saudação personalizada

//1 -  Crie uma função chamada `greetUser` que recebe um **nome** como parâmetro e **retorna** a mensagem:

// `"Olá, [nome]! Seja bem-vindo!"`.

function greetUser(nome) {
  let message = `Olá, ${nome}! Seja bem-vindo(a)!`;
  return message;
}

const teste = greetUser("Anna");
console.log(teste);

// Output:
// Olá, Anna! Seja bem-vindo(a)!

//------------------------------------------------------------------------------------

// Exercício 2: Calcular o triplo de um número

// 2 - Crie uma função chamada `tripleNumber` que recebe um **número** como parâmetro e **retorna** o triplo desse número.

function tripleNumber(numero) {
  return numero * 3;
}

console.log(tripleNumber(8));
console.log(tripleNumber(10));

// Output:
// 24
// 30

//------------------------------------------------------------------------------------

// Exercício 3: Verificar se um número é positivo**

// 3 -  Crie uma função chamada `isPositive` que recebe um **número** como parâmetro e **retorna** `true` se o número for positivo e `false` se for negativo ou zero.

function isPositive(number) {
  return number > 0;
}

console.log(isPositive(10));
console.log(isPositive(-9));
console.log(isPositive(0));
console.log(isPositive(8));

// Output:
// true
// false
// false
// true

//------------------------------------------------------------------------------------

// Exercício 4: Concatenar nome e sobrenome

// 4 - Crie uma função chamada `fullName` que recebe um **primeiro nome** e um **sobrenome** como parâmetros e **retorna** o nome completo.

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullName("Anna", "Sacute"));
console.log(fullName("Gabriel", "Gomes"));

// Output:
// Anna Sacute
// Gabriel Gomes

//------------------------------------------------------------------------------------

// Exercício 5: Converter metros para centímetros**

// 5-  Crie uma função chamada `metersToCentimeters` que recebe um valor em **metros** e **retorna** o equivalente em **centímetros**.

// Fórmula:
// `Centímetros = Metros × 100`

function metersToCentimeters(meters) {
  return meters * 100;
}
console.log(metersToCentimeters(1));
console.log(metersToCentimeters(2));
console.log(metersToCentimeters(8.8));

// Output:
// 100
// 200
// 880.0000000000001

//------------------------------------------------------------------------------------
// Exercício 16: Calcular o IMC (Índice de Massa Corporal)

// Crie uma função chamada `calculateIMC` que recebe **peso (kg)** e **altura (m)** como parâmetros e **retorna** o IMC.

// Fórmula:

// `IMC = Peso ÷ (Altura × Altura)`

function calculateIMC(weigth, height) {
  return (weigth / (height * height)).toFixed(2);
}

console.log(calculateIMC(60, 1.7));
console.log(calculateIMC(70, 1.78));

// Output:
// 20.76
// 22.09

//------------------------------------------------------------------------------------

// Exercício 7: Verificar se um número é par ou ímpar

//  7 - Crie uma função chamada `isEven` que recebe um **número** como parâmetro e **retorna** `"Par"` se o número for par ou `"Ímpar"` se for ímpar.

function isEven(number) {
  return number % 2 === 0 ? "Par" : "Ímpar";
}

console.log(isEven(12));
console.log(isEven(7));
console.log(isEven(22));

// Output:
// Par
// Ímpar
// Par

//------------------------------------------------------------------------------------

// Exercício 8: Converter dólares para reais

//  8 - Crie uma função chamada `convertToReal` que recebe um valor em **dólares** e um valor da **cotação do dólar** como parâmetros, e **retorna** o equivalente em reais.

// Fórmula:
//`Reais = Dólares × Cotação`

function convertToReal(dollars, exchangeRate) {
  return dollars * exchangeRate;
}

console.log(convertToReal(10, 6));
console.log(convertToReal(80, 5.8));

// Output:
// 60
// 464

//------------------------------------------------------------------------------------

// Exercício 9: Calcular o tempo restante para aposentadoria

// 9 - Crie uma função chamada `yearsToRetirement` que recebe a **idade atual** de uma pessoa e **retorna** quantos anos faltam para ela se aposentar, considerando a idade mínima de **65 anos**.

function yearsToRetirement(currentAge) {
  const retirementAge = 65;

  if (currentAge >= retirementAge) {
    return "Você já pode se aposentar!";
  } else {
    return `Faltam ${retirementAge - currentAge} anos para se aposentar.`;
  }
}

console.log(yearsToRetirement(48));
console.log(yearsToRetirement(70));
console.log(yearsToRetirement(18));
console.log(yearsToRetirement(65));

// Output:
// Faltam 17 anos para se aposentar
// Você já pode se aposentar!
// Faltam 47 anos para se aposentar
// Você já pode se aposentar!

//------------------------------------------------------------------------------------

// Exercício 10: Retornar o maior entre dois números**

// 10 - Crie uma função chamada `maxNumber` que recebe **dois números** como parâmetros e **retorna** o maior deles.

function maxNumber(number1, number2) {
  if (number1 > number2) {
    return `O número ${number1} é maior `;
  } else if (number2 > number1) {
    return `O número ${number2} é maior`;
  } else {
    return "Os números são iguais";
  }
}

console.log(maxNumber(10, 80));
console.log(maxNumber(20, 20));
console.log(maxNumber(40, 20));
console.log(maxNumber(20, 88));

// Eu poderia também fazer a comparação entre os dois números indicando qual era menor ou maior ou igual mas o exercício pede o retorno apenas do maior número.

// Output:
// O número 80 é maior
// Os números são iguais
// O número 40 é maior
// O número 88 é maior

//------------------------------------------------------------------------------------
