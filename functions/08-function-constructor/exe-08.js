// Exercício 1: Criar um construtor de Pessoa

// Crie uma função construtora chamada `Person` que recebe **nome** e **idade** como parâmetros e cria um objeto com essas propriedades.

function Person(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const anna = new Person("Anna", 49);
console.log(anna);

//-------------------------********------------------------------

function Person1(name, age) {
  this.name = name;
  this.age = age;
}
const anna1 = new Person1("Anna", 49);
console.log(anna1);

// Output:

//Person { nome: 'Anna', idade: 49 }

//Person1 { name: 'Anna', age: 49 }

// Melhoria de explicação:

// O que é um Function Constructor?

// Em JavaScript, funções construtoras são usadas para criar objetos. Elas servem como um modelo para a criação de múltiplos objetos com propriedades e métodos semelhantes.
// A palavra-chave new é usada para chamar uma função construtora, criando uma nova instância de um objeto.
// Como Funcionam

// Definição:
// Você define uma função que servirá como o construtor.
// Dentro da função, você usa a palavra-chave this para referenciar o novo objeto que será criado.
// Você atribui propriedades e métodos a this.
// Criação de Objetos:
// Você usa a palavra-chave new seguida pelo nome da função construtora para criar um novo objeto.
// Cada objeto criado dessa forma terá as propriedades e métodos definidos na função construtora.

//--------------------------------------------------------------------------------------

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

//-------------------------********------------------------------

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    return `Olá, meu nome é ${this.name} e tenho ${this.age} anos.`;
  };
}

const anaClaudia = new Person("Anna", 28);
const gabrielGomes = new Person("Gabriel", 29);

console.log(anaClaudia.introduce());
console.log(gabrielGomes.introduce());

// Output:
// Olá, meu nome é Ana e tenho 28 anos.
// Olá, meu nome é Gabriel e tenho 29 anos.
// Olá, meu nome é Anna e tenho 28 anos.
// Olá, meu nome é Gabriel e tenho 29 anos.

// Melhoria:
// Agora a função introduce retorna a saudação em vez de imprimir diretamente no console. Isso dá mais flexibilidade.

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

//-------------------------********------------------------------

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

const iceCream = new Product("Ice cream", 80, 11);
console.log(iceCream);

// Output:
// Product { nome: 'Ventilador', preco: 280, quantidade: 8 }

// Product {
// nome: 'ice cream',
// preco: 80,
// quantidade: 11,

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

//-------------------------********------------------------------

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.totalValue = function () {
    return `O valor total do estoque de ${this.name} é R$ ${
      this.price * this.quantity
    }`;
  };
}

const pool = new Product("Pool", 280, 11);
console.log(pool.totalValue());

// Output :
// Product { nome: 'Ventilador', preco: 280, quantidade: 8 }
// Valor total do estoque: R$ 2240

//O valor total do estoque de Pool é R$ 3080

// Melhoria:
// Melhorou o retorno da função para incluir o nome do produto.

//--------------------------------------------------------------------------------------

//Exercício 5: Criar um construtor de Conta Bancária**

// Crie uma função construtora chamada `BankAccount` que recebe **titular**, **saldo inicial** e inclui métodos para **depositar** e **sacar dinheiro**.

function BankAccount(holder, initialBalance) {
  this.holder = holder;
  this.balance = initialBalance;

  this.deposit = function (amount) {
    this.balance += amount;
    console.log(
      `Depósito de R$ ${amount} realizado. Saldo atual: R$ ${this.balance}`
    );
  };

  this.withdraw = function (amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `Saque de R$ ${amount} realizado. Saldo atual: R$ ${this.balance}`
      );
    } else {
      console.log(
        `Saldo insuficiente para saque de R$ ${amount}. Saldo atual: R$ ${this.balance}`
      );
    }
  };
}

const account = new BankAccount("Anna", 1800);
account.deposit(500);
account.withdraw(300);
account.withdraw(2500);

//Output:

// Depósito de R$ 500 realizado. Saldo atual: R$ 2300
// Saque de R$ 300 realizado. Saldo atual: R$ 2000
// Saldo insuficiente para saque de R$ 2500. Saldo atual: R$ 2000

//--------------------------------------------------------------------------------------

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

//-------------------------********------------------------------

function Rectangle1(width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rectangle1 = new Rectangle1(4, 8);
console.log(`A área do retângulo é: ${rectangle1.area()}`);

// Otput:
// Rectangle { largura: 4, altura: 8, area: [Function (anonymous)] }
// a area do retangulo é: 32

// A área do retângulo é: 32

//--------------------------------------------------------------------------------------

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

//-------------------------********------------------------------

function Car1(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.info = function () {
    return `Carro: ${this.brand} ${this.model}, Ano: ${this.year}`;
  };
}

const car1 = new Car1("Porsche", "911", 2012);
console.log(car1.info());

// Output:
// Car {
//   marca: 'Porche',
//   modelo: '911',
//   ano: '2012',
//   info: [Function (anonymous)]
// }

// A marca do carro é Porche o modelo é 911 e o ano é 2012

// Carro: Porsche 911, Ano: 2012

// Melhoria:
// Adicionou no segundo exercício a função info para exibir uma mensagem mais clara.

//-------------------------------------------------------------------------------------

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

//-------------------------********------------------------------

function Student(name, course, grades) {
  this.name = name;
  this.course = course;
  this.grades = grades;
  this.average = function () {
    let total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  };
}

const student = new Student("João", "Matemática", [8, 10, 8, 10]);
console.log(`A média das notas de ${student.name} é: ${student.average()}`);

// Output:

// nome: 'João',
// curso: 'Matemática',
// notas: [ 8, 10, 8, 10 ],

//   name: 'João',
//   course: 'Matemática',
//   grades: [ 8, 10, 8, 10 ],

// A média das notas de João é: 9

// Melhoria:
// O código pode ser melhorado substituindo o for por reduce para calcular a média de forma mais eficiente.

//-------------------------------------------------------------------------------------

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

//-------------------------********------------------------------

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `O livro "${this.title}" foi escrito por ${this.author} em ${this.year}.`;
  };
}

const book = new Book("Vontade e Persistência", "Anna", 2025);
console.log(book.getSummary());

// Output:
// O livro de sucesso com o título, autora e ano de publicação:  Vontade e Persistência  Anna  2025
//O livro com o título Vontade e Persistência da autora Anna ano de pulbicação 2025.

//O livro "Vontade e Persistência" foi escrito por Anna em 2025.

// Melhoria:
// Mais acertivo na estrutura função play

//-------------------------------------------------------------------------------------
// Exercício 10: Criar um construtor para representar um Filme

// Crie uma função construtora chamada `Movie` que recebe **título**, **diretor** e **ano de lançamento**.

// Adicione um método chamado `play` que exibe no console:

// `"Reproduzindo o filme [título] dirigido por [diretor]."`

function Movie(titulo, diretor, ano) {
  this.titulo = titulo;
  this.diretor = diretor;
  this.ano = ano;
  this.play = function () {
    return `Reproduzindo o filme ${this.titulo} dirigido por ${this.diretor} no ano de ${this.ano}.`;
  };
}

const filme = new Movie(
  "Batman Cavaleiro das Trevas",
  "Christopher Nolan",
  "2008"
);

console.log(filme.play());

// Output:
// Reproduzindo o filme Batman Cavaleiro das Trevas dirigido por Christopher Nolan no ano de 2008.

//Reproduzindo o filme Batman Cavaleiro das Trevas dirigido por Christopher Nolan no ano de 2008.

// Melhorias:
// Correção na estrutura da função play.
// Nos códigos
// Erros de Português
// Nomes das propriedades para inglês, tornando mais uniforme.

//Resumo:

// Funções construtoras são usadas para criar objetos em JavaScript.
// Elas definem um "modelo" para criar múltiplos objetos com propriedades e métodos semelhantes.
// A palavra-chave new é usada para chamar uma função construtora e criar um novo objeto.
// Como Funcionam

// Definição:
// Uma função é definida para servir como construtor.
// A palavra-chave this é usada dentro da função para se referir ao novo objeto que será criado.
// Propriedades e métodos são atribuídos a this.
// Criação de Objetos:
// A palavra-chave new é usada seguida pelo nome da função construtora para criar um novo objeto.
// Cada objeto criado terá as propriedades e métodos definidos na função construtora.
// Pontos Importantes

// Funções construtoras permitem criar objetos com estruturas semelhantes, promovendo a reutilização de código.
// A palavra chave new é essencial para criar novas instancias de objetos.
// A partir do ES6 o uso de classes se tornou mais comum, mas a função construtora ainda é muito importante para entender o funcionamento do javascript.
// Por convenção, nomes de funções construtoras começam com letra maiúscula.
// Exemplo Básico

// JavaScript

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.dizerOla = function() {
//     console.log(`Olá, meu nome é ${this.nome}.`);
//   };
// }

// const pessoa1 = new Pessoa("Alice", 30);
// pessoa1.dizerOla(); // Saída: Olá, meu nome é Alice.
