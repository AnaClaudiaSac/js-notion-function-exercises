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

// Exercício 4: Verificar se uma nota é menor ou igual a 5
// Crie uma função chamada isLowGrade que recebe uma nota e retorna true se for menor ou igual a 5.

function isLowGrade(notice) {
  return notice <= 5;
}

console.log(isLowGrade(4)); // true
console.log(isLowGrade(6)); // false
console.log(isLowGrade(5));
console.log(isLowGrade(8));

// Output:
// true
// false
// true
// false

//---------------------------------------------------------------------------------------------

// Exercício 5: Verificar se dois valores são iguais ou não com >= e <=
// Crie uma função chamada isEqualOrMore que retorna true se 10 >= 10.

function isEqualOrMore() {
  return 10 >= 10;
}

console.log(isEqualOrMore());

// Output:
// true

//---------------------------------------------------------------------------------------------

// Exercício 6: Verificar se um número está abaixo de 100
// Crie uma função chamada isBelow100 que recebe um número e retorna true se for menor que 100.

function isBelow100(number) {
  return number < 100;
}

console.log(isBelow100(99));
console.log(isBelow100(100));
console.log(isBelow100(102));
console.log(isBelow100(88));

// Output;
// true
// false
// false
// true

//---------------------------------------------------------------------------------------------

// Exercício 7: Verificar se um número está acima de 50
// Crie uma função chamada isAbove50 que recebe um número e retorna true se for maior que 50.

function isAbove50(number) {
  return number > 50;
}

console.log(isAbove50(51));
console.log(isAbove50(50));
console.log(isAbove50(48));
console.log(isAbove50(82));

// Output:
// true
// false
// false
// true

//---------------------------------------------------------------------------------------------

// Exercício 8: Verificar se uma pessoa pode votar
// Crie uma função chamada canVote que recebe a idade e retorna true se a idade for maior ou igual a 16.

function canVote(age) {
  return age >= 16;
}

console.log(canVote(18));
console.log(canVote(15));
console.log(canVote(12));
console.log(canVote(22));

// Output:
// true
// false
// false
// true

//---------------------------------------------------------------------------------------------

// Exercício 9: Verificar se o número de tentativas é menor ou igual a 3
// Crie uma função chamada canTryAgain que recebe um número de tentativas e retorna true se for menor ou igual a 3.

function canTryAgain(number) {
  return number <= 3;
}

console.log(canTryAgain(2)); // true
console.log(canTryAgain(5)); // false
console.log(canTryAgain(8));
console.log(canTryAgain(2));

// Output:
// true
// false
// false
// true

//---------------------------------------------------------------------------------------------

// Exercício 10: Verificar se a temperatura está acima de 30 graus
// Crie uma função chamada isHot que recebe a temperatura e retorna true se for maior que 30.

function isHot(temperature) {
  return temperature > 30;
}

console.log(isHot(32)); // true
console.log(isHot(25)); // false
console.log(isHot(40));
console.log(isHot(18));

// Output:
// true
// false
// true
// false

//---------------------------------------------------------------------------------------------
