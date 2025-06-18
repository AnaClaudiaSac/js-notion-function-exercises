// Exercício 1: Contar de 1 a 10
// Use um laço while para exibir os números de 1 até 10 no console.

let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}

// Output:
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

//-------------------------------------------------------------------------------------------

// Exercício 2: Contar números pares de 0 a 20
// Use um while para mostrar apenas os números pares de 0 a 20.

let g = 0;
while (g <= 20) {
  if (g % 2 === 0) {
    console.log(g);
  }
  g++;
}

// Output:
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20

//---------------------------------------------------------------------------------------------

// Exercício 3: Somar números de 1 a 5
// Use um while para somar os números de 1 até 5 e exibir o resultado final.
let sum = 0;
let a = 1;
while (a <= 5) {
  sum += a;
  a++;
}
console.log(sum);

// Output:
// 15

//----------**********-----------
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
//10 + 5 = 15

//---------------------------------------------------------------------------------------------
// Exercício 4: Contagem regressiva de 10 a 1
// Use um while para contar de 10 até 1 no console.

let c = 10;
while (c > 0) {
  console.log(c);
  c--;
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
// Exercício 5: Repetir uma mensagem 5 vezes
// Use um while para exibir a mensagem "Estudando JavaScript" cinco vezes.

let l = 0;
while (l < 5) {
  console.log("Estudando JavaScript");
  l++;
}

// Output:
// Estudando JavaScript
// Estudando JavaScript
// Estudando JavaScript
// Estudando JavaScript
// Estudando JavaScript

//---------------------------------------------------------------------------------------------
// Exercício 6: Somar números até passar de 100
// Use um while para somar números começando do 1 até que o total passe de 100.
// Exiba o número final que fez a soma ultrapassar 100.

let x = 100;
let total = 0;
let n = 1;
while (total <= 100) {
  total += n;
  n++;
}

console.log(n - 1);

// Output;
// 14

//----------------------***********------------------

// Explicação:

// Verificação do while: 91 <= 100 é verdadeiro. O loop continua.
// total += n; -> total = 91 + 14; -> total agora é 105.
// n++; -> n agora é 15.
// Nova Verificação do while: 105 <= 100 é falso. O loop para.
// console.log(n - 1);: Como n é 15 (o número que seria somado se o loop continuasse), n - 1 resulta em 14. Isso mostra que o 14 foi o último número a ser adicionado que fez o total passar de 100.
// A lógica de n - 1 para encontrar o último número somado, pois o n é incrementado antes da condição do while ser reavaliada e se tornar falsa.

//---------------------------------------------------------------------------------------------
// Exercício 7: Mostrar caracteres de uma palavra
// Use um while para exibir letra por letra da palavra "javascript".

let word = "javascript";
let w = 0;
while (w < word.length) {
  console.log(word[w]);
  w++;
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

//-----------------************------------------

//Explicação:

// Simulação da execução:

// - w = 0:
//   - Condição: 0 < 10 (true)
//   - console.log(word[0]); // Imprime 'j'
//   - w++; // w agora é 1

// - w = 1:
//   - Condição: 1 < 10 (true)
//   - console.log(word[1]); // Imprime 'a'
//   - w++; // w agora é 2

// ... (continua até) ...

// - w = 9:
//   - Condição: 9 < 10 (true)
//   - console.log(word[9]); // Imprime 't'
//   - w++; // w agora é 10

// - w = 10:
//   - Condição: 10 < 10 (false)
//   - Loop PARA.

//--------------------------------------------------------------------------------------------
// Exercício 8: Contar quantas letras tem uma palavra
// Use um while para contar quantas letras existem na palavra "computador" sem usar .length.

let word1 = "computador";
let count = 0;
while (word1[count] !== undefined) {
  count++;
}
console.log(count);

// Output:
//10

//-------------------*********---------------------

//Explicação:

// let word1 = "computador"; // A palavra que queremos contar as letras
// let count = 0;          // Nosso contador de letras, começa em 0

// O Loop 'while' :
// 1. O loop continua ENQUANTO 'word1[count]' NÃO FOR 'undefined'.
// 2. Quando tenta acessar um índice que não existe em uma string (ou array) em JavaScript,
// o resultado é 'undefined'.
// 3. Então, o loop continua enquanto ele consegue encontrar uma letra na posição 'count'.
// while (word1[count] !== undefined) {
// 4. A cada vez que uma letra é encontrada (a condição é verdadeira), o contador aumenta.
//    Isso significa que está contando as letras uma por uma.
//   count++;
// }

// 5. Quando o loop para, significa que 'word1[count]' se tornou 'undefined'.
// Isso ocorre exatamente no índice que seria uma posição "extra" após a última letra.
// Portanto, o valor final de 'count' é o número total de letras.
// console.log(count); // Para "computador", isso imprimirá 10.

//---------------------------------------------------------------------------------------------

// Exercício 9: Contar os múltiplos de 3 entre 1 e 30
// Use um while para mostrar os números múltiplos de 3 entre 1 e 30.

let multiply3 = 1;
while (multiply3 <= 30) {
  if (multiply3 % 3 === 0) {
    console.log(multiply3);
  }
  multiply3++;
}

// Output:
// 9
// 12
// 15
// 18
// 21
// 24
// 27
// 30

//------------------*********-------------------

// Explicação:
// let multiply3 = 1; // 1. Declara uma variável 'multiply3' e a inicializa com 1.
//    Essa variável será nosso contador, que vai de 1 até 30.

//2. Inicia um loop 'while'. Ele continuará executando
// ENQUANTO 'multiply3' for menor ou igual a 30.
// while (multiply3 <= 30) {
// 3. Dentro do loop, verifica se o número atual é um múltiplo de 3.
//    'multiply3 % 3 === 0' significa: "Se o resto da divisão de 'multiply3' por 3 for EXATAMENTE 0".
//    Isso é a definição de ser um múltiplo de 3.
//   if (multiply3 % 3 === 0) {
// 4. Se a condição for verdadeira (ou seja, se for um múltiplo de 3),
//    o número atual é impresso no console.
//     console.log(multiply3);
//   }
// 5. ESSENCIAL: Incrementa 'multiply3' em 1 a cada volta do loop.
//    Isso garante que o loop avance para o próximo número e, eventualmente,
//    a condição 'multiply3 <= 30' se torne falsa, fazendo o loop parar.
//   multiply3++;
// }

//---------------------------------------------------------------------------------------------

// Exercício 10: Repetir até o número ser maior que 50
// Comece com o número 10 e vá somando 5 em cada repetição.
// Pare quando o número for maior que 50.
// Use while e exiba os números no console.

let number0 = 10;

while (number0 <= 50) {
  console.log(number0);
  number0 += 5;
}

// Output:
// 10
// 15
// 20
// 25
// 30
// 35
// 40
// 45
// 50

//------------------------********---------------------

// Explicação:

//let number0 = 10; // 1. O número inicial é 10.

// 2. O loop 'while' continuará executando ENQUANTO 'number0' for menor ou igual a 50.
//    Assim que 'number0' se tornar MAIOR que 50, a condição será falsa e o loop irá parar.
//while (number0 <= 50) {
// 3. Exibe o número atual no console antes de somar.
//    Isto mostra os números 10, 15, 20, ..., 50.
//console.log(number0);

// 4. Soma 5 ao 'number0' para a próxima repetição.
//number0 += 5; // É o mesmo que 'number0 = number0 + 5;'
//}

// Quando o loop termina, 'number0' será 55.
// Se você quisesse ver o valor final de 'number0' após o loop, poderia adicionar:
// console.log("O loop parou porque o número é:", number0); // Saída: O loop parou porque o número é: 55

// Início: number0 é 10.
// Iteração 1:
// Condição: 10 <= 50 é true.
// console.log(10);
// number0 se torna 15.
// Iteração 2:
// Condição: 15 <= 50 é true.
// console.log(15);
// number0 se torna 20.
// ...
// Iteração 9:
// Condição: 50 <= 50 é true.
// console.log(50);
// number0 se torna 55.
// Iteração 10:
// Condição: 55 <= 50 é false.
// O loop para.
