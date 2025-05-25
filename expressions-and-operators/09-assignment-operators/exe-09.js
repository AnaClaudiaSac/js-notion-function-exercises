// Exercício 1: Atribuir um valor a uma variável
// Crie uma função chamada assignValue que cria uma variável idade e atribui o valor 25 a ela. Retorne a variável.

function assignValue() {
  const age = 25;
  return age;
}

console.log(assignValue());

// Output:
// 25

//---------------------------------------------------------------------------------------------

// Exercício 2: Somar um valor com +=
// Crie uma função chamada increasePoints que começa com pontos = 10 e soma 5 com o operador +=.

function increasePoints() {
  let pontos = 10;
  return (pontos += 5);
}

console.log(increasePoints());

// Output:
// 15

//---------------------------------------------------------------------------------------------

// Exercício 3: Subtrair um valor com -=
// Crie uma função chamada decreaseLives que começa com vidas = 3 e subtrai 1 com o operador -=.

function decreaseLives() {
  let vidas = 3;
  return (vidas -= 1);
}

console.log(decreaseLives());

// Output:
// 2

//---------------------------------------------------------------------------------------------

// Exercício 4: Multiplicar um valor com *=
// Crie uma função chamada doubleValue que começa com numero = 4 e multiplica por 2 com *=.

function doubleValue() {
  let number = 4;
  return (number *= 2);
}

console.log(doubleValue());

// Output:
// 8

//---------------------------------------------------------------------------------------------

// Exercício 5: Dividir um valor com /=
// Crie uma função chamada halveValue que começa com numero = 20 e divide por 2 com /=.

function halveValue() {
  let number = 20;
  return (number /= 2);
}

console.log(halveValue());

// Output:
// 10

//---------------------------------------------------------------------------------------------

// Exercício 6: Concatenar texto com +=
// Crie uma função chamada addLastName que começa com nome = "Ana" e adiciona o sobrenome " Silva" com +=.

function addLastName() {
  let name = "Ana";
  return (name += " Silva");
}

console.log(addLastName()); // "Ana Silva"

//--------------------------------------------------------------------------------------------

// Exercício 7: Atribuir um novo valor após cálculo
// Crie uma função chamada updatePrice que define preco = 50, depois soma 10 com += e subtrai 5 com -=. Retorne o preço final.

function updatePrice() {
  let price = 50;
  price += 10;
  price -= 5;
  return price;
}

console.log(updatePrice());

// Output:
//55

//--------------------------------------------------------------------------------------------
//  Exercício 8: Usar operadores compostos em sequência
// Crie uma função chamada adjustScore que começa com pontuacao = 100, depois faz:

// pontuacao -= 20

// pontuacao += 10

// pontuacao /= 2

// Retorne o valor final.

function adjustScore() {
  let score = 100;
  score -= 20;
  score += 10;
  score /= 2;
  return score;
}

console.log(adjustScore());

// Output:
// 45

//---------------------------------------------------------------------------------------------

// Exercício 9: Atualizar idade usando operadores
// Crie uma função chamada birthday que começa com idade = 29 e adiciona 1 com +=.

function birthday() {
  let age = 29;
  return (age += 1);
}

console.log(birthday());

// Output:
// 30

//---------------------------------------------------------------------------------------------
// Exercício 10: Usar operadores de atribuição com variáveis de string e número
// Crie uma função chamada studentInfo que:

// Define nome = "Lucas"

// Define idade = 20

// Usa += para montar a frase "Lucas tem 20 anos" e retorna a frase.

function studentInfo() {
  let name = "Lucas";
  let age = 20;
  name += " tem " + age + " anos";
  return name;
}

console.log(studentInfo());

// Output:
// Lucas tem 20 anos
