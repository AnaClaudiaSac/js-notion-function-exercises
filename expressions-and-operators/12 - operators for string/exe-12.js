// Exercício 1: Concatenar duas palavras com +
// Crie uma função chamada joinWords que recebe duas palavras e retorna as duas juntas.

function joinWords(word1, word2) {
  return word1 + word2;
}

console.log(joinWords("Olá", "Mundo"));
console.log(joinWords("Estudar", "Javascrpit"));

//Outpu:
//OláMundo
//EstudarJavascrpit

//---------------------------------------------------------------------------------------------

// Exercício 2: Adicionar um espaço entre palavras
// Crie uma função chamada joinWithSpace que recebe duas palavras e retorna as duas separadas por espaço.

function joinWithSpace(word1, word2) {
  return word1 + " " + word2;
}

console.log(joinWithSpace("Olá", "Mundo!"));
console.log(joinWithSpace("Ana", "Cláudia"));

// Output:
// Olá Mundo!
// Ana Cláudia

//---------------------------------------------------------------------------------------------
// Exercício 3: Juntar nome e sobrenome
// Crie uma função chamada fullName que recebe um nome e um sobrenome e retorna o nome completo.

function fullName(name, surname) {
  return name + " " + surname;
}

console.log(fullName("Ana", "Silva"));
console.log(fullName("Anna", "Sacute"));

// Output:
// Ana Silva
// Anna Sacute

//---------------------------------------------------------------------------------------------
// Exercício 4: Usar += para montar uma frase
// Crie uma função chamada buildSentence que começa com a string "Hoje é " e usa += para adicionar "segunda-feira". Retorne o resultado.

function buildSentence() {
  let phrase = "Hoje é ";
  return (phrase += "segunda-feira");
}

console.log(buildSentence());

// Output:
// Hoje é segunda-feira

//---------------------------------------------------------------------------------------------

// Exercício 5: Comparar duas strings com ==
// Crie uma função chamada areStringsEqual que recebe duas strings e retorna true se forem iguais.

function areStringsEqual(string1, string2) {
  return string1 === string2 ? true : false; // Ou apenas => return string1 === string2
}

console.log(areStringsEqual("abc", "abc"));
console.log(areStringsEqual("123", "1234"));

// Output:
// true;
// false;

//---------------------------------------------------------------------------------------------

// Exercício 6: Comparar duas strings com letras maiúsculas e minúsculas
// Crie uma função chamada caseSensitiveCompare que compara "Olá" com "olá" e retorna o resultado.

function caseSensitiveCompare() {
  return "Olá" === "olá";
}

console.log(caseSensitiveCompare());

// Output:
// false

//---------------------------------------------------------------------------------------------

// Exercício 7: Juntar três palavras em uma frase
// Crie uma função chamada makePhrase que recebe três palavras e retorna a frase completa com espaços.

function makePhrase(word1, word2, word3) {
  return word1 + " " + word2 + " " + word3;
}

console.log(makePhrase("Eu", "amo", "programar"));
console.log(makePhrase("vontade", "é", "tudo!"));

// Output:
// Eu amo programar
// vontade é tudo!

//---------------------------------------------------------------------------------------------

// Exercício 8: Concatenar número com texto
// Crie uma função chamada combineTextAndNumber que recebe um nome e uma idade, e retorna uma frase como "Maria tem 30 anos".

function combineTextAndNumber(name, age) {
  return name + " tem " + age + " anos "; // Ou com Template Literals (`` e ${}).
}

console.log(combineTextAndNumber("Maria", 30)); // "Maria tem 30 anos"

// Output:
// Maria tem 30 anos

//---------------------------------------------------------------------------------------------

// Exercício 9: Repetir uma palavra duas vezes na mesma string
// Crie uma função chamada repeatWord que recebe uma palavra e retorna ela repetida duas vezes com espaço.

function repeatWord(word) {
  return word + " " + word;
}

console.log(repeatWord("Olá"));

// Output:
// Olá Olá

//---------------------------------------------------------------------------------------------

// Exercício 10: Verificar se o texto contém um determinado nome
// Crie uma função chamada containsName que recebe uma frase e um nome, e retorna true se o nome estiver dentro da frase.

function containsName(phrase, name) {
  return phrase.includes(name);
}

console.log(containsName("Meu nome é Ana", "Ana"));
console.log(containsName("Meu nome é João", "Pedro"));

// Output:
// true
// false
