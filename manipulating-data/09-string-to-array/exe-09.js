//Exercício 1: Separar uma frase em palavras
// Crie uma função chamada splitWords que recebe uma frase e retorna um array com cada palavra separada.

function splitWords(phrase) {
  return phrase.split(" ");
}

console.log(splitWords("Eu gosto de estudar"));
console.log(splitWords("Gosto de estudar JavaScript"));

// Output:
// [ 'Eu', 'gosto', 'de', 'estudar' ]
// [ 'Gosto', 'de', 'estudar', 'JavaScript' ]

//---------------------**********--------------------------

// Explicação:

// O método split() em JavaScript divide uma string em um array de substrings. A divisão é feita procurando por um separador especificado.

// Em essência:

// Transforma uma string em um array de partes.
// Você define o que separa as partes (o separador).
// Retorna um novo array com as substrings.
// O separador pode ser um caractere, uma string ou até mesmo uma expressão regular.
// Se o separador for uma string vazia (""), a string original é dividida em um array de caracteres individuais.

//--------------------------------------------------------------------------------------
// Exercício 2: Separar uma lista de frutas separadas por vírgula
// Crie uma função chamada splitFruits que recebe uma string como "maçã,banana,uva" e retorna um array com as frutas.

function splitFruits(fruits) {
  return fruits.split(",");
}

console.log(splitFruits("maçã,banana,uva"));
console.log(splitFruits("laranja,abacaxi,manga"));

// Output:
// [ 'maçã', 'banana', 'uva' ]
// [ 'laranja', 'abacaxi', 'manga' ]

//-------------------------------------------------------------------------------------

// Exercício 3: Transformar uma string de letras em um array de caracteres
// Crie uma função chamada splitLetters que recebe uma palavra e retorna um array com cada letra.

function splitLetters(word) {
  return word.split("");
}

console.log(splitLetters("amor"));
console.log(splitLetters("saúde"));
console.log(splitLetters("alegria"));
console.log(splitLetters("feliz"));

// Output:
// ['a', 'm', 'o', 'r' ]
// [ 's', 'a', 'ú', 'd', 'e' ]
// [
//   'a', 'l', 'e',
//   'g', 'r', 'i',
//   'a'
// ]
// [ 'f', 'e', 'l', 'i', 'z' ]

//--------------------------------------------------------------------------------------

// Exercício 4: Contar quantas palavras tem uma frase
// Crie uma função chamada countWords que transforma uma frase em array de palavras e retorna a quantidade de palavras.

function countWords(phrase) {
  return phrase.split(" ").length;
}
console.log(countWords("Eu gosto de estudar"));
console.log(countWords("Hoje o céu está azul"));

// Output:
// 4
// 5

//--------------------------------------------------------------------------------------

// Exercício 5: Obter a primeira palavra de uma frase
// Crie uma função chamada getFirstWord que converte a frase em array e retorna apenas a primeira palavra.

function getFirstWord(phrase) {
  return phrase.split(" ")[0];
}

console.log(getFirstWord("Aprender é divertido"));
console.log(getFirstWord("JavaScript é incrível"));

// Output:
// "Aprender"
// "JavaScript"

//--------------------------------------------------------------------------------------

// Exercício 6: Separar um número de CPF em partes
// Crie uma função chamada splitCPF que recebe um CPF no formato "123.456.789-00" e retorna um array com as partes separadas.
//ℹ️ Dica: Use .split(".") primeiro.

function splitCPF(cpf) {
  // Primeiro separamos por pontos
  const partesPorPonto = cpf.split(".");

  // O último elemento contém "789-00", que precisa ser separado
  const ultimoElemento = partesPorPonto[2];
  const partesPorHifen = ultimoElemento.split("-");

  // Montamos o array final com todas as partes
  return [
    partesPorPonto[0], // 123
    partesPorPonto[1], // 456
    partesPorHifen[0], // 789
    partesPorHifen[1], // 00
  ];
}

console.log(splitCPF("123.456.789-00"));

//---------------------**********--------------------------

// function splitCPF(cpf) {
//   // Separamos por pontos
//   const partes = cpf.split(".");

//   // Substituímos o último elemento pelo array resultante da divisão por hífen
//   return partes.slice(0, 2).concat(partes[2].split("-"));
// }

// console.log(splitCPF("123.456.789-00"));

//---------------------**********--------------------------

// function splitCPF(cpf) {
//   // Separamos por pontos, retornando apenas esse resultado sem processar o hífen
//   return cpf.split(".");
// }

// console.log(splitCPF("123.456.789-00"));

// Output dos três exemplos:

// Output:
// [ '123', '456', '789-00' ]
// [ '123', '456', '789-00' ]
// [ '123', '456', '789-00' ]

//--------------------------------------------------------------------------------------

// Exercício 7: Transformar uma data em dia, mês e ano
// Crie uma função chamada splitDate que recebe uma data como "20/03/2024" e retorna um array com [dia, mês, ano].

function splitDate(date) {
  return date.split("/");
}

console.log(splitDate("20/03/2024"));

// Output:
// [ '20', '03', '2024' ]

//--------------------------------------------------------------------------------------

// Exercício 8: Separar uma frase e acessar a última palavra

// Crie uma função chamada getLastWord que transforma uma frase em array e retorna a última palavra.

function getLastWord(phrase) {
  const words = phrase.split(" ");
  return words[words.length - 1];
}

console.log(getLastWord("Hoje é um lindo dia"));
console.log(getLastWord("Estudar Javascript"));

// Output:
// dia
// Javascript

//---------------------**********--------------------------

// Explicação:
// Em JavaScript, usar length - 1 em um array é a maneira padrão e eficiente para acessar o índice do último elemento desse array.

// Por que funciona:

// Arrays em JavaScript são indexados a partir de zero. Isso significa que o primeiro elemento está no índice 0, o segundo no índice 1, e assim por diante.
// A propriedade length de um array retorna o número total de elementos que ele contém.
// Portanto, o índice do último elemento sempre será uma unidade menor que o número total de elementos. Se um array tem 5 elementos, seus índices vão de 0 a 4, e o último elemento está no índice 5 - 1 = 4.
// Em resumo:

// array[array.length - 1] é a forma concisa e direta de obter o último elemento de um array em JavaScript sem precisar iterar ou usar outros métodos. É uma prática comum e amplamente utilizada.

//--------------------------------------------------------------------------------------

// Exercício 9: Separar um e-mail em nome e domínio
// Crie uma função chamada splitEmail que recebe um e-mail como "ana@email.com" e retorna um array com o nome e o domínio.

function splitEmail(email) {
  return email.split("@");
}

console.log(splitEmail("ana@email.com"));

// Output:
// [ 'ana', 'email.com' ]

//--------------------------------------------------------------------------------------

// Exercício 10: Transformar uma string com hífens em array de palavras
// Crie uma função chamada splitByDash que recebe uma string como "hoje-é-um-dia-lindo" e retorna um array com as palavras.

function splitByDash(string) {
  return string.split("-");
}

console.log(splitByDash("hoje-é-um-dia-lindo"));

// Output:
// [ 'hoje', 'é', 'um', 'dia', 'lindo' ]
