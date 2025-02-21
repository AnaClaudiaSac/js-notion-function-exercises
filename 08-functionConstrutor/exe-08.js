// Exercício 1: Criar um construtor de Pessoa

// Crie uma função construtora chamada `Person` que recebe **nome** e **idade** como parâmetros e cria um objeto com essas propriedades.

function Person(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const anna = new Person("Anna", 49);
console.log(anna);

// Output:

//Person { nome: 'Anna', idade: 49 }

//-----------------------------------------------------------------

// Exercício 2: Criar um método dentro do construtor

// Modifique a função construtora `Person` para incluir um método chamado `introduce`, que exibe no console:

// `"Olá, meu nome é [nome] e tenho [idade] anos."`

function Person(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.introduce = function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  };
}

const ana = new Person("Ana", 28);
const gabriel = new Person("Gabriel", 29);
ana.introduce();
gabriel.introduce();

// Output:
//Olá, meu nome é Ana e tenho 28 anos.
//Olá, meu nome é Gabriel e tenho 29 anos.

//------------------------------------------------------------------------------

// Exercício 3: Criar um construtor de Produto

// Crie uma função construtora chamada `Product` que recebe **nome**, **preço** e **quantidade** como parâmetros e cria um objeto com essas propriedades.

function Product(nome, preco, quantidade) {
  this.nome = nome;
  this.preco = preco;
  this.quantidade = quantidade;
}

const ventilador = new Product("Ventilador", 280, 8);
console.log(ventilador);

// Output:
// Product { nome: 'Ventilador', preco: 280, quantidade: 8 }

//------------------------------------------------------------------------------

// Exercício 4: Adicionar um método para calcular o valor total do estoque**

// Modifique `Product` para incluir um método chamado `totalValue` que retorna o valor total do estoque multiplicando **preço × quantidade**.

function Product(nome, preco, quantidade) {
  this.nome = nome;
  this.preco = preco;
  this.quantidade = quantidade;
  this.totalValue = function () {
    return this.preco * this.quantidade;
  };
}

const ventiladores = new Product("Ventiladores", 280, 8);
console.log(ventiladores);
console.log(`Valor total do estoque: R$ ${ventiladores.totalValue()}`);

// Output :
// Product { nome: 'Ventilador', preco: 280, quantidade: 8 }
// Valor total do estoque: R$ 2240

//------------------------------------------------------------------------
//Exercício 5: Criar um construtor de Conta Bancária**

// Crie uma função construtora chamada `BankAccount` que recebe **titular**, **saldo inicial** e inclui métodos para **depositar** e **sacar dinheiro**.

function BankAccount(titular, saldoInicial) {
  this.titular = titular;
  this.saldo = saldoInicial; // Corrigido para this.saldo

  this.depositar = function (valor) {
    this.saldo >= valor;
    console.log(
      `Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`
    );
  };

  this.sacar = function (valor) {
    if (valor <= this.saldo) {
      this.saldo <= valor;
      console.log(
        `Saque de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`
      );
    } else {
      console.log(
        `Saldo insuficiente para saque de R$ ${valor}. Saldo atual: R$ ${this.saldo}`
      );
    }
  };
}

const conta = new BankAccount("Anna", 1800);
console.log(conta);

conta.depositar(500);
conta.sacar(300);
conta.sacar(1500);

// Output:
// BankAccount { titular: 'Anna', saldo: 1800 }
// Depósito de R$ 500 realizado. Saldo atual: R$ 2300
// Saque de R$ 300 realizado. Saldo atual: R$ 2000
// Saque de R$ 1500 realizado. Saldo atual: R$ 500

//------------------------------------------------------------------------------------------
//Exercício 6: Criar um construtor para representar um Retângulo

// Crie uma função construtora chamada `Rectangle` que recebe **largura** e **altura** e inclui um método chamado `area` que retorna a área do retângulo.

function Rectangle(largura, altura) {
  this.largura = largura;
  this.altura = altura;
  this.area = function () {
    return this.largura * this.altura;
  };
}

const rectangle = new Rectangle(4, 8);
console.log(rectangle);
console.log(`a area do retangulo é: ${rectangle.area()}`);

//-------------------------------------------------------------------------------------------
// Exercício 7: Criar um construtor para representar um Carro**

// Crie uma função construtora chamada `Car` que recebe **marca**, **modelo** e **ano** como parâmetros.

// Adicione um método chamado `info` que retorna uma string com as informações do carro.

function Car(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.info = function () {
    return `${this.marca}  ${this.modelo}  ${this.ano}`;
  };
}

const car = new Car("Porche", "911", "2012");
console.log(car);
console.log(
  `A marca do carro é ${car.marca} o modelo é ${car.modelo} e o ano é ${car.ano}`
);

//-------------------------------------------------------------------------------------------

// Exercício 8: Criar um construtor para representar um Aluno**

// Crie uma função construtora chamada `Student` que recebe **nome**, **curso** e **notas** (um array de números).

// Adicione um método chamado `average` que calcula e retorna a média das notas.

function Student(nome, curso, notas) {
  this.nome = nome;
  this.curso = curso;
  this.notas = notas;
  this.average = function () {
    let total = 0;
    for (let i = 0; i < this.notas.length; i++) {
      total += this.notas[i];
    }
    return total / this.notas.length;
  };
}

const aluno = new Student("João", "Matemática", [8, 10, 8, 10]);
console.log(aluno);
console.log(`A média das notas de ${aluno.nome} é: ${aluno.average()}`);

// Output:

// nome: 'João',
// curso: 'Matemática',
// notas: [ 8, 10, 8, 10 ],

// A média das notas de João é: 9

//-------------------------------------------------------------------------------------------

// Exercício 9: Criar um construtor para representar um Livro

// Crie uma função construtora chamada `Book` que recebe **título**, **autor** e **ano de publicação.

// Adicione um método chamado `getSummary` que retorna uma string com as informações do livro.

function Book(titulo, autor, ano) {
  this.titulo = titulo;
  this.autor = autor;
  this.ano = ano;
  this.getSummary = function () {
    return ` O livro de sucesso com o título ${this.titulo} da autora ${this.autor} ano de pulbicação ${this.ano}`;
  };
}

const livro = new Book("Vontade e Persistência", "Anna", "2025.");
console.log(livro);
console.log(livro.getSummary());
console.log(
  ` O livro com o título, autora e ano de publicação:  ${livro.getSummary()} `
);

// Output:
// O livro com o título, autora e ano de publicação:  Vontade e Persistência  Anna  2025
//O livro de sucesso com o título Vontade e Persistência da autora Anna ano de pulbicação 2025.

//-------------------------------------------------------------------------------------------
// Exercício 10: Criar um construtor para representar um Filme

// Crie uma função construtora chamada `Movie` que recebe **título**, **diretor** e **ano de lançamento**.

// Adicione um método chamado `play` que exibe no console:

// `"Reproduzindo o filme [título] dirigido por [diretor]."`

function Movie(titulo, diretor, ano) {
  this.titulo = titulo;
  this.diretor = diretor;
  this.ano = ano;
  this.play = function () {
    return `O filme ${this.titulo} dirigido por ${this.diretor} no ano de ${this.ano}.`;
  };
}

const filme = new Movie(
  "Batman Cavaleiro das Trevas",
  "Christopher Nolan",
  "2008"
);

console.log(filme.play());

// Output:
// O filme Batman Cavaleiro das Trevas dirigido por Christopher Nolan no ano de 2008.
