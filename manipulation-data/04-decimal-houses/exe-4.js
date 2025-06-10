// Exercício 1: Arredondar um número para o inteiro mais próximo
// Crie uma função chamada roundNumber que recebe um número decimal e retorna ele arredondado para o inteiro mais próximo.

// ℹ️ Dica: Use Math.round().
function roundNumber(number) {
  return Math.round(number);
}

console.log(roundNumber(4.3));
console.log(roundNumber(7.8));
console.log(roundNumber(5.5));
console.log(roundNumber(8.8));

// Output:
// 4
// 8
// 6
// 9

// Explicação:

// Math.round(): Esta função é uma função nativa do JavaScript que arredonda um número para o inteiro mais próximo. Se a parte decimal do número for 0.5 ou maior, o número é arredondado para cima. Se for menor que 0.5, o número é arredondado para baixo.

//--------------------------------------------------------------------------------------------

// Exercício 2: Arredondar um número para baixo
// Crie uma função chamada floorNumber que recebe um número decimal e retorna ele arredondado para baixo.

// ℹ️ Dica: Use Math.floor().

function floorNumber(number) {
  return Math.floor(number);
}

console.log(floorNumber(4.9));
console.log(floorNumber(7.2));
console.log(floorNumber(5.8));
console.log(floorNumber(8.8));

// Output:
// 4
// 7
// 5
// 8

// Explicação:
// Arredondamento para baixo: O Math.floor() sempre arredonda um número decimal para o inteiro menor ou igual a ele.

//--------------------------------------------------------------------------------------------

// Exercício 3: Arredondar um número para cima
// Crie uma função chamada ceilNumber que recebe um número decimal e retorna ele arredondado para cima.

// ℹ️ Dica: Use Math.ceil().

function ceilNumber(number) {
  return Math.ceil(number);
}

console.log(ceilNumber(4.1));
console.log(ceilNumber(7.6));
console.log(ceilNumber(5.2));
console.log(ceilNumber(8.8));

// Output:
// 5
// 8
// 6
// 9

// Explicação:
// Diferenças entre Math.ceil() e Math.round() em JavaScript:

// Math.ceil()

// Arredondamento para cima: Esta função sempre arredonda um número para o inteiro maior ou igual a ele. Pensa em "ceil" como o "teto" de um número.
// Math.ceil(4.2) retorna 5
// Math.ceil(9.99) retorna 10
// Math.ceil(-3.7) retorna -3
// Math.round()

// Arredondamento para o inteiro mais próximo: Esta função arredonda um número para o inteiro mais próximo. Se a parte decimal for 0.5 ou maior, arredonda para cima. Se for menor que 0.5, arredonda para baixo.
// Math.round(4.2) retorna 4
// Math.round(4.7) retorna 5
// Math.round(-3.3) retorna -3
// Math.round(-3.8) retorna -4

// Em resumo:

// Math.ceil(): Sempre arredonda para cima.
// Math.round(): Arredonda para o inteiro mais próximo, seguindo as regras matemáticas tradicionais.
// Quando usar:

// Math.ceil(): Use quando você precisa garantir que um número seja arredondado para cima, independentemente da parte decimal.
// Math.round(): Use quando você quer o arredondamento tradicional, para o inteiro mais próximo.
// Exemplo prático:

// Imagine que você está calculando o número de páginas necessárias para imprimir um documento com 150 linhas, e cada página pode ter no máximo 40 linhas.

// Math.ceil(150 / 40): Retornaria 4, indicando que você precisa de 4 páginas completas.
// Math.round(150 / 40): Também retornaria 4 neste caso, mas se o resultado da divisão fosse 3.2, Math.round() retornaria 3, o que seria incorreto.
// Espero que esta explicação tenha esclarecido as diferenças entre Math.ceil() e Math.round()

//--------------------------------------------------------------------------------------------
// Exercício 4: Manter apenas duas casas decimais
// Crie uma função chamada formatTwoDecimals que recebe um número decimal e retorna ele com apenas duas casas decimais.

// ℹ️ Dica: Use .toFixed(2).

function formatTwoDecimals(number) {
  return number.toFixed(2);
}

console.log(formatTwoDecimals(4.5678));
console.log(formatTwoDecimals(10.1));
console.log(formatTwoDecimals(5.999));
console.log(formatTwoDecimals(8.8));

// Output:
// 4.57
// 10.10
// 6.00
// 8.80

// Explicação:
// O método .toFixed() em JavaScript é uma ferramenta poderosa para formatar números decimais, permitindo controlar com precisão quantas casas decimais um número deve exibir.

// Em resumo:

// Formatação de casas decimais: .toFixed(casasDecimais) converte um número em uma string, arredondando-o para o número especificado de casas decimais.
// Arredondamento: O método realiza arredondamento, ou seja, se a casa decimal seguinte for 5 ou maior, a última casa exibida será arredondada para cima.
// Retorno como string: O resultado de .toFixed() é sempre uma string, mesmo que o número original fosse um número.
// Casas decimais padrão: Se você não especificar o número de casas decimais, .toFixed() arredondará o número para o inteiro mais próximo.

// Quando usar:

// Formatação de valores monetários: Para exibir preços com duas casas decimais, por exemplo.
// Exibição de resultados de cálculos: Para garantir que os resultados sejam exibidos com uma precisão específica.
// Criação de relatórios e tabelas: Para padronizar a exibição de números decimais.
// Pontos importantes:

// O método .toFixed() sempre retorna uma string. Se você precisar realizar cálculos com o resultado, precisará convertê-lo de volta para um número usando parseFloat() ou parseInt().
// O arredondamento realizado por .toFixed() segue as regras matemáticas padrão.

//--------------------------------------------------------------------------------------------

// Exercício 5: Converter um número para um formato monetário (duas casas decimais e vírgula)
// Crie uma função chamada formatMoney que recebe um número e retorna ele formatado como dinheiro (duas casas decimais e com vírgula no lugar do ponto).

// ℹ️ Dica: Use .toFixed(2).replace(".", ",").

function formatMoney(number) {
  return number.toFixed(2).replace(".", ",");
}

console.log(formatMoney(1500.5));
console.log(formatMoney(9.99));
console.log(formatMoney(100));
console.log(formatMoney(88));

// Output:
// 1500,50
// 9,99
// 100,00
// 88,00

// Explicação:
// O método replace() em JavaScript é uma ferramenta essencial para manipular strings, permitindo substituir partes específicas de um texto por outras. Aqui está um resumo conciso:

// O que ele faz:

// Substituição de texto: replace() procura por uma parte específica de uma string (um padrão) e a substitui por outra string.
// Padrões: O padrão a ser procurado pode ser uma string simples ou uma expressão regular (RegExp) para buscas mais complexas.
// Nova string: replace() não modifica a string original; ele retorna uma nova string com as substituições feitas.
// Primeira ocorrência (por padrão): Quando usado com uma string simples como padrão, replace() substitui apenas a primeira ocorrência encontrada. Para substituir todas as ocorrências, use uma expressão regular com a flag g (global).

// Pontos-chave:

// replace() é sensível a maiúsculas e minúsculas (case-sensitive) por padrão.
// Expressões regulares oferecem grande flexibilidade para padrões de busca complexos.
// Para substituir todas as ocorrencias de uma string, é obrigatorio o uso de expressões regulares.

//--------------------------------------------------------------------------------------------
// Exercício 6: Somar dois números e manter apenas três casas decimais
// Crie uma função chamada sumAndFormat que recebe dois números, soma os dois e retorna o resultado com três casas decimais.

// ℹ️ Dica: Use .toFixed(3).

function sumAndFormat(num1, num2) {
  const result = num1 + num2;
  return result.toFixed(3);
}

console.log(sumAndFormat(2.345, 1.111)); // "3.456"
console.log(sumAndFormat(5.678, 0.222)); // "5.900"
console.log(sumAndFormat(1.999, 2.001)); // "4.000"
console.log(sumAndFormat(88.8, 2.2));

// Output:
// 3.456
// 5.900
// 4.000
// 91.000

// Explicação:
// Para poder retornar a soma e as casas decimais, foi necessário fazer uma variavél onde vou obter o resultado da soma para depois acrescentar o método tofixed() no resultado dessa soma e assim colocar as casas decimais.

//--------------------------------------------------------------------------------------------

// Exercício 7: Multiplicar um número e manter apenas uma casa decimal
// Crie uma função chamada multiplyAndFormat que recebe dois números, multiplica os dois e retorna o resultado com uma casa decimal.

// ℹ️ Dica: Use .toFixed(1).

function multiplyAndFormat(num1, num2) {
  const result = num1 * num2;
  return result.toFixed(1);
}

console.log(multiplyAndFormat(2.5, 3.2));
console.log(multiplyAndFormat(5.123, 2));
console.log(multiplyAndFormat(1.1, 1.1));
console.log(multiplyAndFormat(8.8, 2.6));

// Output:
// 8.0
// 10.2
// 1.2
// 22.9

// P.S : Não estou colocando explicações em todos pois, vai ficar repetitivo, pois já comentei sobre os métodos usados.

//--------------------------------------------------------------------------------------------

// Exercício 8: Verificar se um número tem casas decimais
// Crie uma função chamada hasDecimal que recebe um número e retorna true se ele tiver casas decimais e false se for um número inteiro.

// ℹ️ Dica: Use Math.floor() para verificar se o número tem parte decimal.

function hasDecimal(number) {
  return number != Math.floor(number);
}

console.log(hasDecimal(4.5));
console.log(hasDecimal(10));
console.log(hasDecimal(3.14));
console.log(hasDecimal(8.8));

// Output:
// true
// false
// true
// true

// Resumo / Explicação:
// Em essência, Math.floor() garante que você obtenha o número inteiro imediatamente abaixo ou igual ao número decimal que você fornece. É uma ferramenta útil em muitas situações de programação, especialmente quando você precisa trabalhar com índices de arrays ou realizar outros cálculos que exigem números inteiros.

//--------------------------------------------------------------------------------------------

// Exercício 9: Contar quantas casas decimais um número tem
// Crie uma função chamada countDecimals que recebe um número decimal e retorna quantas casas decimais ele tem.

// ℹ️ Dica: Converta o número para string e veja quantos caracteres aparecem após o ponto (.).

function countDecimals(numeroDecimal) {
  const numeroString = numeroDecimal.toString();
  const pontoIndex = numeroString.indexOf(".");

  if (pontoIndex === -1) {
    return 0;
  }

  return numeroString.length - pontoIndex - 1;
}

console.log(countDecimals(4.56));
console.log(countDecimals(10.1234));
console.log(countDecimals(5));

// Explicação:
// const numeroString = numeroDecimal.toString();:
// Esta linha converte o número decimal em uma string.
// const pontoIndex = numeroString.indexOf('.');:
// indexOf() procura por uma substring específica dentro de uma string maior e retorna a posição (índice) da primeira ocorrência dessa substring.
// Esta linha encontra a posição do ponto decimal na string. Se o ponto não for encontrado, indexOf() retorna -1.
// if (pontoIndex === -1) { return 0; }:
// Esta condição verifica se o número não tem casas decimais (ou seja, se é um número inteiro). Se for, a função retorna 0.
// return numeroString.length - pontoIndex - 1;:
// Se o número tiver casas decimais, esta linha calcula a quantidade de casas decimais subtraindo a posição do ponto decimal do comprimento total da string e subtraindo 1 (para não contar o ponto decimal).

//--------------------------------------------------------------------------------------------

// Exercício 10: Converter um número decimal para fração aproximada
// Crie uma função chamada decimalToFraction que recebe um número decimal e retorna uma string aproximada do número em formato de fração.

// ℹ️ Dica: Multiplique o número por 100 e simplifique para x/100.

function decimalToFraction(number) {
  const numerador = Math.round(number * 100);
  const denominador = 100;

  return `${numerador}/${denominador}`;
}

console.log(decimalToFraction(0.25));
console.log(decimalToFraction(0.5));
console.log(decimalToFraction(0.75));
console.log(decimalToFraction(8.88));

// Output:
// 25/100
// 50/100
// 75/100
// 888/100

// Explicação:

// Multiplicar por 100:
// Multiplicamos o número decimal por 100 para obter um número inteiro.
// Exemplo: 0,75 * 100 = 75.
// Criar a fração:
// O número inteiro obtido no passo anterior será o numerador da fração.
// O denominador da fração será sempre 100.
// Exemplo: 75/100.

// Simplificar (opcional):
// Para obter uma fração mais simples, podemos dividir o numerador e o denominador pelo maior divisor comum entre eles.
// Exemplo: 75/100 pode ser simplificado para 3/4.
// Retornar a fração:
// A função retorna a fração como uma string.

// Exemplo:
// Se a entrada for 0,75, a saída será "3/4" (ou "75/100", se a simplificação não for feita).

// Em resumo:

// A função pega um número decimal, o transforma em uma fração aproximada e, opcionalmente, simplifica essa fração.

// Exemplos:

// Na fração 1/2, o denominador é 2, indicando que o todo foi dividido em duas partes iguais.
// Na fração 3/4, o denominador é 4, indicando que o todo foi dividido em quatro partes iguais.

// No exercício de conversão de decimais para frações, usamos o denominador 100. Isso ocorre porque estamos convertendo o decimal em uma fração que representa centésimos.
// Quando multiplicamos o número decimal por 100, estamos efetivamente movendo a vírgula decimal duas casas para a direita. O resultado dessa multiplicação se torna o numerador da fração, e o denominador é sempre 100.
// O que é o denominador?

// Em uma fração, o denominador é o número que fica na parte de baixo da fração. Ele representa o número total de partes iguais em que um todo foi dividido.
