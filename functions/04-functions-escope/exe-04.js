// Exercício 1: Escopo de variável local**

// Crie uma função chamada `showMessage` que declara uma variável chamada `message` dentro da função e exibe o seu valor no console.

// Atenção: Tente acessar a variável fora da função e veja o que acontece.

function showMessage() {
  let message = "Olá sou o valor da variável de dentro da função";
  console.log(message);
}

showMessage();
//console.log(message);

// Resposta: fora da função o a variável não aparece no console.log()!
//Só quando a função é chamada com ela dentro do escopo.

// Output:
//Olá sou o valor da variável de dentro da função

//------------------------------------------------------------------------------------

// Exercício 2: Escopo de variável global**

// Crie uma variável global chamada `appName` e atribua um nome qualquer para um aplicativo.

// Depois, crie uma função chamada `showAppName` que exibe o valor da variável global no console.

let appName = "rockmusicapp";

function showAppName() {
  console.log(appName);
}

showAppName();

// Output:rockmusicapp

//------------------------------------------------------------------------------------

// Exercício 3: Modificando uma variável global dentro de uma função**

// Crie uma variável global chamada `counter` e inicialize com 0.

// Depois, crie uma função chamada `increaseCounter` que **incrementa** essa variável em 1 cada vez que for chamada.

// Chame a função várias vezes e exiba o valor de `counter` no console após cada chamada.

let counter = 0;

function increaseCounter() {
  counter++;
  console.log("counter:", counter);
}

increaseCounter();
increaseCounter();
increaseCounter();
increaseCounter();

// Pesqusei...

// Para incrementar uma variável em uma função em JavaScript, pode usar o operador de incremento "++".
// Sintaxe
// Para incrementar uma variável, basta colocar o operador "++" depois do nome da variável.

// Output:
// counter: 1
// counter: 2
// counter: 3
// counter: 4

//--------------------------------------------------------------------------------------

// Exercício 4: Escopo de variável local x global**

// Crie uma variável global chamada `message` com o valor `"Olá do lado de fora!"`.

// Depois, crie uma função chamada `changeMessage` que declara uma variável **com o mesmo nome** (`message`) dentro da função e atribui `"Olá de dentro!"`.

// Dentro da função, exiba a variável `message`.

// Após executar a função, exiba a variável `message` novamente fora da função e veja se houve alteração.

let message = "Olá do lado de fora!";

function changeMessage() {
  let message = "Olá de dentro";
  console.log(message);
}

changeMessage();
console.log(message);

// Output:
// Olá de dentro
// Olá do lado de fora!

//------------------------------------------------------------------------------------

// Exercício 5: Escopo dentro de uma função aninhada**

// Crie uma função chamada `outerFunction`, dentro dela declare uma variável chamada `externalMessage`.

// Dentro dessa função, crie outra função chamada `innerFunction` e, dentro dela, exiba o valor de `externalMessage`.

// Chame `innerFunction` dentro de `outerFunction` e depois chame `outerFunction` no programa principal.

function outerFunction() {
  let externalMessage = "Olá dentro da primeira função lendo da outra função!";
  function innerFunction() {
    console.log(externalMessage);
  }

  innerFunction();
}

outerFunction();

// 1 - Primeiro chama a função outerFunction()
// 2 - let externalMessage = "Olá dentro da primeira função lendo da outra função"
// 3 - Depois innerFunction() mostra a mensagem no console
// 4 - outerFunction()
// 5 - Fim
//
// innerfunction está dentro da função outerFunction assim consegue acessar externalMessage

//--------------------------------------------------------------------------------------

//Exercício 6: Criando uma função que retorna outra função**

// Crie uma função chamada `createMultiplier` que recebe um **número** como parâmetro e retorna uma nova função que multiplica qualquer valor por esse número.

// Depois, crie uma variável `double` e armazene o retorno de `createMultiplier(2)`.

// Teste `double(5)` e veja se retorna 10.

function createMultiplier(number) {
  function multiplie(num) {
    return num * number;
  }

  return multiplie;
}

let double = createMultiplier(4);

console.log("exe-06", double(5));
console.log("exe-06", double(10));

// Output:
// exe-06 20
// exe-06 40

//------------------------------------------------------------------------------------

// ExeExercício 7: Variáveis definidas dentro e fora da função**

// Crie uma variável global chamada `temperature` e atribua um valor numérico.

// Depois, crie uma função chamada `convertToFahrenheit` que cria uma **variável local** chamada `temperature`, atribui um valor diferente e converte para Fahrenheit usando a fórmula:

// `Fahrenheit = (Celsius × 9/5) + 32`

// Exiba o valor de `temperature` dentro e fora da função e compare os resultados.

const temperature = 40;

function convertToFahrenheit() {
  let temperature = 50;
  let fahrenheit = (temperature * 9) / 5 + 32;

  console.log("Temperatura dentro da função (local)", temperature, "°C");
  console.log("Temperatura convertida para Fahrenheit:", fahrenheit, "°C");
}

console.log("variável global (fora da função)", temperature, "°C");

convertToFahrenheit();

// Output:
// variável global (fora da função) 40 °C
// Temperatura dentro da função (local) 50 °C
// Temperatura convertida para Fahrenheit: 122 °C

//------------------------------------------------------------------------------------

// Exercício 8: Função que cria e retorna um objeto

// Crie uma função chamada `createPerson` que recebe um **nome** e uma **idade** como parâmetros e **retorna** um objeto representando a pessoa.

// O objeto deve ter as propriedades `name` e `age`.

function createPerson(name, age) {
  return {
    name: name,
    age: age,
  };
}

// name: "Anna",
// age: 49,

//console.log(createPerson())

const person1 = createPerson("Anna", 49);
const person2 = createPerson("Gabriel", 29);
console.log(person1);
console.log(person2);

//------------------------------------------------------------------------------------

// Exercício 9: Variáveis declaradas com var, let e const**

// Crie uma função chamada `testScope` e dentro dela:

// - Declare uma variável usando `var`, outra usando `let` e outra usando `const`.
// - Tente acessar as variáveis **fora** da função e veja quais geram erro.

// Depois, dentro da função, crie um bloco `{}` e tente acessar as variáveis dentro e fora do bloco.

function testScope() {
  var msg1 = "Eu fui declarada com var";
  let msg2 = "Eu fui declarada com let";
  const msg3 = "Eu fui declarada com const";

  console.log("Dentro da funçao:");
  console.log(msg1);
  console.log(msg2);
  console.log(msg3);

  {
    console.log("Dentro da bloco da função:");
    console.log(msg1);
    console.log(msg2);
    console.log(msg3);
  }
}

testScope();

//-----------------------------------------------------------------------------------------

// Exercício 10: Função que modifica um array global**

// Crie um array global chamado `tasks` e inicialize vazio.

// Depois, crie uma função chamada `addTask` que recebe um **nome de tarefa** como parâmetro e adiciona esse nome ao array `tasks`.

// Após chamar `addTask` algumas vezes, exiba o array `tasks` para verificar as tarefas adicionadas.

let tasks = [];

function addTask(tarefa) {
  tasks.push(tarefa);
}

addTask("Ver vídeo de aula JavaScript");
addTask("Estudar JavaScript");
addTask("Fazer exercícios");
addTask("Fazer café");

console.log(tasks);
