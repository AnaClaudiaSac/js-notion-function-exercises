// Exercício 1: Contar o número de caracteres em uma string
// Crie uma função chamada countCharacters que recebe uma string e retorna a quantidade de caracteres nela.

function countCharacters(string) {
  return string.length;
}

console.log(countCharacters("Olá"));
console.log(countCharacters("Javascript"));
console.log(countCharacters(" "));
console.log(countCharacters("Gratidão Senhor"));

// Output:
// 3
// 10
// 1
// 15

// Resumo:
// Em JavaScript, a principal ferramenta para contar caracteres em uma string é a propriedade length. No entanto, dependendo do que você precisa contar, outras abordagens podem ser úteis.

// 1. length:

// Uso básico:
// A propriedade length retorna o número de caracteres em uma string, incluindo espaços, símbolos e caracteres especiais.
// Exemplo: "Olá, mundo!".length retorna 12.
// Quando usar:
// Quando você precisa do número total de caracteres em uma string.
// Para validar o comprimento de entradas de usuário (por exemplo, senhas, nomes de usuário).
// Para iterar sobre os caracteres de uma string usando loops.

//--------------------------------------------------------------------------------------

// Exercício 2: Contar o número de espaços em uma string
// Crie uma função chamada countSpaces que recebe uma string e retorna quantos espaços existem nela.

function countSpaces(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      counter++;
    }
  }
  return counter;
}

console.log(countSpaces("Olá mundo!"));
console.log(countSpaces("Hoje é um belo dia!"));
console.log(countSpaces("SemEspaços"));
console.log(countSpaces("Olá meu nome é Anna!"));

// Output:
// 1
// 4
// 0
// 4

//---------------------------------------------------------------------------------

// Exercício 3: Contar o número de vogais em uma string
// Crie uma função chamada countVowels que recebe uma string e retorna quantas vogais existem nela.

// ℹ️ Dica: As vogais são: a, e, i, o, u (maiúsculas e minúsculas).

function countVowels(string) {
  const vowels = "aáâãeéiouAEIOU";
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      counter++;
    }
  }
  return counter;
}

console.log(countVowels("Olá mundo!"));
console.log(countVowels("Javascript"));
console.log(countVowels("BCDFGHJKLM"));
console.log(countVowels("aeiouAEIOU"));
console.log(
  countVowels(
    "Olá meu nome é Ana Cláudia! Amo filmes e seriados e curto rock, animais e natureza!"
  )
);

// Output:
// 4
// 3
// 0
// 10
// 35

//Explicação:

// A função countVowels recebe uma string como entrada.
// Uma string vogais é definida contendo todas as vogais (maiúsculas e minúsculas).
// Um loop for itera por cada caractere da string de entrada.
// Dentro do loop, o método includes() verifica se o caractere atual está presente na string vogais.
// Se o caractere for uma vogal, o contador é incrementado.
// A função retorna o valor final do contador.

// Resumo:
// O loop for é uma estrutura de controle de fluxo essencial em JavaScript, usada para executar um bloco de código repetidamente. Aqui está um resumo dos principais aspectos:
// Inicialização: Define uma variável de controle inicial.
// Condição: Uma expressão booleana que determina se o loop continua ou para.
// Incremento/Decremento: Atualiza a variável de controle após cada iteração.
// Funcionamento:

// A inicialização é executada uma vez no início do loop.
// A condição é verificada. Se for verdadeira, o bloco de código é executado.
// O incremento/decremento é executado após cada iteração.
// Os passos 2 e 3 se repetem até que a condição seja falsa.
// Tipos de loops for:

// for tradicional: Usado para iteração com um número conhecido de vezes.
// for...in: Itera sobre as propriedades enumeráveis de um objeto.
// for...of: Itera sobre valores de objetos iteráveis (arrays, strings, etc.).

// Pontos-chave:
// O loop for é flexível e pode ser usado em diversas situações.
// É importante definir uma condição de parada para evitar loops infinitos.
// Os loops for...in e for...of oferecem formas convenientes de iterar sobre objetos e arrays.
// Em resumo, o loop for é uma ferramenta poderosa para automatizar tarefas repetitivas em JavaScript.

//---------------------------------------------------------------------------------
// Exercício 4: Contar o número de consoantes em uma string
// Crie uma função chamada countConsonants que recebe uma string e retorna quantas consoantes existem nela.

// ℹ️ Dica: Consoantes são todas as letras que não são vogais.
function countConsonants(string) {
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (consonants.includes(string[i])) {
      counter++;
    }
  }
  return counter;
}

console.log(countConsonants("Javascript"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("A E I O U"));
console.log(countConsonants("bcdeFGHIJKLMNOP"));
console.log(countConsonants("abcBCDeORTV"));

// Output:
// 7
// 7
// 0
// 12
// 8

//--------------------------------------------------------------------------------
