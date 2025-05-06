// Exercício 1: Verificar o tipo de um número
// Crie uma função chamada checkTypeNumber que recebe um número e retorna o tipo dele usando typeof.

function checkTypeNumber(number) {
  return typeof number;
}

console.log(checkTypeNumber(10));

// Output:
// number

//-------------*********----------------------

// Explicação:
// Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.

//---------------------------------------------------------------------------------------

// Exercício 2: Verificar o tipo de uma string
// Crie uma função chamada checkTypeString que recebe uma string e retorna o tipo dela usando typeof.

function checkTypeString(string) {
  return typeof string;
}

console.log(checkTypeString("Olá"));
console.log(checkTypeString("Javascript"));
console.log(checkTypeString(22));
console.log(checkTypeString({}));
console.log(checkTypeString(true));
console.log(checkTypeString(() => {}));
console.log(checkTypeString());
console.log(checkTypeString("Happy"));

// Output:
// string
// string
// number
// object
// boolean
// function
// undefined
// string

//---------------------------------------------------------------------------------------

// Exercício 3: Verificar o tipo de uma variável booleana
// Crie uma função chamada checkTypeBoolean que recebe um valor booleano e retorna o tipo usando typeof.

function checkTypeBoolean(boolean) {
  return typeof boolean;
}

console.log(checkTypeBoolean(true));
console.log(checkTypeBoolean(false));

// Output:
// boolean
// boolean

//---------------------------------------------------------------------------------------

// Exercício 4: Criar um objeto pessoa e deletar a propriedade "idade"
// Crie uma função chamada deleteAge que cria um objeto { nome: "Ana", idade: 30 }, deleta a propriedade idade usando delete, e retorna o objeto final.

function deleteAge() {
  const person = {
    name: "Ana",
    age: 30,
  };
  delete person.age;
  return person;
}

console.log(deleteAge());

// Output:
// { name: 'Ana' }

//---------------------------------------------------------------------------

// Exercício 5: Verificar o tipo de uma variável indefinida
// Crie uma função chamada checkTypeUndefined que declara uma variável sem valor e retorna o tipo dela.

function checkTypeUndefined() {
  let brain;
  return typeof brain;
}

console.log(checkTypeUndefined());

// Output:
// undefined

//---------------------------------------------------------------------------------------

// Exercício 6: Criar um objeto carro e deletar a propriedade "marca"
// Crie uma função chamada deleteBrand que cria um objeto { marca: "Toyota", modelo: "Corolla" }, deleta a propriedade marca, e retorna o objeto atualizado.

function deleteBrand() {
  const car = {
    brand: "Toyota",
    model: "Corolla",
  };
  delete car.brand;
  return car;
}

console.log(deleteBrand());

// Output:
// { model: 'Corolla' }

//---------------------------------------------------------------------------------------

// Exercício 7: Verificar o tipo de um array
// Crie uma função chamada checkTypeArray que cria um array e retorna o tipo usando typeof.

function checkTypeArray() {
  const fruits = ["maçã", "banana", "mamão", "abacaxi"];

  return typeof fruits;
}

console.log(checkTypeArray());

// Output:
// object

//---------------------------------------------------------------------------------------

// Exercício 8: Criar um objeto livro e deletar a propriedade "autor"
// Crie uma função chamada deleteAuthor que cria um objeto { titulo: "Livro A", autor: "João" }, deleta a propriedade autor, e retorna o objeto atualizado.

function deleteAuthor() {
  const book = {
    title: "Livro A",
    author: "João",
  };
  delete book.author;
  return book;
}

console.log(deleteAuthor()); // { titulo: "Livro A" }

// Output:
// { title: 'Livro A' }

//-------------------------------------------------------------------------------------------

// Exercício 9: Verificar o tipo de uma função
// Crie uma função chamada checkTypeFunction que retorna o tipo de uma função qualquer usando typeof.

function checkTypeFunction() {
  return typeof function () {};
}
console.log(checkTypeFunction());

// Output:
// function

//-------------------------------------------------------------------------------------------

// Exercício 10: Criar um objeto aluno e deletar a propriedade "nota"
// Crie uma função chamada deleteGrade que cria um objeto { nome: "Carlos", nota: 9 }, deleta a propriedade nota, e retorna o objeto atualizado.

function deleteGrade() {
  const student = {
    name: "Carlos",
    grade: 9,
  };
  delete student.grade;
  return student;
}

console.log(deleteGrade());

// Output:
// { name: 'Carlos' }

//-------------------------------------------------------------------------------------------

// Explicação:

// Resumo sobre typeof e delete em JavaScript
// typeof:

// É um operador unário que retorna uma string indicando o tipo de dado de um operando (valor ou expressão).
// Ajuda a identificar o tipo primitivo de uma variável ou o tipo de um objeto.
// Os valores de retorno comuns incluem: "undefined", "boolean", "number", "string", "bigint", "symbol", "object", e "function".
// Comportamentos Específicos:
// typeof null retorna "object" (considerado um bug histórico, mas mantido por compatibilidade).
// typeof [] (array) retorna "object".
// typeof {} (objeto literal) retorna "object".
// typeof function() {} retorna "function".

// Delete:

// É um operador unário usado para remover uma propriedade de um objeto.
// Retorna true se a operação for bem-sucedida (ou se a propriedade não existir) e false se a propriedade não puder ser deletada.
// Restrições Importantes:
// Não pode deletar variáveis declaradas com var, let ou const.
// Não pode deletar propriedades predefinidas de objetos embutidos (como métodos de Math, Array.prototype, etc.).
// Em modo estrito ("use strict"), tentar deletar propriedades não configuráveis lançará um TypeError.
// Comportamento em Arrays: Usar delete em um elemento de array remove o valor, mas não altera o comprimento do array e deixa um "buraco" (empty slot). É geralmente preferível usar métodos como splice() para remover elementos de arrays e ajustar o comprimento.
// Em essência, typeof serve para inspecionar o tipo de um valor, enquanto delete tenta remover propriedades de objetos (com ressalvas importantes sobre o que pode ou não ser deletado).
