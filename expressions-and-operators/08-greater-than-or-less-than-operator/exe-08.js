// Exercício 1: Verificar se um número é maior que outro
// Crie uma função chamada isGreater que recebe dois números e retorna true se o primeiro for maior que o segundo.

function isGreater(number1, number2) {
  return number1 > number2;
}

console.log(isGreater(10, 5));
console.log(isGreater(3, 7));

// Output:
// true
// false

//---------------------------------------------------------------------------------------------
//Exercício 2: Verificar se um número é menor que outro
// Crie uma função chamada isLess que recebe dois números e retorna true se o primeiro for menor que o segundo.

function isLess(number1, number2) {
  return number1 < number2;
}

console.log(isLess(4, 9));
console.log(isLess(10, 3));

// Output:
// true
// false

//---------------------------------------------------------------------------------------------

// Exercício 3: Verificar se uma idade é maior ou igual a 18
// Crie uma função chamada isAdult que recebe uma idade e retorna true se for maior ou igual a 18.

function isAdult(age) {
  return age >= 18;
}

console.log(isAdult(20));
console.log(isAdult(17));

// Output:
// true
// false

//---------------------------------------------------------------------------------------------

// Exercício 4: Verificar se uma nota é menor ou igual a 5
// Crie uma função chamada isLowGrade que recebe uma nota e retorna true se for menor ou igual a 5.

function isLowGrade(grade) {
  return grade <= 5;
}

console.log(isLowGrade(4));
console.log(isLowGrade(6));

// Output:
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

// Output:
// true
// false

//---------------------------------------------------------------------------------------------

// Exercício 7: Verificar se um número está acima de 50
// Crie uma função chamada isAbove50 que recebe um número e retorna true se for maior que 50.

function isAbove50(number) {
  return number > 50;
}

console.log(isAbove50(51));
console.log(isAbove50(50));
console.log(isAbove50(49));
console.log(isAbove50(53));

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

console.log(canVote(18)); // true
console.log(canVote(15)); // false

// Output:
// true
// false

//---------------------------------------------------------------------------------------------

// Exercício 9: Verificar se o número de tentativas é menor ou igual a 3
// Crie uma função chamada canTryAgain que recebe um número de tentativas e retorna true se for menor ou igual a 3.

function canTryAgain(number) {
  return number <= 3;
}

console.log(canTryAgain(2)); // true
console.log(canTryAgain(5)); // false

// Output:
// true
// false

//---------------------------------------------------------------------------------------------

// Exercício 10: Verificar se a temperatura está acima de 30 graus
// Crie uma função chamada isHot que recebe a temperatura e retorna true se for maior que 30.

function isHot(temperature) {
  return temperature > 30;
}

console.log(isHot(32));
console.log(isHot(25));
console.log(isHot(40));
console.log(isHot(18));

// Output:
// true
// false
// true
// false

console.log(isHot(32)); // true
console.log(isHot(25)); // false
