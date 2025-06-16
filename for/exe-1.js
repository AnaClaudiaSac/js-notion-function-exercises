// Exercício 1: Contar de 1 a 10

// Use um laço for para exibir no console os números de 1 até 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Outuput:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//---------*********----------------

// 1
// 1 + 1 = 2
// 2 + 1 = 3
// 3 + 1 = 4
// 4 + 1 = 5
// 5 + 1 = 6
// 6 + 1 = 7
// 7 + 1 = 8
// 8 + 1 = 9
// 9 + 1 = 10

//---------------------------------------------------------------------------------------------

// Exercício 2: Contar números pares de 0 a 20
// Use um for para imprimir somente os números pares de 0 a 20.

for (let i = 20; i >= 0; i--) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

// Output:
// 20
// 18
// 16
// 14
// 12
// 10
// 8
// 6
// 4
// 2
// 0

for (let i = 20; i >= 0; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Output:
// 20
// 18
// 16
// 14
// 12
// 10
// 8
// 6
// 4
// 2
// 0

//---------------------------------------------------------------------------------------------

// Exercício 3: Somar números de 1 a 5
// Use um for para somar os números de 1 até 5.
// Exiba a soma no final.

let soma = 0;
for (let i = 1; i <= 5; i++) {
  soma += i;
}
console.log("A soma de 1 a 5 é:", soma);
// Output:
// A soma de 1 a 5 é: 15

// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
//10 + 5 = 15

// 1 + 2 + 3 + 4 + 5 = 15

//---------------------------------------------------------------------------------------------

// Exercício 4: Contar de trás para frente
// Use um for para contar de 10 até 1 e exibir os números no console.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

//---------------------------------------------------------------------------------------------

// Exercício 5: Tabuada do 3
// Use um for para exibir a tabuada do 3 (de 3 × 1 até 3 × 10).

for (let i = 1; i <= 10; i++) {
  console.log(`3 x ${i} = ${3 * i}`);
}

// Output:
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30

//----------------------*********---------------

//Explicação: JavaScript;

// Exercício 5: Tabuada do 3
// Use um for para exibir a tabuada do 3 (de 3 × 1 até 3 × 10).

// for (let i = 1; i <= 10; i++) { // Este loop controla o multiplicador (de 1 a 10)
//   console.log(`3 x ${i} = ${3 * i}`); // Exibe a multiplicação formatada
// }
// Entendendo o Código Passo a Passo

// for (let i = 1; i <= 10; i++):

// Esta linha configura o nosso loop. É a "receita" para repetir algo várias vezes.
// let i = 1;: É a inicialização. Aqui, criamos uma variável chamada i (que geralmente significa "índice" ou "iterador") e damos a ela o valor inicial de 1. Esta variável será o nosso "multiplicador" na tabuada.
// i <= 10;: É a condição de continuação. O loop continuará executando enquanto o valor de i for menor ou igual a 10. Assim que i se tornar 11, o loop irá parar.
// i++: É a expressão de atualização. Após cada vez que o código dentro do loop é executado, o valor de i é incrementado em 1 (ou seja, i se torna i + 1).
// console.log(3 x ${i} = ${3 * i});:

// Esta linha é o que acontece dentro de cada repetição do loop.
// console.log(): É uma função que imprime algo no console (na tela).
// `3 x ${i} = ${3 * i}`: Isso é um template literal (usando crases `` em vez de aspas "" ou ''). Ele permite que você insira variáveis ou expressões diretamente dentro de uma string usando ${}.
// Execução Passo a Passo do Loop:
// Iteração	Valor de i	Condição i <= 10	Expressão 3 * i	console.log() de Resultado
// 1ª	1	1 <= 10 (true)	3 * 1 = 3	3 x 1 = 3
// 2ª	2	2 <= 10 (true)	3 * 2 = 6	3 x 2 = 6
// 3ª	3	3 <= 10 (true)	3 * 3 = 9	3 x 3 = 9
// 4ª	4	4 <= 10 (true)	3 * 4 = 12	3 x 4 = 12
// 5ª	5	5 <= 10 (true)	3 * 5 = 15	3 x 5 = 15
// 6ª	6	6 <= 10 (true)	3 * 6 = 18	3 x 6 = 18
// 7ª	7	7 <= 10 (true)	3 * 7 = 21	3 x 7 = 21
// 8ª	8	8 <= 10 (true)	3 * 8 = 24	3 x 8 = 24
// 9ª	9	9 <= 10 (true)	3 * 9 = 27	3 x 9 = 27
// 10ª	10	10 <= 10 (true)	3 * 10 = 30	3 x 10 = 30
// 11ª	11	11 <= 10 (false)	(loop termina)

//---------------------------------------------------------------------------------------------
// Exercício 6: Exibir letras de uma palavra
// Crie uma string com uma palavra (ex: "javascript").
// Use for para imprimir letra por letra no console.

let palavra = "javascript";
for (let i = 0; i < palavra.length; i++) {
  //palavra.length retorna o número total de caracteres na string.
  console.log(palavra[i]);
}

let palavra1 = "javascript";
for (let i = 0; i < palavra.length; i++) {
  console.log(palavra.charAt(i));
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

// Explicação:

// Entendendo e Descrevendo o Loop para Exibir Letras
// O objetivo é passar por cada letra da palavra, uma por uma, e exibir essa letra.

// Definição da Palavra:

// let palavra = "javascript";
// Aqui, declaramos uma variável palavra e atribuímos a ela a string "javascript". Essa é a sequência de caracteres que queremos percorrer.
// O Loop for:

// for (let i = 0; i < palavra.length; i++)
// Este for loop é configurado para iterar (repetir) um certo número de vezes, uma vez para cada letra da palavra.
// let i = 0;: O loop começa com um contador i (de "índice") inicializado em 0. Em programação, a contagem geralmente começa do zero. As letras de uma string (e os elementos de um array) são acessadas por sua posição (índice), e a primeira posição é sempre 0.
// i < palavra.length;: Esta é a condição para o loop continuar.
// palavra.length retorna o número total de caracteres na string. Para "javascript", palavra.length é 10.
// Então, a condição é i < 10. O loop continuará enquanto i for 0, 1, 2, ..., 9. Assim que i se tornar 10, a condição 10 < 10 será false, e o loop irá parar.
// Por que i < palavra.length e não i <= palavra.length? Porque o último índice válido de uma string/array é length - 1. Se length é 10, os índices vão de 0 a 9.
// i++: A cada vez que o código dentro do loop é executado, i é incrementado em 1. Isso garante que passamos por cada índice, um de cada vez.
// Acesso à Letra e Exibição (console.log):

// console.log(palavra[i]); (Primeira Solução)
// palavra[i] é a forma mais comum e moderna de acessar um caractere de uma string em JavaScript (e em muitas outras linguagens). Você usa a notação de colchetes [] e passa o índice (i) dentro deles.
// Por exemplo:
// Quando i é 0, palavra[0] é 'j'.
// Quando i é 1, palavra[1] é 'a'.
// Quando i é 9, palavra[9] é 't'.
// O console.log() então imprime essa letra no console.
// console.log(palavra.charAt(i)); (Segunda Solução)
// palavra.charAt(i) é um método de string que faz exatamente a mesma coisa que a notação de colchetes: retorna o caractere na posição i. É uma forma mais "antiga" ou talvez mais explícita, mas igualmente funcional.
// Resumo de Como o Loop Funciona:
// O loop for começa no índice 0. A cada repetição, ele pega a letra que está na posição atual do índice i e a imprime. Em seguida, ele aumenta o i em 1. Ele repete isso até que o i seja igual ou maior que o comprimento total da palavra (o que significa que já passou por todas as letras), e então o loop para.

//---------------------------------------------------------------------------------------------
// Exercício 7: Contar vogais em uma palavra
// Dada uma palavra qualquer, use for para contar quantas letras são vogais (a, e, i, o, u).

let word = "Javascript";
let vowelCount = 0;

for (let i = 0; i < word.length; i++) {
  let letter = word[i].toLowerCase();
  if ("aeiou".includes(letter)) {
    vowelCount++;
  }
}
console.log(vowelCount);

// Output:
// 3

//-----------------*********-------------------------

// Explicação:

// let word = "Javascript";
// Declara uma variável chamada word.
// Atribui a ela o valor da string "Javascript".
// Esta é a palavra que será analisada para contar as vogais.
// JavaScript

// let vowelCount = 0;

// Declara uma variável chamada vowelCount.
// Inicializa seu valor como 0.
// Esta variável vai armazenar o total de vogais encontradas na palavra. Ela começa em 0 porque ainda não encontramos nenhuma.
// JavaScript

// for (let i = 0; i < word.length; i++) {
// Inicia um loop for. Este loop vai repetir um bloco de código várias vezes.
// let i = 0;: Inicializa um contador i (de "índice") em 0. Strings e arrays em JavaScript começam a ser contados do zero.
// i < word.length;: Esta é a condição para o loop continuar. O loop roda enquanto i for menor que o número total de letras na word (que é 10 para "Javascript"). Isso garante que todas as letras, do índice 0 ao 9, sejam visitadas.
// i++: Incrementa i em 1 a cada vez que o loop termina uma repetição. Assim, ele passa para a próxima letra.
// JavaScript

//   let letter = word[i].toLowerCase();

// Dentro de cada repetição do loop:
// word[i]: Acessa a letra da word que está na posição (índice) atual de i.
// Ex: Na primeira volta, i é 0, então word[0] é "J".
// Na segunda volta, i é 1, então word[1] é "a".
// .toLowerCase(): Converte essa letra acessada para sua versão minúscula.
// Ex: "J" vira "j". "a" continua "a".
// let letter = ...: Armazena essa letra minúscula na variável letter.

// if ("aeiou".includes(letter))
//O método includes() em JavaScript é usado para verificar se uma string ou array contém um determinado valor ou elemento. Ele retorna true se o valor for encontrado e false caso contrário, informa o MDN Web Docs e Medium.
// Em strings:
// O includes() verifica se uma substring existe dentro de uma string
// Dentro de cada repetição do loop, logo após letter ser definida:
// Verifica uma condição: Se a string literal "aeiou" (que representa todas as vogais minúsculas) contém (.includes()) a letter atual.
// Esta é uma forma curta e eficiente de perguntar: "A letter atual é 'a', OU 'e', OU 'i', OU 'o', OU 'u'?"

// vowelCount++;
// Esta linha só é executada se a condição do if acima for verdadeira (ou seja, se a letter atual for uma vogal).
// Incrementa o valor de vowelCount em 1.
// Isso significa que mais uma vogal foi encontrada.

// }
// }
// Marca o fim do bloco de código que pertence ao loop for e ao if. O loop então verifica sua condição novamente (i < word.length) e decide se faz mais uma repetição ou para.

// console.log(vowelCount);
// Esta linha é executada depois que o loop for terminou (ou seja, depois que todas as letras da palavra foram verificadas).
// Exibe o valor final de vowelCount (o número total de vogais encontradas) no console.

//---------------------------------------------------------------------------------------------
// Exercício 8: Exibir elementos de um array
// Crie um array com 5 frutas.
// Use for para exibir cada fruta no console.

const fruit = ["abacaxi", "banana", "laranja", "maçã", "mamão"];

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// Output:
// abacaxi
// banana
// laranja
// maçã
// mamão

//-------------------------*********------------------

// OBS: Em JavaScript, length é uma propriedade que indica o tamanho (número de elementos ou caracteres) de um objeto, como arrays, strings ou funções. No caso dos arrays e strings, retorna o número de elementos ou caracteres, respetivamente, e nas funções indica o número de argumentos que a função espera receber.

//---------------------------------------------------------------------------------------------
// Exercício 9: Somar os números de um array
// Crie um array com 4 números.
// Use for para somar os valores e mostrar o total.

const numbers = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  let currentNumber = numbers[i];
  sum = sum + currentNumber;
}

console.log("A soma total é:", sum);

// Output:
// A soma total do array é: 10

//--------------------------------------------------------------------------------------------

//Crie um array com números e use for para imprimir no console o dobro de cada número.

let number = [10, 20, 30, 40, 50, 60, 70, 80];
for (let i = 0; i < number.length; i++) {
  console.log(number[i] * 2);
}

// Output:
// 20
// 40
// 60
// 80
// 100
// 120
// 140
// 160

//----------------**********------------

// Explicação:
// Declaração do Array: let number = [10, 20, 30, 40, 50, 60, 70, 80];

// Você criou corretamente um array com vários números.
// Loop for para Iteração: for (let i = 0; i < number.length; i++) { ... }

// let i = 0;: Inicia o contador i do índice 0 (o primeiro elemento do array).
// i < number.length;: A condição para continuar o loop é que i seja menor que o comprimento total do array. Para este array, number.length é 8. Então, i vai de 0 a 7, cobrindo todos os índices válidos.
// i++: A cada repetição, i é incrementado em 1, avançando para o próximo elemento do array.
// Operação e Exibição: console.log(number[i] * 2);

// number[i]: Dentro de cada volta do loop, você acessa o elemento do array que está na posição atual de i.
// Ex: Quando i é 0, você acessa number[0] (que é 10).
// Quando i é 1, você acessa number[1] (que é 20).
// / * 2: O valor acessado (number[i]) é então multiplicado por 2.
// console.log(...): O resultado dessa multiplicação é imediatamente impresso no console.
