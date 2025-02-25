// Exercício 1: Converter número para string
// Crie uma função chamada numberToString que recebe um número como parâmetro e retorna esse número convertido para string.

function numberToString(number) {
  return String(number);
}

console.log(typeof numberToString(2));
console.log(numberToString(22));
console.log(numberToString(8));

// Output:
// string
// 22
// 8

//-----------------------------------------------------------------------------------

// Exercício 2: Converter string para número
// Crie uma função chamada stringToNumber que recebe um texto numérico como parâmetro e retorna esse valor convertido para número.

function stringToNumber(string) {
  return Number(string);
}
console.log(typeof stringToNumber("2"));
console.log(stringToNumber("22"));
console.log(stringToNumber("8"));

// Output:
// 22
// 8

//-----------------------------------------------------------------------------------

// Exercício 3: Converter booleano para string
// Crie uma função chamada booleanToString que recebe um valor booleano (true ou false) e retorna esse valor convertido para string.

function booleanToString(booleano) {
  return String(booleano);
}

console.log(typeof booleanToString(true));
console.log(booleanToString(false));
console.log(booleanToString(true));

// Outuput:
// string
// false
// true

//-----------------------------------------------------------------------------------

// Exercício 4: Converter string para booleano
// Crie uma função chamada stringToBoolean que recebe uma string ("true" ou "false") e retorna o valor booleano correspondente.

function stringToBoolean(string) {
  return Boolean(string);
}

console.log(typeof stringToBoolean("true"));
console.log(stringToBoolean("false"));
console.log(stringToBoolean("true"));

// Output:
// boolean
// true
// true

//-----------------------------------------------------------------------------------

// Exercício 5: Somar um número com uma string numérica
// Crie uma função chamada sumStringNumber que recebe um número e uma string numérica, soma os dois e retorna o resultado.

// Dica: Observe se ocorre coerção implícita ou conversão explícita.

function sumStringNumber(number, string) {
  return number + string;
}
console.log(sumStringNumber(2, "4"));

//Output:
// 6

/************************************/

function sumStringNumber(number1, string) {
  return number1 + Number(string);
}

console.log(sumStringNumber(2, "2"));

//Output:
//4

//-----------------------------------------------------------------------------------

// Exercício 6: Multiplicar um número por uma string numérica
// Crie uma função chamada multiplyStringNumber que recebe um número e uma string numérica, multiplica os dois e retorna o resultado.

// Dica: Veja o que acontece quando a string não contém apenas números.

function multiplyStringNumber(number, string) {
  return number * string;
}

console.log(multiplyStringNumber(2, "4Anna"));
console.log(multiplyStringNumber(8, "8"));

// Output:
// NaN
// 64

//-----------------------------------------------------------------------------------

function multiplyStringNumber(number, string) {
  return number * Number(string);
}
console.log(multiplyStringNumber(6, "8Anna"));
console.log(multiplyStringNumber(8, "2"));

// Output:
// NaN
// 16

//-----------------------------------------------------------------------------------

// Exercício 7: Converter um valor null ou undefined para número
// Crie uma função chamada convertNullUndefined que recebe um valor (null ou undefined) e tenta convertê-lo para número.

// Dica: Teste Number(null) e Number(undefined).

function convertNullUndefined(value) {
  return Number(value);
}

console.log(convertNullUndefined(null));
console.log(convertNullUndefined(undefined));
console.log(convertNullUndefined(88));

// Output:
// 0
// NaN
// 88

/******************************************** */

function convertNullUndefined(undefined) {
  return Number(undefined);
}

console.log(convertNullUndefined(8));

// Output:
// 8

//-------------------------------------------------------------------------------------

// Exercício 8: Testar conversão de um array para número
// Crie uma função chamada arrayToNumber que recebe um array com um único número e retorna sua conversão para número.

// Dica: Veja o que acontece com Number([10]) e Number([10, 20]).

function arrayToNumber(array) {
  return Number(array);
}

console.log(arrayToNumber([10]));
console.log(arrayToNumber([10, 20]));

// Output:
// 10
// NaN

//-----------------------------------------------------------------------------------
// Exercício 9: Testar coerção de tipos com == e ===
// Crie uma função chamada compareValues que recebe dois valores e retorna:

// true se os valores forem iguais com ==

// true se os valores forem iguais com ===

// Teste os casos:

// "5" e 5

// null e undefined

// 0 e false

// 1 e true

// Dica: O operador == faz coerção implícita, enquanto === compara tipos e valores.

function compareValues(value1, value2) {
  if (value1 == value2 && value1 === value2) {
    return true;
  } else {
    return false;
  }
}

console.log(compareValues(5, 5));
console.log(compareValues("5", 5));
console.log(compareValues("8", "8"));
console.log(compareValues(null, undefined));
console.log(compareValues(0, false));
console.log(compareValues(1, true));
console.log(compareValues(true, true));

// Output
// true
// false
// true
// false
// false
// false
// true

//-----------------------------------------------------------------------------------

// Exercício 90: Testar conversão de objeto para string
// Crie uma função chamada objectToString que recebe um objeto e retorna sua conversão para string.

// Dica: Teste String({name: "Gabriel"}) e veja o que acontece.

function objectToString(objeto) {
  return String(objeto);
}

console.log(String({ name: "Gabriel" }));

// Output:
// [object Object]
