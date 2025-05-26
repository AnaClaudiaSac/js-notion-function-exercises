// Exercício 1: Comparar número com string usando ===
// Crie uma função chamada compareNumberStringStrict que compara 10 === "10" e retorna o resultado.

function compareNumberStringStrict() {
  return 10 === "10";
}

console.log(compareNumberStringStrict());

// Output:
// false

//---------------------------------------------------------------------------------------------

// Exercício 2: Verificar se dois números são estritamente iguais (===)
// Crie uma função chamada isStrictEqual que recebe dois números e retorna true se forem iguais em valor e tipo.

function isStrictEqual(number1, number2) {
  return number1 === number2;
}

console.log(isStrictEqual(5, 5));
console.log(isStrictEqual(5, "5"));
console.log(isStrictEqual("8", "8"));
console.log(isStrictEqual(8, 2));

// Output:
// true
// false
// true
// false

//---------------------------------------------------------------------------------------------

// Exercício 3: Verificar se dois textos são estritamente diferentes (!==)
// Crie uma função chamada isStrictNotEqual que compara duas strings e retorna true se forem diferentes em valor ou tipo.

function isStrictNotEqual(string1, string2) {
  return string1 !== string2;
}

console.log(isStrictNotEqual("abc", "ABC"));
console.log(isStrictNotEqual("A", "A"));
console.log(isStrictNotEqual("Anna", "Ana"));
console.log(isStrictNotEqual("Javascript", "Javali"));

// Output:
// true
// false
// true
// true

//---------------------------------------------------------------------------------------------

// Exercício 4: Comparar booleano com número usando ===
// Crie uma função chamada compareBooleanNumber que compara true === 1 e retorna o resultado.

function compareBooleanNumber() {
  return true === 1;
}

console.log(compareBooleanNumber()); // false

//Output:
//false

//---------------------------------------------------------------------------------------------

// Exercício 5: Comparar dois valores do mesmo tipo com !==
// Crie uma função chamada sameTypeDifferentValue que compara 7 !== 8.

function sameTypeDifferentValue() {
  return 7 !== 8;
}

console.log(sameTypeDifferentValue());

// Output:
// true

//---------------------------------------------------------------------------------------------

// Exercício 6: Verificar se null é estritamente igual a undefined
// Crie uma função chamada nullStrictCheck que retorna o resultado de null === undefined.

function nullStrictCheck() {
  return null === undefined;
}

console.log(nullStrictCheck());

// Output:
// false

//---------------------------------------------------------------------------------------------

// Exercício 7: Comparar duas strings exatamente iguais com ===
// Crie uma função chamada compareTextsStrict que compara "javascript" === "javascript".

function compareTextsStrict() {
  return "javascript" === "javascript";
}

console.log(compareTextsStrict());

// Output:
// true

//---------------------------------------------------------------------------------------------

// Exercício 8: Comparar uma variável number com uma string numérica usando !==
// Crie uma função chamada strictNotEqualExample que compara 20 !== "20".

function strictNotEqualExample() {
  return 20 !== "20";
}

console.log(strictNotEqualExample()); // true

// Output:
// true

//---------------------------------------------------------------------------------------------

// Exercício 9: Verificar se duas variáveis booleanas são estritamente iguais
// Crie uma função chamada booleanStrictCompare que compara true === false.

function booleanStrictCompare() {
  return true === false;
}

console.log(booleanStrictCompare()); // false

//-------------------------------------------------------------------------------------------

// Exercício 10: Verificar se dois valores do mesmo tipo e valor são estritamente diferentes
// Crie uma função chamada sameTypeSameValue que compara 100 !== 100.

function sameTypeSameValue() {
  return 100 !== 100;
}

console.log(sameTypeSameValue());

// Output:
// false
