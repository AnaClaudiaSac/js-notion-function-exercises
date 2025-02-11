//   Exercício 11: Repetir uma mensagem**

// Crie uma função chamada `repeatMessage` que recebe uma **mensagem** e um **número** como parâmetros, e **retorna** a mensagem repetida o número de vezes especificado.

// (Exemplo: `repeatMessage("Oi", 3)` → Retorna `"OiOiOi"`)

function repeatMessage(message, number) {
  return message.repeat(number);
}

console.log(repeatMessage("Olá", 4));

//--------------------------------------------------------------------------------------

// Exercício 12: Retornar a primeira letra de uma palavra**

// Crie uma função chamada `firstLetter` que recebe uma **palavra** como parâmetro e **retorna** a primeira letra dessa palavra.

function firstLetter(palavra) {
  return palavra.charAt(0);
}

console.log(firstLetter("Javascript"));

//--------------------------------------------------------------------------------------
//  Exercício 13: Verificar se uma palavra contém uma letra específica**

// Crie uma função chamada `containsLetter` que recebe uma **palavra** e uma **letra** como parâmetros, e **retorna** `true` se a palavra contém essa letra e `false` caso contrário.

function containsLetter(palavra, letra) {
  return palavra.includes(letra);
}

console.log(containsLetter("Javascript", "a"));
console.log(containsLetter("Javascript", "g"));
console.log(containsLetter("Anna", "a"));
console.log(containsLetter("Gabriel", "a"));

//--------------------------------------------------------------------------------------

// Exercício 14: Calcular a média de três números**

// Crie uma função chamada `average` que recebe **três números** como parâmetros e **retorna** a média aritmética deles.

// **Fórmula:**

// `Média = (Número1 + Número2 + Número3) ÷ 3`

function average(number1, number2, number3) {
  const media = (number1 + number2 + number3) / 3;
  return media.toFixed(0);
}

console.log(average(10, 8, 10));
console.log(average(10, 10, 10));

const result = average(10, 10, 10);

console.log("A média dos três numeros é:", result);

//--------------------------------------------------------------------------------------

// Exercício 15: Verificar se um ano é bissexto**

// Crie uma função chamada `isLeapYear` que recebe um **ano** como parâmetro e **retorna** `true` se o ano for bissexto e `false` caso contrário.

// Regra para anos bissextos:

// Um ano é bissexto se for **divisível por 4**, exceto quando é divisível por 100, a menos que seja divisível por 400.

function isLeapYear(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(1993));
console.log(isLeapYear(1996));
console.log(isLeapYear(2022));
console.log(isLeapYear(2025));

//--------------------------------------------------------------------------------------

// Exercício 17: Calcular o perímetro de um retângulo**

// Crie uma função chamada `rectanglePerimeter` que recebe a **largura** e a **altura** de um retângulo como parâmetros e **retorna** o perímetro.

// Fórmula:

// `Perímetro = 2 × (Largura + Altura)`

function rectanglePerimeter(largura, altura) {
  const perimetro = 2 * (largura + altura);
  return perimetro;
}
console.log(rectanglePerimeter(10, 10));

const resul = rectanglePerimeter(10, 10);
console.log("O perímetro do retângulo é:", resul);

//--------------------------------------------------------------------------------------

// Exercício 18: Contar quantos caracteres há em uma string**

// Crie uma função chamada `countCharacters` que recebe uma **palavra ou frase** como parâmetro e **retorna** a quantidade de caracteres (incluindo espaços).

function countCharacters(frase) {
  return frase.length;
}

console.log(countCharacters("Vontade é tudo!"));
console.log(countCharacters("Deus sempre nos ampara!"));

const resp = countCharacters("Deus sempre nos ampara!");
console.log(`A frase tem ${resp} caracteres!`);

//--------------------------------------------------------------------------------------

// Exercício 19: Retornar o menor entre três números**

// Crie uma função chamada `minNumber` que recebe **três números** como parâmetros e **retorna** o menor deles.
function minNumber(n1, n2, n3) {
  if (n1 <= n2 && n1 <= n3) {
    return `O número ${n1} é o menor `;
  } else if (n2 <= n1 && n2 <= n3) {
    return `O número ${n2} é o menor`;
  } else {
    return `O numero ${n3} é o menor`;
  }
}

console.log(minNumber(20, 10, 8));
console.log(minNumber(10, 20, 6));
console.log(minNumber(2, 8, 10));

// function minNumber(number1, number2, number3) {
//   return Math.min(number1, number2, number3);
// }

// console.log(minNumber(80, 40, 10));
// console.log(minNumber(8, 12, 10));
// console.log(minNumber(2, 20, 8));

// Math.max()

// -------------------------------------------------------------------------------------
// Exercício 20: Calcular a potência de um número**

// Crie uma função chamada `power` que recebe **dois números**, base e expoente, como parâmetros e **retorna** o resultado da potenciação.

// **Fórmula:**

// `Resultado = Base ^ Expoente`

function power(base, expoente) {
  const resposta = base ** expoente;
  return resposta;
}

console.log(power(2, 3));
console.log(power(5, 2));
console.log(power(10, 0));

// Math.pow()
