// Exercício 1: Verificar se dois números são iguais (==)
// Crie uma função chamada isEqual que recebe dois números e retorna true se forem iguais, false se forem diferentes.

function isEqual(number1, number2) {
  return number1 === number2;
}

console.log(isEqual(5, 5));
console.log(isEqual(3, 9));
console.log(isEqual(2, 8));
console.log(isEqual(10, 10));

// Output:
// true
// false
// false
// true

//-------------------------------------------------------------------------------------------

// Exercício 2: Verificar se dois números são diferentes (!=)
// Crie uma função chamada isDifferent que recebe dois números e retorna true se forem diferentes, false se forem iguais.

function isDifferent(number1, number2) {
  return number1 != number2;
}

console.log(isDifferent(10, 5));
console.log(isDifferent(7, 7));
console.log(isDifferent(8, 8));
console.log(isDifferent(2, 10));

// Output:
// true
// false
// false
// true

// Exercício 3: Comparar número com string usando == (sem comparar tipos)
// Crie uma função chamada compareLoose que compara o número 5 com a string "5" usando ==.

function compareLoose() {
  return 5 == "5";
}

console.log(compareLoose());

// Output:
// true

//-------------------------------------------------------------------------------------------

// Exercício 4: Comparar número com string usando === (comparando tipo e valor)
// Crie uma função chamada compareStrict que compara 5 === "5" e retorna o resultado.

function compareStrict() {
  return 5 === "5";
}

console.log(compareStrict());

// Output:
// false

//-------------------------------------------------------------------------------------------

// Exercício 5: Comparar dois textos iguais
// Crie uma função chamada isSameText que compara duas strings e retorna true se forem exatamente iguais.

function isSameText(string1, string2) {
  return string1 === string2;
}

console.log(isSameText("Olá", "Olá"));
console.log(isSameText("Olá", "ola"));
console.log(isSameText("Ana", 1));
console.log(isSameText("Anna", "Anna"));

// Output
// true
// false
// false
// true

//-------------------------------------------------------------------------------------------

// Exercício 6: Comparar booleanos com ==
// Crie uma função chamada compareBooleans que compara true == 1 e false == 0.

function compareBooleans() {
  return true == 1 && false == 0;
}

console.log(compareBooleans());

// Output:
// true
// true

//-------------------------------------------------------------------------------------------

// Exercício 7: Verificar se dois tipos são diferentes (!==)
// Crie uma função chamada differentTypes que compara 10 !== "10".

function differentTypes() {
  return 10 !== "10";
}

console.log(differentTypes());

// Output:
// true

//-------------------------------------------------------------------------------------------

// Exercício 8: Comparar null com undefined usando ==
// Crie uma função chamada nullLooseCompare que compara null == undefined.

function nullLooseCompare() {
  return null == undefined;
}

console.log(nullLooseCompare());

// Output:
// true

//-------------------------------------------------------------------------------------------

// Exercício 9: Comparar null com undefined usando ===
// Crie uma função chamada nullStrictCompare que compara null === undefined.

function nullStrictCompare() {
  return null === undefined;
}

console.log(nullStrictCompare());

// Output:
// false

//-------------------------------------------------------------------------------------------

// Exercício 10: Comparar valores com espaços vazios (==)
// Crie uma função chamada emptyStringCompare que compara 0 == "" e 0 === "".

function emptyStringCompare() {
  const compare1 = 0 == "";
  const compare2 = 0 === "";
  return {
    compare1,
    compare2,
  };
}

console.log(emptyStringCompare());

// Output:
// { compare1: true, compare2: false }
