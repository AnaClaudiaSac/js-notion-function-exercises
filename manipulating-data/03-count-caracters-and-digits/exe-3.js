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
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      contador++;
    }
  }
  return contador;
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

//------------------------------------------------------------------------------------
