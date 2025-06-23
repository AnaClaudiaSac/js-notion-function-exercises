// Exercício 1: Verificar se uma string vazia é considerada falsa
// Crie uma função chamada isStringEmptyFalsy que verifica se "" é considerado falsy com !.

function isStringEmptyFalsy() {
  return !""; // !"" ? true : false  === true
}

console.log(isStringEmptyFalsy());

// Output:
// true

//----------*********------------------------
// Explicação:
// A string vazia ("") é um dos valores considerados falsy em JavaScript. Isso significa que, em um contexto booleano (como quando usada com !), ela se comporta como false.
// Quando você aplica o operador ! a um valor falsy, ele o transforma em true.
// Então, !"" é avaliado como ! (false), que resulta em true.
// Ao retornar !"" diretamente, sua função está literalmente "provando" que a string vazia é falsy ao retornar true após ser negada.

// Ou fazer a condição ternária valor ? true : false

//---------------------------------------------------------------------------------------------

// Exercício 2: Verificar se o número 0 é falsy
// Crie uma função chamada isZeroFalsy que retorna true se 0 for considerado falsy.

function isZeroFalsy() {
  return !0;
  //return !0 ? true : false;
}

console.log(isZeroFalsy()); // true

// Output:
// true

//---------------------------------------------------------------------------------------------
// Exercício 3: Verificar se null é falsy
// Crie uma função chamada isNullFalsy que retorna true se null for considerado falsy.

function isNullFalsy() {
  return !null;
}

console.log(isNullFalsy());

// Output:
// true

//---------------------------------------------------------------------------------------------

// Exercício 4: Verificar se undefined é falsy
// Crie uma função chamada isUndefinedFalsy que retorna true se undefined for considerado falsy.

function isUndefinedFalsy() {
  return !undefined;
}

console.log(isUndefinedFalsy());

// Output:
// true

//---------------------------------------------------------------------------------------------

// Exercício 5: Verificar se NaN é falsy
// Crie uma função chamada isNaNFalsy que verifica se NaN é considerado falsy.

function isNaNFalsy() {
  return !NaN;
}

console.log(isNaNFalsy());

// Output:
// true

//---------------------------------------------------------------------------------------------

// Exercício 6: Verificar se uma string não-vazia é truthy
// Crie uma função chamada isNonEmptyStringTruthy que retorna true se "Olá" for truthy.

function isNonEmptyStringTruthy() {
  return "olá" ? true : false;
}

console.log(isNonEmptyStringTruthy());

//---------------------------------------------------------------------------------------------

// Exercício 7: Verificar se o número 1 é truthy
// Crie uma função chamada isOneTruthy que retorna true se 1 for considerado truthy.

function isOneTruthy() {
  return 1 ? true : false;
}

console.log(isOneTruthy());

// Output:
// true;

//---------------------------------------------------------------------------------------------

// Exercício 8: Verificar se um array vazio é truthy
// Crie uma função chamada isEmptyArrayTruthy que retorna true se [] for considerado truthy.

function isEmptyArrayTruthy() {
  return [] ? true : false;
}

console.log(isEmptyArrayTruthy());

// Output:
// true

//---------------------------------------------------------------------------------------------

// Exercício 9: Verificar se um objeto vazio é truthy
// Crie uma função chamada isEmptyObjectTruthy que retorna true se {} for considerado truthy.

function isEmptyObjectTruthy() {
  return {} ? true : false;
}

console.log(isEmptyObjectTruthy());

// Output:
// true

//---------------------------------------------------------------------------------------------
// Exercício 10: Usar valor truthy/falsy em uma condição
// Crie uma função chamada checkLogin que recebe um nome de usuário. Se for truthy, retorna "Usuário válido"; se for falsy (ex: string vazia), retorna "Nome não informado".

function checkLogin(user) {
  return user ? "Usuário válido" : "Nome não informado";
}

console.log(checkLogin("Ana"));
console.log(checkLogin(""));

// Output:
// "Usuário válido"
// "Nome não informado"
