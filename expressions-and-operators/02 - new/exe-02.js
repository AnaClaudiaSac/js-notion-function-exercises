// Exercício 1: Criar um array com new Array()
// Crie uma função chamada createArray que retorna um array vazio usando new Array().

function createArray() {
  const array = new Array();
  return array;
}

console.log(createArray());

// Output:
// []

//---------------------------------------------------------------------------------------

// Exercício 2: Criar um array com 3 frutas usando new Array()
// Crie uma função chamada createFruitArray que retorna um array com "maçã", "banana", "uva" usando new Array().

function createFruitArray() {
  const fruits = new Array("maçã", "banana", "uva");
  return fruits;
}

console.log(createFruitArray());

// Output:
// [ 'maçã', 'banana', 'uva' ]

//---------------------------------------------------------------------------------------

// Exercício 3: Criar um objeto usando new Object()
// Crie uma função chamada createPersonObject que retorna um objeto com as propriedades nome: "Ana" e idade: 30 usando new Object().

function createPersonObject() {
  const person = new Object();
  person.nome = "Ana";
  person.idade = 30;
  return person;
}

console.log(createPersonObject());

// Output:
// { nome: 'Ana', idade: 30 }

//---------------------------------------------------------------------------------------

// Exercício 4: Criar uma data atual usando new Date()
// Crie uma função chamada getCurrentDate que retorna a data atual usando new Date().

function getCurrentDate() {
  const date = new Date();
  return date;
}

console.log(getCurrentDate());

//Output:
// 2025-05-02  T00:49:12.670Z

//---------------------------------------------------------------------------------------

// Exercício 5: Criar uma função construtora Car com new
// Crie uma função construtora Car que recebe marca e modelo. Depois crie um novo carro usando new Car("Toyota", "Corolla") e retorne o objeto.

function newCar() {
  const car = new Object();
  car.brand = "Toyota";
  car.model = "Corolla";
  return car;
}

console.log(newCar());

//---------------------------------------------------------------------------------------

// Exercício 6: Criar um número usando new Number()
// Crie uma função chamada createNumberObject que retorna um número 10 criado com new Number(10).

function createNumberObject() {
  const number = new Number(10);
  return number;
}

console.log(createNumberObject());

// Output:
// [Number: 10]

//---------------------------------------------------------------------------------------

// Exercício 7: Criar uma string usando new String()
// Crie uma função chamada createStringObject que retorna a string "Olá" criada com new String("Olá").

function createStringObject() {
  const greeting = new String("Olá");
  return greeting;
}

console.log(createStringObject());
// [String: 'Olá']

//---------------------------------------------------------------------------------------

// Exercício 8: Criar uma função construtora Book e um objeto livro usando new
// Crie uma função construtora Book que recebe titulo e autor. Depois crie um novo livro com new Book("Título Exemplo", "Autor Exemplo") e retorne o objeto.

function newBook() {
  const book = new Object();
  book.title = "Título Exemplo";
  book.author = "Autor Exemplo";
  return book;
}

console.log(newBook());

// Output:
// { title: 'Título Exemplo', author: 'Autor Exemplo' }

//---------------------------------------------------------------------------------------

// Exercício 9: Criar um array com 5 posições vazias usando new Array(5)
// Crie uma função chamada createEmptySlots que cria um array com 5 posições vazias usando new Array(5).

function createEmptySlots() {
  const array = new Array(5);
  return array;
}

console.log(createEmptySlots());

// Output:

// [ <5 empty items> ]

//---------------------------------------------------------------------------------------

// Exercício 10: Criar uma função construtora Student com método introduce
// Crie uma função construtora Student que recebe nome e curso, e tem um método introduce que imprime "Olá, meu nome é [nome] e estudo [curso]".
// Depois crie um novo estudante com new Student("Gabriel", "JavaScript") e chame o método.

function Student(nome, curso) {
  this.nome = nome;
  this.curso = curso;
  this.introduce = function () {
    console.log(`Olá, meu nome é ${this.nome} e estudo ${this.curso}`);
  };
}

const estudante = new Student("Gabriel", "JavaScript");
estudante.introduce();

// Output:
// Olá, meu nome é Gabriel e estudo JavaScript

//---------------------********--------------------------

// Explicação:
// Resumo do método introduce (em função construtora com new e this):

// Definição: É uma função criada dentro de uma função construtora.
// Uso: Destina-se a ser um método dos objetos instanciados (criados) a partir dessa função construtora usando a palavra-chave new.
// this: Dentro do método introduce, a palavra-chave this se refere ao objeto específico que chamou o método. Isso permite que o método acesse e utilize as propriedades desse objeto.
// Propósito Comum: Geralmente usado para retornar uma string que descreve as características ou propriedades do objeto.

// Exemplo:

// Exemplo:

// JavaScript

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.introduce = function() {
//     return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
//   };
// }

// Criando objetos (instâncias) da função construtora Pessoa usando 'new'
// const pessoa1 = new Pessoa("Alice", 30);
// const pessoa2 = new Pessoa("Bob", 25);

// Chamando o método 'introduce' nos objetos
// console.log(pessoa1.introduce()); // Saída: Olá, meu nome é Alice e eu tenho 30 anos.
// console.log(pessoa2.introduce()); // Saída: Olá, meu nome é Bob e eu tenho 25 anos.

// Explicação do exemplo:

// function Pessoa(nome, idade) { ... }: Define uma função construtora chamada Pessoa que recebe nome e idade como parâmetros.
// this.nome = nome; e this.idade = idade;: Dentro da função construtora, this se refere ao novo objeto que está sendo criado. Atribuímos os valores dos parâmetros às propriedades nome e idade desse objeto.
// this.introduce = function() { ... };: Criamos um método chamado introduce como uma propriedade do objeto que está sendo construído. Essa função interna usa this.nome e this.idade para acessar as propriedades específicas do objeto que chamar o método e retorna uma string de apresentação.
// const pessoa1 = new Pessoa("Alice", 30);: A palavra-chave new cria um novo objeto vazio, vincula this a esse novo objeto e então chama a função construtora Pessoa com os argumentos fornecidos. O resultado é armazenado na variável pessoa1. O mesmo acontece para pessoa2.
// console.log(pessoa1.introduce());: Chamamos o método introduce no objeto pessoa1. Dentro desse método, this se refere a pessoa1, então this.nome é "Alice" e this.idade é 30.
// Portanto, nesse contexto de funções construtoras, introduce é um método personalizado que permite que cada objeto criado "se apresente" usando suas próprias propriedades.
