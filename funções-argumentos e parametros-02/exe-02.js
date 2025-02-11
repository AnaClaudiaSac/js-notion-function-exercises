// Exercício 1: Exibir uma saudação personalizada

// Crie uma função chamada `greetUser` que recebe um **nome** como parâmetro e exibe no console a mensagem:

// `"Olá, [nome]! Seja bem-vindo!"`.

function greetUser(nome) {
  console.log(`Olá ${nome}! Seja bem-vindo!`);
}

greetUser("Gabriel");
greetUser("Anna");

//------------------------------------------------------------------------------------

// Exercício 2: Calcular o quadrado de um número

//  2 - Crie uma função chamada `squareNumber` que recebe um **número** como parâmetro e exibe no console o quadrado desse número.

function squareNumber(numero) {
  console.log(numero ** 2);
}

squareNumber(8);

//------------------------------------------------------------------------------------

// Exercício 3: Informar a idade da pessoa

//  3 - Crie uma função chamada `showAge` que recebe um **nome** e uma **idade** como parâmetros e exibe no console a mensagem:

// `"[nome] tem [idade] anos."`.

function showAge(nome, idade) {
  console.log(`${nome} tem ${idade} anos.`);
}

showAge("Gabriel", "29");

//------------------------------------------------------------------------------------

// Exercício 4: Calcular o dobro de um número

// 4 - Crie uma função chamada `doubleValue` que recebe um **número** como parâmetro e exibe no console o dobro desse número.

function doubleValue(number) {
  console.log(number * 2);
}

doubleValue(8);

//------------------------------------------------------------------------------------

// Exercício 5: Converter horas em minutos

//5 - Crie uma função chamada `convertToMinutes` que recebe uma quantidade de **horas** como parâmetro e exibe no console a conversão desse valor para **minutos**.

// **Fórmula:**

// `Minutos = Horas × 60`

function convertToMinutes(horas) {
  const minutes = horas * 60;

  console.log(minutes);
}

convertToMinutes(2);

//-----------------------------------------------------------------------------------

// Exercício 6: Somar dois números

//  6 - Crie uma função chamada `sumNumbers` que recebe **dois números** como parâmetros e exibe no console a soma desses números.

function sumNumbers(number1, number2) {
  console.log(number1 + number2);
}

sumNumbers(2, 6);

//------------------------------------------------------------------------------------

// Exercício 7: Multiplicar dois números

// 7 - Crie uma função chamada `multiplyNumbers` que recebe **dois números** como parâmetros e exibe no console o resultado da multiplicação entre eles.

function multiplyNumbers(number1, number2) {
  console.log(number1 * number2);
}

multiplyNumbers(2, 10);

//------------------------------------------------------------------------------------

// Exercício 8: Informar a temperatura atual**

//  8 - Crie uma função chamada `showTemperature` que recebe um **valor de temperatura** e exibe no console a mensagem:

// `"A temperatura atual é [valor]°C."`.

function showTemperature(valor) {
  console.log(`A temperatura atual é ${valor}°C.`);
}

showTemperature(22);

//------------------------------------------------------------------------------------

// Exercício 9: Exibir uma mensagem de boas-vindas a um usuário e a sua cidade**

//  9 - Crie uma função chamada `welcomeUser` que recebe um **nome** e uma **cidade** como parâmetros e exibe no console a mensagem:

// `"Olá, [nome]! Como está o tempo em [cidade]?"`.

function welcomeUser(name, city) {
  console.log(`Olá ${name}! Como está o tempo em ${city}?`);
}

welcomeUser("Anna", "São Paulo");
welcomeUser("Gabriel", "São Paulo");

//------------------------------------------------------------------------------------

// Exercício 10: Calcular o tempo de viagem

// 10 - Crie uma função chamada `travelTime` que recebe uma **distância (em km)** e uma **velocidade média (em km/h)** como parâmetros e exibe no console o tempo estimado de viagem em horas.

// **Fórmula:**

// `Tempo = Distância ÷ Velocidade`

function travelTime(distancia, velocidade) {
  const tempo = distancia / velocidade;
  console.log(tempo);
}

travelTime(180, 80);
