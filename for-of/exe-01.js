// Dado o array ["Anna", "João", "Carlos", "Marina"], use for...of para exibir cada nome no console.

let names = ["Anna", "João", "Carlos", "Marina"];

for (let name of names) {
  console.log(name);
}

//Output:
// Anna
// João
// Carlos
// Marina

//--------------------**********------------------

// Explicação:
// O for...of foi feito exatamente para esse cenário: percorrer os elementos de uma coleção (como um array) diretamente, sem a necessidade de gerenciar índices (i) ou o comprimento do array (.length).

// for (let name of names):

// let name: A cada iteração do loop, o próximo elemento do array names é atribuído a esta nova variável name.
// of names: Indica que você quer iterar sobre os elementos do array names.
// console.log(name);: Dentro do loop, você simplesmente usa a variável name para acessar o elemento atual e o exibe.

//---------------------------------------------------------------------------------------------
// Exercício 2: Somar números
// Dado o array [10, 20, 30, 40], use for...of para somar todos os números e exibir o total no final.

let numbers = [10, 20, 30, 40];

let total = 0;
for (let number of numbers) {
  total += number;
}
console.log(total);

// Output:
// 100

//----------------------*********-------------------------------

//Explicação:

//let numbers = [10, 20, 30, 40]; // O array com os números a serem somados

//let total = 0; // Uma variável para guardar a soma, começando em zero.
// O loop 'for...of':
// - Para cada 'number' (variável temporária que representa o item atual)
// - Que está 'of' (dentro) do array 'numbers'
//for (let number of numbers) {
//total += number; // Adiciona o 'number' atual ao 'total'.
// É o mesmo que: total = total + number;
//}
//console.log(total); // Exibe o valor final de 'total' (que será 100).

//---------------------------------------------------------------------------------------------
// Exercício 3: Mostrar letras de uma palavra
// Use for...of para exibir cada letra da palavra "javascript" no console.

let word = "javascript";
for (let letters of word) {
  console.log(letters);
}

// Output:
// j
// a
// v
// a
// s
// c
// r
// i
// p
// t

//---------------------------------------------------------------------------------------------

// Exercício 4: Contar quantos números pares existem
// Dado o array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use for...of para contar quantos números pares existem.

let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let count = 0;
for (let number of numbs) {
  if (number % 2 === 0) {
    count++;
  }
}
console.log(count);

// Output: 5

//-------------------------------**********------------------------------
// Explicação:

//let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // O array de números

//let count = 0; // Um contador para os números pares, começa em zero.

// O loop 'for...of':
// Para cada 'number' (variável temporária que representa o item atual)
// Que está 'of' (dentro) do array 'numbs'
//for (let number of numbs) {
// Verifica se o 'number' atual é par:
// Um número é par se o resto da divisão dele por 2 for EXATAMENTE 0.
//if (number % 2 === 0) {
//count++; // Se for par, incrementa o contador de pares.

//console.log(count); // Exibe o valor final de 'count' (que será 5).

//--------------------------------------------------------------------------------------------
// Exercício 5: Criar mensagens personalizadas
// Dado o array ["Lucas", "Ana", "Pedro"], use for...of para exibir "Olá, [nome]!" para cada pessoa.

let names3 = ["Lucas", "Ana", "Pedro"];

for (let name of names3) {
  console.log(`Olá, ${name}!`);
}

// Output:
// Olá, Lucas!
// Olá, Ana!
// Olá, Pedro!

//-----------------------*********--------------------

//Explicação:

//let names3 = ["Lucas", "Ana", "Pedro"]; // O array com os nomes

// O loop for...of vai percorrer cada nome no array 'names3'.
// A cada volta, o nome atual é atribuído à variável 'name'.
//for (let name of names3) {
// console.log(`Olá, ${name}!`); usa um template literal (a string entre crases ` `)
// para facilmente incluir o valor da variável 'name' dentro da frase.
//console.log(`Olá, ${name}!`);

//---------------------------------------------------------------------------------------------

// Exercício 6: Multiplicar valores
// Dado o array [2, 4, 6], use for...of para multiplicar cada valor por 2 e exibir o resultado.

let numbersMultiply = [2, 4, 6];

for (let multiply of numbersMultiply) {
  console.log(multiply * 2);
}

// Output:
// 4
// 8
// 12

//--------------------------------------------------------------------------------------------

// Exercício 7: Juntar palavras
// Dado o array ["Eu", "estou", "aprendendo", "JS"], use for...of para juntar as palavras em uma única frase.

let words = ["Eu", "estou", "aprendendo", "JS"];

let phrase = "";
for (let word of words) {
  phrase += word + " ";
}
console.log(phrase);

// Output:
// Eu estou aprendendo JS

//--------------------------*********------------------

//Explicação:

//let words = ["Eu", "estou", "aprendendo", "JS"]; // O array de palavras

//let phrase = ""; // Uma string vazia para construir a frase.
// É aqui que as palavras serão adicionadas.

// O loop 'for...of':
// Para cada 'word' (variável temporária que representa a palavra atual)
// Que está 'of' (dentro) do array 'words'
//for (let word of words) {
// Concatena a 'word' atual e um espaço (" ") na string 'phrase'.
// É o mesmo que: phrase = phrase + word + " ";
//phrase += word + " ";

//console.log(phrase); // Exibe a frase final: "Eu estou aprendendo JS "

//---------------------------------------------------------------------------------------------

// Exercício 8: Contar vogais
// Use for...of para contar quantas vogais existem na palavra "programacao".

let word1 = "programação";

let vowelCount = 0;
let vowelsList = "aeiouáéíóúãõâêîôû";
for (let letter of word1) {
  if (vowelsList.includes(letter)) {
    vowelCount++;
  }
}
console.log(vowelCount);

// Output:
// 5

//------------------------------**********-------------------------

//Explicação:

// let word1 = "programação";
// Aqui, você declara uma variável chamada word1 e guarda nela a palavra "programação". Essa é a string que vamos analisar.
// JavaScript

// let vowelCount = 0;
// Essa variável vowelCount é o seu contador. Ela começa em 0 porque, no início, ainda não encontramos nenhuma vogal. Cada vez que uma vogal for encontrada, o valor de vowelCount vai aumentar.

// let vowelsList = "aeiouáéíóúãõâêîôû";
// Esta linha é uma referência que contém todas as vogais que você quer contar, incluindo as acentuadas e as com til. Isso torna a verificação muito eficiente.

// for (let letter of word1) {
// Este é o seu loop for...of. Ele foi escolhido perfeitamente para esta tarefa.
// Ele diz: "Para cada letter (nome temporário que você escolheu) que estiver dentro (of) da word1 (sua palavra 'programação'), faça o que está no bloco de código."
// A cada volta do loop, a variável letter vai receber um caractere da word1, um por um: primeiro 'p', depois 'r', 'o', e assim por diante.
// JavaScript

// if (vowelsList.includes(letter)) {
// Esta é a condição que decide se um caractere é uma vogal ou não.
// vowelsList.includes(...): O método .includes() verifica se uma string contém um determinado pedaço (ou caractere, nesse caso). Aqui, ele pergunta: "A vowelsList (ou seja, 'aeiouáéíóúãõâêîôû') contém a letter ?"
// Se vowelsList contém a letter (ex: 'o', 'a', 'ã'), a condição é verdadeira.
// Se não contém (ex: 'p', 'r', 'g'), a condição é falsa.

// vowelCount++;
// Esta linha só é executada se a condição do if for verdadeira (ou seja, se a letter atual for uma vogal).
// vowelCount++ é uma forma curta de dizer vowelCount = vowelCount + 1;. Isso aumenta o contador de vogais em um.

// Este é o fim do bloco de código do for...of. O loop então passa para a próxima letter na word1 até que todas as letras tenham sido verificadas.

// console.log(vowelCount);
// Esta linha é executada depois que o loop for...of termina, o que significa que todas as letras da word1 já foram verificadas.
// Ela exibe o valor final de vowelCount no console, mostrando o número total de vogais encontradas na palavra.

//-----------------------------------------------------------------------------------------

// Exercício 9: Mostrar números negativos
// Dado o array [4, -3, 7, -1, 0, -9], use for...of para exibir apenas os números negativos.

let variousNumbers = [4, -3, 7, -1, 0, -9];

for (let number of variousNumbers) {
  if (number < 0) {
    console.log(number);
  }
}

// Output:
// -3
// -1
// -9

//---------------------------------------------------------------------------------------------

// Exercício 10: Mostrar posições com índice manual
// Dado o array ["a", "b", "c"], use for...of para exibir:

// Posição 0: a
// Posição 1: b
// Posição 2: c

let characters = ["a", "b", "c"];

let index = 0;
for (let char of characters) {
  console.log(`Posição ${index}: ${char}`);
  index++;
}

// Output:
// Posição 0: a
// Posição 1: b
// Posição 2: c

//----------------------------**********------------------

//Explicação:

//let characters = ["a", "b", "c"]; // Seu array de caracteres

//let index = 0; // Um contador manual para as posições, começa em 0.

// O loop for...of:
// Para cada 'char' (variável temporária para o caractere atual)
// Dentro do array 'characters'
//for (let char of characters) {
// Constrói a string usando um template literal para mostrar a posição e o caractere.
//console.log(`Posição ${index}: ${char}`);

//index++; // Incrementa o contador 'index' para a próxima posição.
