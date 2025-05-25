// Exercício 1: Verificar se um número é par ou ímpar
// Crie uma função chamada checkEvenOdd que recebe um número e retorna "Par" se for par, ou "Ímpar" se for ímpar, usando operador ternário.

function checkEvenOdd(number) {
  return number % 2 === 0 ? "Par" : "Ímpar";
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(11));
console.log(checkEvenOdd(8));

// Output:
// Par
// Ímpar
// Ímpar
// Par

//---------------------------------------------------------------------------------------------
// Exercício 2: Verificar se a idade permite dirigir
// Crie uma função chamada canDrive que recebe uma idade e retorna "Pode dirigir" se for maior ou igual a 18, senão "Não pode dirigir".

function canDrive(age) {
  return age >= 18 ? "Pode dirigir" : "Não pode dirigir";
}

console.log(canDrive(20));
console.log(canDrive(16));

// Output:
// Pode dirigir
// Não pode dirigir

//---------------------------------------------------------------------------------------------

// Exercício 3: Verificar se a nota é suficiente para passar
// Crie uma função chamada checkGrade que recebe uma nota e retorna "Aprovado" se for maior ou igual a 7, senão "Reprovado".

function checkGrade(notice) {
  return notice >= 7 ? "Aprovado" : "Reprovado";
}

console.log(checkGrade(8));
console.log(checkGrade(6));

// Output:
// Aprovado
// Reprovado

//---------------------------------------------------------------------------------------------

// Exercício 4: Verificar se o número é positivo ou negativo
// Crie uma função chamada checkSign que recebe um número e retorna "Positivo" se for maior ou igual a 0, senão "Negativo".

function checkSign(number) {
  return number >= 0 ? "Positivo" : "Negativo";
}

console.log(checkSign(3));
console.log(checkSign(-1));

// Output:
// Positivo
// Negativo

//---------------------------------------------------------------------------------------------

// Exercício 5: Verificar se a pessoa pode votar
// Crie uma função chamada canVote que recebe a idade e retorna "Pode votar" se for maior ou igual a 16, senão "Não pode votar".

function canVote(age) {
  return age >= 16 ? "Pode votar" : "Não pode votar";
}

console.log(canVote(18));
console.log(canVote(15));

// Output:
// Pode votar
// Não pode votar

//---------------------------------------------------------------------------------------------

// Exercício 6: Verificar se o acesso é permitido ou negado
// Crie uma função chamada checkAccess que recebe temPermissao (booleano) e retorna "Acesso liberado" se for true, senão "Acesso negado".

function checkAccess(hasPermission) {
  return hasPermission === true ? "Acesso liberado" : "Acesso negado";
}

console.log(checkAccess(true));
console.log(checkAccess(false));

// Output:
// Acesso liberado
// Acesso negado

//---------------------------------------------------------------------------------------------

// Exercício 7: Verificar se o usuário está online
// Crie uma função chamada getStatus que recebe online (booleano) e retorna "Online" ou "Offline".

function getStatus(online) {
  return online === true ? "Online" : "Offline";
}

console.log(getStatus(true));
console.log(getStatus(false));

// Output:
// Online;
// Offline;

//---------------------------------------------------------------------------------------------

// Exercício 8: Verificar se o número é maior que 100
// Crie uma função chamada checkNumberSize que recebe um número e retorna "Grande" se for maior que 100, senão "Pequeno".

function checkNumberSize(number) {
  return number > 100 ? "Grande" : "Pequeno";
}

console.log(checkNumberSize(150));
console.log(checkNumberSize(50));

// Output:
// Grande
// Pequeno

//---------------------------------------------------------------------------------------------

// Exercício 9: Verificar se o nome informado é "admin"
// Crie uma função chamada checkUserRole que recebe um nome de usuário e retorna "Administrador" se for "admin", senão "Usuário comum".

function checkUserRole(user) {
  return user === "admin" ? "Administrador" : "Usuário comum";
}

console.log(checkUserRole("admin"));
console.log(checkUserRole("ana"));

// Output:
// Administrador
// Usuário comum

//---------------------------------------------------------------------------------------------

// Exercício 10: Verificar se um número é múltiplo de 5
// Crie uma função chamada isMultipleOfFive que recebe um número e retorna "Múltiplo de 5" ou "Não é múltiplo de 5".

function isMultipleOfFive(number) {
  return number % 5 === 0 ? "Múltiplo de 5" : "Não é múltiplo de 5";
}

console.log(isMultipleOfFive(25));
console.log(isMultipleOfFive(12));

// Output:
// Múltiplo de 5
// Não é múltiplo de 5
