// Exercício 1: Chamando uma função antes da declaração**

// Tente chamar a função `sayHello()` antes de declará-la no código e veja se funciona.

// Depois, declare a função `sayHello` que exibe `"Olá, mundo!"` no console.

sayHello();

function sayHello() {
  console.log("Olá, mundo!");
}

// Output:
// Olá, mundo!
// A função declarada ocorre o hoisting, independente de ser antes ou depois da sua chamada.

//------------------------------------------------------------------------------------

// Exercício 2: Chamando uma função atribuída a uma variável antes da sua criação**

// Tente chamar a função `sayGoodbye()` antes de sua definição.

// Depois, declare `sayGoodbye` como uma **expressão de função** armazenada em uma variável e exiba `"Até logo!"` no console.

// Dica: Veja o erro que aparece no console.

sayGoodbye();

const sayGoodbye = function sayGoodbye() {
  console.log("Até logo");
};

// Não ocorreu o hoisting porque a ele entende primeiro a variável (palavra reservada) e não está chamando a função. É uma função de expressão!

// Output:
// Is not function ou sayGoodbye()? com erro. Cannot access 'sayGoodbye' before initialization.

//-----------------------------------------------------------------------------------

// Exercício 3: Verificando o valor de uma função antes de sua declaração**

// Antes de declarar a função `multiplyNumbers`, tente exibir seu valor no console:
//Depois, declare a função multiplyNumbers que recebe dois números e retorna o produto deles.

console.log(multiplyNumbers(2, 2));

function multiplyNumbers(number1, number2) {
  return number1 * number2;
}

// Output:
// 4
// Nesse caso ocorre o hoisting pois é uma função declarada(sem nada antes da sua declaração) e mesmo com parametros.

//------------------------------------------------------------------------------------

// Exercício 4: Testando function hoisting com `var` e `let`**

// Declare uma variável chamada `myFunction` com `var` e tente chamá-la antes de atribuir uma função.

// Depois, faça o mesmo usando `let`.

// Veja qual das duas gera um erro.

var myFunction;

console.log("Variavél com var antes da função:", myFunction());

myFunction = function () {
  console.log("Variavél com var depois da função");
};

// myFunction();
// console.log(myFunction);

// Output:
// TypeError: myFunction is not a function => Não é uma funçao
// Ela não sofre elevação pois a variável é declarada antes da função e depois atribuida como função.

//----------------------------------

let myFunction1;
console.log("Variável com let, antes da função", myFunction1());

myFunction1 = function () {
  console.log("Variável com let depois da função");
};

myFunction1();
console.log(myFunction1);

// Output:
// TypeError: myFunction is not a function => Não é uma funçao
// Não ocorre o hoisting pois a variável(palavra reservada) é declarada antes da função e depois atribuida como função.
//
//------------------------------------------------------------------------------------

// Exercício 5: Usando uma função anônima antes da sua declaração**

// Tente chamar `calculateSum(5, 3)` antes de definir a função e veja o erro que aparece.

// Depois, defina `calculateSum` como uma expressão de função que soma dois números.

calculateSum(5, 3);

const calculateSum = function (num1, num2) {
  console.log(num1 + num2);
};

// Output:
// ReferenceError: Cannot access 'calculateSum' before initialization
// A chamada da função foi declarada antes, pois ela entende primeiro a palavra reservada const variável, antes da função e não ocorre o hoisting.

//------------------------------------------------------------------------------------
// Exercício 6: Criando uma função dentro de um bloco e tentando acessá-la fora**

// Dentro de um bloco `if (true) {}`, declare uma função `insideBlock`.

// Depois, tente chamá-la **fora do bloco** e veja se funciona.

if (true) {
  function insideBlock() {
    console.log("Funciona?");
  }
}

insideBlock();

// Output:
// Funciona?

// A função mostra no console "Funciona", porque primeiro ela entra no if que está como true, se mudar para falso não entra no if e diz que não é uma função.

//insideBlock is not a function => com false

//------------------------------------------------------------------------------------

// Exercício 7: Chamando uma função dentro de outra antes de sua declaração**

// Crie uma função `mainFunction` que chama `helperFunction` antes de sua definição.

// Depois, declare `helperFunction` que exibe `"Função auxiliar chamada!"`.

function mainFunction() {
  helperFunction();
}

function helperFunction() {
  console.log("Função auxiliar chamada!");
}

mainFunction();

// Output:
// Função auxiliar chamada!

// Mostra a msg no console, porque ele chama primeiro a função mainFunction() executa a chamada da outra função helperFunction que está a msg.

//------------------------------------------------------------------------------------

// Exercício 8: Testando function hoisting dentro de uma função**

// Crie uma função chamada `outerFunction`.

// Dentro dela, tente chamar `innerFunction` antes de declará-la.

// Depois, declare `innerFunction` dentro de `outerFunction` e faça-a exibir `"Função interna chamada!"`.

outerFunction();

function outerFunction() {
  innerFunction();
  function innerFunction() {
    console.log("Função interna chamada!");
  }
}

// Output:
// Função interna chamada!

// Primeiro executa outherFunction() e que dentro dessa função tem a chamada de outra função innerFunction() que excecuta e mostra a msg no console.
// Funçao e chamada dentro de outra função e não ocorre o hoisting.

//------------------------------------------------------------------------------------
// Exercício 9: Comparando function declaration e function expression**

// Declare uma função chamada `sumNumbers` usando **function declaration** e chame-a antes da declaração.

// Depois, crie a mesma função usando **function expression** e tente chamá-la antes da sua definição.

// Veja a diferença no comportamento.

console.log(sumNumbers(4, 4));

function sumNumbers(num1, num2) {
  return num1 + num2;
}

console.log(sumNumbers(4, 4));

const sumNumbers = function (num1, num2) {
  return num1 + num2;
};

// 1- Output:
// 8
//Ocorre o hoisting pois são funções. => Funções declaradas

// 2 - Output:
// Não ocorre o hoisting pois ele tem a palavra reservada antes da função => função com expressão.

//------------------------------------------------------------------------------------

// Exercício 10: Criando uma função com `var` e acessando antes e depois da atribuição**

// Declare uma variável `doSomething` com `var`, mas **não atribua nada a ela** ainda.

// Depois, tente chamá-la como uma função.

// Em seguida, atribua a `doSomething` uma função que exibe `"Fazendo algo..."`.

// Veja o erro que ocorre antes da atribuição.

var doSomething;
console.log(doSomething);

doSomething();

doSomething = function () {
  console.log("Fazendo algo");
};

// doSomething();  testando depois.

// Output:
// TypeError: doSomething is not a function

// Não ocorre o hoisting ele encontra a palavra reservada antes da função.
