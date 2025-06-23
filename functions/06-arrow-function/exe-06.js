// Exercício 1: Converter uma função comum para arrow function**

// Dada a função abaixo, reescreva-a como uma **arrow function** chamada `sayHello`:

// function sayHello() {
//   return "Olá, mundo!";
// }

const sayHello = () => {
  console.log("Olá Mundo!");
};

sayHello();

// Output:
// Olá Mundo!

//Arrow function é uma function expression e geralmente começa com uma variável, ela é um modo mais compacto.(pode também ter parâmetros).

// Melhoria:

// Se a função tiver apenas uma linha de código, você pode omitir as chaves {} e o return (se houver um valor a ser retornado):
//Sintaxe mais curta: Tornam o código mais conciso e legível.

//------------------------------------------------------------------------------------
// Exercício 2: Criar uma arrow function que retorna um número dobrado**

// Crie uma **arrow function** chamada `doubleNumber` que recebe um número como parâmetro e retorna o dobro desse número.

// const doubleNumber = (number) => {
//   return number * 2;
// };
// console.log(doubleNumber(40));

// Melhoria:

// Se a função tiver apenas uma linha de código, você pode omitir as chaves {} e o return (se houver um valor a ser retornado):
//Sintaxe mais curta: Tornam o código mais conciso e legível.

//---------------------***********-----------------------
const doubleNumber = (number) => number * 2;

console.log(doubleNumber(2));

// Output:
// 80 => ou qualquer valor passado (number) irá retornar o dobro do número.

// Melhoria:

// Se a função tiver apenas uma linha de código, você pode omitir as chaves {} e o return (se houver um valor a ser retornado):
//Sintaxe mais curta: Tornam o código mais conciso e legível.

//------------------------------------------------------------------------------------
// Exercício 3: Criar uma arrow function que retorna o comprimento de uma string**

// Crie uma **arrow function** chamada `stringLength` que recebe uma palavra e retorna o número de caracteres dessa palavra.

const stringLength = (palavra) => {
  return palavra.length;
};

console.log(stringLength("Anna"));
console.log(stringLength("Cláudia"));
console.log(stringLength("Gabriel"));
console.log(stringLength("Amor"));

//---------------**********---------------------

const stringLength1 = (palavra) => palavra.length;

console.log(stringLength1("Anna"));
console.log(stringLength1("Cláudia"));
console.log(stringLength1("Gabriel"));
console.log(stringLength1("Amor"));

// Output:

// 4
// 7
// 7
// 4

// Melhoria:

// Se a função tiver apenas uma linha de código, você pode omitir as chaves {} e o return (se houver um valor a ser retornado):
//Sintaxe mais curta: Tornam o código mais conciso e legível.

//------------------------------------------------------------------------------------
// Exercício 4: Criar uma arrow function para verificar se um número é par**

// Crie uma **arrow function** chamada `isEven` que recebe um número e retorna `true` se for par e `false` se for ímpar.

const isEven = (number) => {
  return number % 2 === 0;
};

console.log(isEven(8));
console.log(isEven(3));

//---------------**********---------------------

const isEven1 = (number) => number % 2 === 0;

console.log(isEven(8));
console.log(isEven(5));

// Output:
// true
// false

//Melhoria:

//Simplificar a arrow function removendo as chaves e o return.

//------------------------------------------------------------------------------------

// Exercício 5: Criar uma arrow function para calcular a área de um triângulo**

// Crie uma **arrow function** chamada `triangleArea` que recebe a **base** e a **altura** de um triângulo e retorna a área.

// Fórmula: `Área = (base × altura) ÷ 2`

const triangleArea = (base, altura) => {
  return (base * altura) / 2;
};

console.log(triangleArea(10, 20));
console.log(triangleArea(40, 40));

//---------------**********---------------------

const triangleArea1 = (base, altura) => (base * altura) / 2;

console.log(triangleArea(10, 20));
console.log(triangleArea(40, 80));

// Output:
// 100
// 800
// 100
// 1600

//Melhoria:

//Simplificar a arrow function removendo as chaves e o return.

//------------------------------------------------------------------------------------

// Exercício 6: Criar uma arrow function para converter Celsius para Fahrenheit**

// Crie uma **arrow function** chamada `celsiusToFahrenheit` que recebe um valor em graus Celsius e retorna o equivalente em Fahrenheit.

// Fórmula:

// `Fahrenheit = (Celsius × 9/5) + 32`

const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

console.log(celsiusToFahrenheit(34));
console.log(celsiusToFahrenheit(40));

//---------------**********---------------------

const celsiusToFahrenheit1 = (celsius) => celsius * 9 + 32;

console.log(celsiusToFahrenheit1(38));
console.log(celsiusToFahrenheit1(60));

// Output:
// 93.2
// 104
// 374
// 572

//Melhoria:

//Simplificar a arrow function removendo as chaves e o return.

//------------------------------------------------------------------------------------

// Exercício 7: Criar uma arrow function que retorna "Bom dia!"**

// Crie uma **arrow function** chamada `goodMorning` que **não recebe parâmetros** e retorna `"Bom dia!"`.

const goodMorning = () => {
  console.log("Bom dia!");
};

goodMorning();

//---------------**********---------------------

const goodMorning1 = () => "Bom dia! Feliz Dia!";
console.log(goodMorning1());

// Output:
// Bom dia!
// Bom dia! Feliz Dia!

//Melhoria:

//Simplificar a arrow function removendo as chaves e o return.

//-----------------------------------------------------------------------------------

// Exercício 8: Criar uma arrow function que retorna a soma de dois números**

// Crie uma **arrow function** chamada `sum` que recebe dois números e retorna a soma deles.

const sum = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(2, 2));
console.log(sum(8, 2));

//---------------**********---------------------

const sum1 = (num1, num2) => num1 + num2;

console.log(sum(4, 8));
console.log(sum(8, 8));

// Output:
// 4
// 10
// 12
// 16

//Melhoria:

//Simplificar a arrow function removendo as chaves e o return.

//------------------------------------------------------------------------------------
// Exercício 9: Criar uma arrow function que recebe um nome e retorna uma saudação personalizada**

// Crie uma **arrow function** chamada `greetUser` que recebe um nome como parâmetro e retorna a mensagem `"Olá, [nome]!"`.

const greetUser = (nome) => {
  console.log(`Olá ${nome}!`);
};

greetUser("Anna");
greetUser("Gabriel");

//---------------**********---------------------

const greetUser1 = (nome) => `Olá ${nome}`;

console.log(greetUser1("Anna C A S"));
console.log(greetUser1("Gabriel G B"));

// Output:
// Olá Anna!
// Olá Gabriel!

// Olá Anna C A S
// Olá Gabriel G B

//Melhoria:

//Simplificar a arrow function removendo as chaves e o return.

//------------------------------------------------------------------------------------

// Exercício 10: Criar uma arrow function que multiplica um número por ele mesmo**

// Crie uma **arrow function** chamada `squareNumber` que recebe um número e retorna ele multiplicado por ele mesmo.

const squareNumber = (number) => {
  return number * number;
};

console.log(squareNumber(5));
console.log(squareNumber(8));

//---------------**********---------------------

const squareNumber1 = (number) => number * number;
console.log(squareNumber1(4));
console.log(squareNumber1(2));

// Output:
// 25
// 64
// 16
// 4

//Melhoria:

//Simplificar a arrow function removendo as chaves e o return.

// Resumo das Melhores Práticas para Arrow Functions

// Sintaxe Abreviada: Se a função possui apenas um parâmetro, pode-se omitir os parênteses; se a função tem apenas uma expressão, as chaves e o return podem ser omitidos.

// Consistência: Decida se a função deve retornar um valor ou exibi-lo diretamente. Use return quando precisar reutilizar o valor.

// Clareza: Prefira nomes claros e consistentes para as funções e variáveis.
