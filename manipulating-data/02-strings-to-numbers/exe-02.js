// Exercício 1: Verificar se um valor é um número
// Crie uma função chamada isNumber que recebe um valor como parâmetro e retorna true se for um número e false se não for.

// ℹ️ Dica: Use typeof.

function isNumber(value) {
  return typeof value === "number";
}

console.log(isNumber(10));
console.log(isNumber("10"));
console.log(isNumber("text"));
console.log(isNumber(3.5));

// Output:
// true
// false
// false
// true

//-------------------**********-----------------------

//Resumo:
// Manipulação de Dados:
// A manipulação de dados é o processo de transformar dados brutos em informações úteis. As etapas principais são:

// Coleta: Obter dados de diversas fontes.
// Limpeza: Corrigir erros e remover inconsistências.
// Transformação: Alterar o formato dos dados para análise.
// Análise: Extrair informações e padrões dos dados.
// Visualização: Apresentar os resultados de forma clara.
// Armazenamento: Guardar os dados para uso futuro.
// Verificando se um Valor é um Número em JavaScript

// Entendendo typeof

// O operador typeof em JavaScript retorna uma string que indica o tipo de um valor.
// Por exemplo:
// typeof 10 retorna "number"
// typeof "10" retorna "string"
// typeof true retorna "boolean"
// Portanto, "number" nesse contexto é uma string literal que representa o tipo de dado "number" em JavaScript.
// Por que usar typeof valor === "number"?

// O objetivo dessa verificação é determinar se o valor já é um número antes de qualquer tentativa de conversão.
// Se o valor já for do tipo "number", não há necessidade de conversão.
// Isso é importante para evitar erros e para garantir que a função se comporte corretamente em diferentes situações.
// Por exemplo, se você tentar converter um número que já é um número, isso pode levar a comportamentos inesperados.

// Ao utilizar o typeof você verifica o tipo primitivo da variavel, para saber se ela já é um número.

// A relação com a conversão de strings

// A conversão de strings para números ocorre quando você tem um valor do tipo "string" que representa um número (por exemplo, "10", "3.14").
// Nesses casos, você usa funções como parseInt(), parseFloat() ou Number() para converter a string em um valor do tipo "number".
// Após a conversão, typeof do valor resultante será "number".
// Em resumo, o typeof é usado para verificar o tipo de dado existente, enquanto as funções de conversão são usadas para mudar o tipo de dado de uma string para um número.

//--------------------------------------------------------------------------------------

// Exercício 2: Converter número para string
// Crie uma função chamada numberToString que recebe um número como parâmetro e retorna ele convertido para string.

function numberToString(number) {
  return number.toString();
}
console.log(numberToString(123));
console.log(numberToString("123"));
console.log(numberToString(5));
console.log(numberToString(8));

// Output:
// 123
// 123
// 5
// 8

//--------------------------------------------------------------------------------------

// Exercício 3: Converter string para número
// Crie uma função chamada stringToNumber que recebe uma string numérica e retorna ela convertida para número.
//ℹ️ Dica: Use Number().

function stringToNumber(string) {
  return Number(string);
}

console.log(stringToNumber("42"));
console.log(stringToNumber("7"));
console.log(stringToNumber(8));
console.log(stringToNumber("3.14"));

// Output:
// 42
// 7
// 8
// 3.14

//--------------------------------------------------------------------------------------

// Exercício 4: Somar um número com uma string numérica
// Crie uma função chamada sumNumbers que recebe dois valores e soma os dois, garantindo que ambos sejam números.

// ℹ️ Dica: Converta a string para número antes de somar.

function sumNumbers(value1, value2) {
  return Number(value1) + Number(value2);
}

console.log(sumNumbers(10, "5"));
console.log(sumNumbers("8", "2"));
console.log(sumNumbers(8, 8));
console.log(sumNumbers("3", "7"));

// Output:
// 15
// 10
// 16
// 10

//-------------------------------------------------------------------------------------

// Exercício 5: Multiplicar um número por uma string numérica
// Crie uma função chamada multiplyNumbers que recebe um número e uma string numérica, multiplica os dois e retorna o resultado.

function multiplyNumbers(number, string) {
  return number * Number(string);
}

console.log(multiplyNumbers(4, "2"));
console.log(multiplyNumbers(3, "5"));
console.log(multiplyNumbers("2", "8"));
console.log(multiplyNumbers(2, 2));

// Output:
// 8
// 15
// 16
// 4

// Observações Importantes:

// Conversão Implícita: O JavaScript é conhecido por sua conversão implícita de tipos. Quando você usa o operador *, ele tenta converter os operandos em números. Isso significa que, mesmo que você passe uma string como "2", ela será convertida em um número antes da multiplicação.
// Flexibilidade e Potencial de Erro: Essa flexibilidade pode ser útil, mas também pode levar a erros inesperados se você não estiver ciente de como o JavaScript lida com a conversão de tipos. Por exemplo, se a string não puder ser convertida em um número válido (por exemplo, "abc"), Number() retornará NaN (Not a Number), e o resultado da multiplicação será NaN.

//--------------------------------------------------------------------------------------

// Exercício 6: Verificar se uma string representa um número
// Crie uma função chamada isNumericString que recebe uma string e retorna true se ela puder ser convertida para número e false se não puder.

// ℹ️ Dica: Um número convertido que vira NaN não é válido.

// 1º -
function isNumericString(string) {
  const numeroConvertido = Number(string);
  if (numeroConvertido === Number(string)) {
    return true;
  } else {
    return false;
  }
}
console.log(isNumericString("123"));
console.log(isNumericString("10.5"));
console.log(isNumericString("abc"));
console.log(isNumericString("5a"));

// Outptu:
// true
// true
// false
// false

//-------------------**********-----------------------

// OBS: Esse exercício foi gerado pelo Gemini, lembrando que fiz antes o exercício acima.
// Estou perguntando a IA quando tenho dúvidas.
//Mas creio que o meu também está certo.

// 2º -
// function isNumericString(string) {
//   const numeroConvertido = Number(string);
//   return !isNaN(numeroConvertido);
// }

// console.log(isNumericString("123"));
// console.log(isNumericString("10.5"));
// console.log(isNumericString("abc"));
// console.log(isNumericString("5a"));

// Outptu:
// true
// true
// false
// false

// Explicação:

// function isNumericString(string): Definimos a função isNumericString que recebe uma string como argumento.
// const numeroConvertido = Number(string);: Usamos Number(string) para tentar converter a string em um número. Se a conversão for bem-sucedida, numeroConvertido conterá o número resultante. Se a conversão falhar, numeroConvertido será NaN (Not a Number).
// return !isNaN(numeroConvertido);: Usamos isNaN(numeroConvertido) para verificar se numeroConvertido é NaN. isNaN retorna true se o valor for NaN e false caso contrário. Usamos o operador de negação ! para inverter o resultado. Portanto, a função retorna true se numeroConvertido não for NaN (ou seja, se a string puder ser convertida em um número válido) e false se for NaN.

//-------------------------------------------------------------------------------------
// Exercício 7: Arredondar um número para o inteiro mais próximo
// Crie uma função chamada roundNumber que recebe um número decimal e retorna ele arredondado para o inteiro mais próximo.

// ℹ️ Dica: Use Math.round().

function roundNumber(decimalNumber) {
  return Math.round(decimalNumber);
}

console.log(roundNumber(4.3));
console.log(roundNumber(7.8));
console.log(roundNumber(5.5));
console.log(roundNumber(8));

//Output:
// 4
// 8
// 6
// 8

//Resumo:

// Math.round() já é uma função bastante concisa e eficiente para arredondar números decimais para o inteiro mais próximo em JavaScript. Não há uma maneira significativamente mais resumida de realizar essa operação específica.

// Por que Math.round() é resumido:

// Função Integrada: Math.round() é uma função nativa do JavaScript, o que significa que ela já está otimizada e pronta para uso.
// Implementação Direta: A função Math.round() faz exatamente o que é necessário: arredonda um número decimal para o inteiro mais próximo. Não há necessidade de escrever lógica adicional ou usar bibliotecas externas.
// Simplicidade: A sintaxe Math.round(numero) é simples e direta, tornando o código fácil de ler e entender.

//--------------------------------------------------------------------------------------

// Exercício 8: Retornar apenas duas casas decimais
// Crie uma função chamada formatDecimal que recebe um número decimal e retorna ele com apenas duas casas decimais.

// ℹ️ Dica: Use .toFixed(2).

function formatDecimal(decimalNumber) {
  return decimalNumber.toFixed(2);
}

console.log(formatDecimal(4.5678));
console.log(formatDecimal(10.1));
console.log(formatDecimal(2.6));
console.log(formatDecimal(8.8));

// Output:
// 4.57
// 10.10
// 2.60
// 8.80

// Resumo:
// toFixed() em JavaScript:

// O que é toFixed()?

// toFixed() é um método em JavaScript que formata um número usando notação de ponto fixo. Isso significa que ele arredonda um número para um número específico de casas decimais e retorna o resultado como uma string.

// Como Funciona:

// Arredondamento:
// toFixed() arredonda o número para o número especificado de casas decimais.
// Se o número tiver mais casas decimais do que o especificado, ele será arredondado.
// O arredondamento segue as regras padrão (0.5 ou superior arredonda para cima).
// Retorno:
// toFixed() sempre retorna uma string, mesmo que o resultado seja um número inteiro.
// Se o número de casas decimais especificado for maior do que o número de casas decimais no número original, zeros serão adicionados ao final.
// Sintaxe:

// JavaScript

// numero.toFixed(casasDecimais);

//--------------------------------------------------------------------------------------

// Exercício 9: Concatenar um número com uma string
// Crie uma função chamada concatNumberString que recebe um número e uma string e junta os dois em um único texto.

function concatNumberString(number, string) {
  return number + string;
}

console.log(concatNumberString(5, " maçãs"));
console.log(concatNumberString(10, " dias"));
console.log(concatNumberString(8, "8"));
console.log(concatNumberString(40, "º graus"));

// Output:
// 5 maçãs
// 10 dias
// 88
// 40º graus

// Resumo:
// Concatenar números e strings em JavaScript é o processo de combinar valores numéricos e textuais em uma única string.
// Quando você usa o operador + com um número e uma string, o JavaScript converte automaticamente o número em uma string e, em seguida, as duas strings são combinadas.

//---------------------------------------------------------------------------------

// Exercício 10: Contar quantos números existem em uma string
// Crie uma função chamada countNumbersInString que recebe uma string e conta quantos números existem nela.

// ℹ️ Dica: Use um loop para verificar cada caractere da string.

function countNumbersInString(string) {
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i]))) {
      contador++;
    }
  }
  return contador;
}

console.log(countNumbersInString("A senha é 1234"));
console.log(countNumbersInString("Nenhum número aqui!"));
console.log(countNumbersInString("abc123def45"));
console.log(countNumbersInString("xyz"));
console.log(countNumbersInString("1 2 3 4 5"));
console.log(countNumbersInString("a1b2c3d4e5f"));
console.log(countNumbersInString(""));

// Output:
// 4
// 0
// 5
// 0
// 5
// 5
// 0

// Resumo:

// Loop: A forma mais comum de resolver isso é usando um loop (como for) para verificar cada caractere da string individualmente.
// Verificação de Número:
// Usar parseInt() para tentar converter cada caractere em um número inteiro.
// Usar isNaN() para verificar se a conversão foi bem-sucedida (ou seja, se o caractere era um número).
// Contador: Manter um contador para rastrear o número de números encontrados.
// Retorno: Retornar o valor final do contador.
// Conceitos Chave:

// Iteração de Strings: Percorrer cada caractere de uma string usando um loop.
// Conversão de Tipos: Converter strings em números usando parseInt().
// Verificação de NaN: Usar isNaN() para verificar se um valor não é um número.
// Exemplo Prático:

// Se a string for "abc123def45", a função deve retornar 5.
// Dicas:

// Lembre-se de que espaços e outros caracteres não numéricos devem ser ignorados.
// Se atente aos retornos de NaN e como trata-los.

// Exemplo:
// let contador = 0;: Inicializamos um contador para rastrear o número de números encontrados na string.
// for (let i = 0; i < string.length; i++): Usamos um loop for para iterar por cada caractere da string.
// if (!isNaN(parseInt(string[i]))):
// string[i] obtém o caractere atual na posição i.
// parseInt(string[i]) tenta converter o caractere em um número inteiro. Se o caractere for um número, a conversão será bem-sucedida. Se não for, parseInt() retornará NaN (Not a Number).
// isNaN() verifica se o resultado de parseInt() é NaN. !isNaN() verifica se o resultado não é NaN, ou seja, se o caractere é um número.
// contador++;: Se o caractere for um número, incrementamos o contador.
// return contador;: Após percorrer todos os caracteres da string, a função retorna o valor do contador, que representa o número total de números encontrados na string.
