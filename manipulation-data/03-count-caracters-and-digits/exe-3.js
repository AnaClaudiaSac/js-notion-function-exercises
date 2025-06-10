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

// Exercício 5: Contar quantos números existem em uma string
// Crie uma função chamada countDigits que recebe uma string e retorna quantos dígitos numéricos (0-9) existem nela.

function countDigits(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "0" && string[i] <= "9") {
      counter++;
    }
  }
  return counter;
}

console.log(countDigits("Hoje é dia 17 de março"));
console.log(countDigits("A senha é 12345678"));
console.log(countDigits("Nenhum número aqui!"));
console.log(countDigits("Estamos no ano de 2025"));

// Output:
// 2
// 8
// 0
// 4

// Explicação:

// function countDigits(string): Define uma função chamada countDigits que recebe uma string como entrada.

// 2. Inicialização do Contador:
// let counter = 0;
// let counter = 0;: Declara uma variável counter e a inicializa com 0. Essa variável armazenará a contagem de dígitos.

// 3. Loop Através da String:
// for (let i = 0; i < string.length; i++) {
// ... código dentro do loop ...
// }
// for (let i = 0; i < string.length; i++): Inicia um loop for para iterar por cada caractere da string.

// 4. Verificação de Dígito:
// if (string[i] >= '0' && string[i] <= '9') {
//   counter++;
// }
// if (string[i] >= '0' && string[i] <= '9'): Verifica se o caractere atual é um dígito (entre '0' e '9').
// Em JavaScript, você pode comparar caracteres diretamente usando operadores como >= e <=.
// counter++: Se o caractere for um dígito, incrementa o contador.

// 5. Retorno do Contador:
// return counter;
// return counter;: Retorna o valor final do contador, que representa o número de dígitos na string.

//----------------------------------------------------------------------------------

// Exercício 6: Contar quantas letras maiúsculas existem em uma string
// Crie uma função chamada countUpperCase que recebe uma string e retorna quantas letras maiúsculas existem nela.

function countUpperCase(string) {
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "A" && string[i] <= "Z") {
      contador++;
    }
  }
  return contador;
}

console.log(countUpperCase("Olá Mundo")); // 2
console.log(countUpperCase("hello world!"));
console.log(countUpperCase("HELLO WORLD!"));
console.log(countUpperCase("JavaScript É IncríveL!")); // 3
console.log(countUpperCase("tudo minúsculo")); // 0
console.log(countUpperCase("Vontade é Tudo!"));

// Output:
// 2
// 0
// 10
// 4
// 0

//----------------------------------------------------------------------------------

// Exercício 7: Contar quantas letras minúsculas existem em uma string
// Crie uma função chamada countLowerCase que recebe uma string e retorna quantas letras minúsculas existem nela.

function countLowerCase(string) {
  let contador = 0;
  for (let i = 0; i <= string.length; i++) {
    if (string[i] >= "a" && string[i] <= "z") {
      contador++;
    }
  }
  return contador;
}

console.log(countLowerCase("Olá Mundo"));
console.log(countLowerCase("JavaScript É Incrível!"));
console.log(countLowerCase("TUDO MAIÚSCULO"));
console.log(countLowerCase("quantas tem ?"));
console.log(countLowerCase("aqui somos todas minusculas"));

// Output:
// 5
// 14
// 0
// 10
// 24

//----------------------------------------------------------------------------------

// Exercício 8: Contar quantos caracteres especiais existem em uma string
// Crie uma função chamada countSpecialCharacters que recebe uma string e retorna quantos caracteres especiais existem nela.

// ℹ️ Dica: Caracteres especiais são tudo que não for letra ou número, como ! @ # $ % & * ( ).

function countSpecialCharacters(string) {
  const specialCharacters =
    "! @ # $ '() % * + , - . / : ´ ; < = > ? @ [  ] ^ _ ª  § { | } ~ ¿ ¡";
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (specialCharacters.includes(string[i])) {
      counter++;
    }
  }
  return counter;
}

console.log(countSpecialCharacters("Olá, mundo!"));
console.log(countSpecialCharacters("Senha#123"));
console.log(countSpecialCharacters("Texto limpo"));
console.log(countSpecialCharacters(" Esse texto tem muito @#$%&?§ªº"));

// Output:
// 3
// 1
// 1
// 12

//----------------------------------------------------------------------------------

// Exercício 9: Contar quantos parágrafos existem em um texto
// Crie uma função chamada countParagraphs que recebe um texto contendo quebras de linha (\n) e retorna quantos parágrafos existem nele.

function countParagraphs(texto) {
  if (!texto) {
    return 0;
  }
  const paragrafos = texto.split("\n");
  return paragrafos.length;
}

const texto = "Primeiro parágrafo.\nSegundo parágrafo.\nTerceiro parágrafo.";
console.log(countParagraphs(texto));
console.log(
  countParagraphs("Que legal. Estou praticando exercicios de Javascript.")
);

// Output:
// 3
// 1

// Explicação:
// A função split() em JavaScript é uma ferramenta poderosa para manipular strings. Ela divide uma string em um array de substrings, usando um separador especificado como ponto de divisão.

// Como funciona:

// Separador: Você fornece um separador como argumento para a função split(). Esse separador pode ser um caractere, uma string ou uma expressão regular.
// Divisão: A função split() percorre a string original e procura todas as ocorrências do separador.
// Criação do Array: Para cada ocorrência do separador, a função divide a string em duas partes: a parte antes do separador e a parte depois do separador. Essas partes são adicionadas como elementos a um novo array.
// Retorno: A função split() retorna o array resultante contendo as substrings.

//--------------------------------------------------------------------------------------------

// Exercício 10: Contar quantas palavras existem em uma string
// Crie uma função chamada countWords que recebe uma string e retorna a quantidade de palavras na frase.

// ℹ️ Dica: As palavras são separadas por espaços.

function countWords(string) {
  if (!string || string.trim() === "") {
    return 0;
  }

  const palavras = string.trim().split(" ");

  const palavrasFiltradas = palavras.filter((palavra) => palavra !== "");

  return palavrasFiltradas.length;
}

console.log(countWords("Olá mundo!"));
console.log(countWords("Esta é uma frase com várias palavras."));
console.log(countWords("   "));
console.log(countWords(""));
console.log(countWords("   Espaços extras no início e no final.   "));
console.log(countWords(""));
console.log(countWords("Hoje é um belo dia para aprender JavaScript!"));
console.log(countWords("Palavra"));
console.log(
  countWords(
    "Não sei de mais nada, mas vou achar algo bom, Deus sempre está comigo e me protege, Gratidão!"
  )
);

// Output:
// 2
// 7
// 0
// 0
// 7
// 0
// 8
// 1
// 18

// Reumo e Explicação:

// O método split() em JavaScript é uma ferramenta essencial para manipular strings. Imagine que você tem uma longa frase e precisa quebrá-la em palavras individuais, ou que você tem uma lista de itens separados por vírgulas e precisa transformá-la em um array. É aí que o split() entra em ação.

// Em termos simples:

// Dividir para conquistar: O split() divide uma string em pedaços menores (substrings) com base em um separador que você escolhe.
// Transformação em array: O resultado dessa divisão é um array, onde cada pedaço da string original se torna um elemento do array.
// Como funciona:

// Você fornece a string: A string que você deseja dividir.
// Você escolhe o separador: O separador é o que define onde a string será quebrada. Pode ser um caractere, uma palavra ou até mesmo uma expressão regular.
// O split() faz a mágica: Ele encontra todas as ocorrências do separador na string e divide a string nesses pontos.
// Você recebe o array: O split() retorna um array contendo as substrings resultantes.
// Exemplo prático:

// JavaScript

// let texto = "maçã,banana,laranja";
// let frutas = texto.split(",");
// console.log(frutas); // Saída: ["maçã", "banana", "laranja"]
// Neste exemplo:

// A string "maçã,banana,laranja" é dividida.
// O separador "," (vírgula) indica os pontos de divisão.
// O resultado é o array ["maçã", "banana", "laranja"].
// Em resumo:

// O split() é uma ferramenta poderosa para quebrar strings em pedaços menores e transformá-los em arrays, facilitando a manipulação e o processamento de texto em JavaScript.
