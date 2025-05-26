// Exercício 1: Chamando uma função antes da declaração**

// Tente chamar a função `sayHello()` antes de declará-la no código e veja se funciona.

// Depois, declare a função `sayHello` que exibe `"Olá, mundo!"` no console.

sayHello();

function sayHello() {
  console.log("Olá, mundo!");
}

// Output:
// Olá, mundo!
// A função declarada (sem palavra reservada antes da função,  exe: const(nome) function) ocorre o hoisting, independente de ser antes ou depois da sua chamada.

// Melhoria:

//Durante a compilação, o JavaScript move as declarações de funções para a memória.
// As declarações permanecem no mesmo lugar que estão digitadas.
// Mesmo que uma função seja usada antes de sua declaração, o hoisting garante que a função esteja acessível durante a execução.

// Pontos Importantes

// O hoisting de funções se aplica apenas a declarações de funções, não a expressões de funções.
// O hoisting pode tornar o código mais flexível, mas também pode levar a comportamentos inesperados se não for compreendido corretamente.
// É sempre considerado boa pratica declarar as funções antes de as chamar, para ter um código mais limpo e organizado.

//------------------------------------------------------------------------------------

// Exercício 2: Chamando uma função atribuída a uma variável antes da sua criação**

// Tente chamar a função `sayGoodbye()` antes de sua definição.

// Depois, declare `sayGoodbye` como uma **expressão de função** armazenada em uma variável e exiba `"Até logo!"` no console.

// Dica: Veja o erro que aparece no console.

sayGoodbye(); //❌ Erro: Cannot access 'sayGoodbye' before initialization

const sayGoodbye = function sayGoodbye() {
  console.log("Até logo");
};

sayGoodbye(); // ✅ Agora funciona

// Não ocorreu o hoisting porque a ele entende primeiro a variável (palavra reservada) e não está chamando a função. É uma função de expressão!

// Output:
// Is not function ou sayGoodbye()? com erro. Cannot access 'sayGoodbye' before initialization.

// Melhoria:

// Declarações de função são definidas usando a palavra-chave function seguida por um nome de função.
// Exemplo: function minhaFuncao() { ... }

// Hoisting:
// As expressões de função não são elevadas da mesma forma que as declarações de função.
// Quando você usa var, apenas a declaração da variável é elevada, mas a função em si não. Isso significa que você não pode chamar a função antes da linha em que ela é atribuída à variável.
// Quando é usado let ou const não existe hoisting, logo a função não pode ser chamada antes da linha em que ela é atribuida a variavel.
// Se você tentar chamar uma expressão de função antes de sua atribuição, você obterá um erro.

// Resumo das Diferenças

// Declarações de Função:
// São elevadas completamente.
// Podem ser chamadas antes de sua definição.
// Expressões de Função:
// Não são elevadas (ou apenas a variável é elevada, dependendo do uso de var).
// Não podem ser chamadas antes de sua atribuição.

// As declarações de função são processadas antes da execução do código, enquanto as expressões de função são processadas durante a execução.

//-----------------------------------------------------------------------------------

// Exercício 3: Verificando o valor de uma função antes de sua declaração**

// Antes de declarar a função `multiplyNumbers`, tente exibir seu valor no console:
//Depois, declare a função multiplyNumbers que recebe dois números e retorna o produto deles.

console.log(multiplyNumbers(2, 2)); // ✅ 4

function multiplyNumbers(number1, number2) {
  return number1 * number2;
}

// Output:
// 4
// Nesse caso ocorre o hoisting pois é uma função declarada(sem nada antes da sua declaração) e mesmo com parametros.

//------------------------------------------------------

//function expression para mostrar a diferença.

console.log(multiplyNumbersExp(2, 2)); // ❌ TypeError: multiplyNumbersExpression is not a function

var multiplyNumbersExp = function (number1, number2) {
  return number1 * number2;
};

// Nesse caso não ocorre o hoisting , tem palavra reservada var.

// Neste caso, multiplyNumbersExpression é uma expressão de função atribuída a uma variável var.
// Devido ao hoisting, apenas a declaração da variável var multiplyNumbersExpression; é elevada.
// A atribuição da função à variável ocorre durante a execução do código.

//Melhoria:

/* Hoisting é um comportamento do JavaScript onde as declarações de variáveis e funções são movidas para o topo de seu escopo antes da execução do código.
Isso significa que você pode, em certas circunstâncias, usar uma variável antes de sua declaração no código.
var e Hoisting

Quando você declara uma variável com var, a declaração da variável é elevada para o topo do seu escopo.
No entanto, apenas a declaração é elevada, não a inicialização (a atribuição de um valor).*/

//------------------------------------------------------------------------------------

// Exercício 4: Testando function hoisting com `var` e `let`**

// Declare uma variável chamada `myFunction` com `var` e tente chamá-la antes de atribuir uma função.

// Depois, faça o mesmo usando `let`.

// Veja qual das duas gera um erro.

console.log(myFunction); // ✅ undefined

console.log(myFunction()); //❌ Erro: myFunction não é uma função

myFunction = function () {
  console.log("Variavél com var depois da função");
};

myFunction = function () {
  console.log("Executando a função");
};

// Output:
// TypeError: myFunction is not a function => Não é uma funçao

//-------------------------------------------------------------

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

//Melhoria:

/* Hoisting é um comportamento do JavaScript onde as declarações de variáveis e funções são movidas para o topo de seu escopo antes da execução do código.
Isso significa que você pode, em certas circunstâncias, usar uma variável antes de sua declaração no código.
var e Hoisting

Quando você declara uma variável com var, a declaração da variável é elevada para o topo do seu escopo.
No entanto, apenas a declaração é elevada, não a inicialização (a atribuição de um valor).*/
//
//------------------------------------------------------------------------------------

// Exercício 5: Usando uma função anônima antes da sua declaração**

// Tente chamar `calculateSum(5, 3)` antes de definir a função e veja o erro que aparece.

// Depois, defina `calculateSum` como uma expressão de função que soma dois números.

calculateSum(5, 3); //❌ Erro: Cannot access 'calculateSum' before initialization

const calculateSum = function (num1, num2) {
  console.log(num1 + num2);
};

calculateSum(5, 3); // ✅ Agora funciona
// Output:
// ReferenceError: Cannot access 'calculateSum' before initialization
// A chamada da função foi declarada antes, pois ela entende primeiro a palavra reservada const variável, antes da função e não ocorre o hoisting.

// Melhoria:
// Ao contrário de var, as variáveis declaradas com let e const não são elevadas (hoisted) ao topo de seu escopo.
// Isso significa que, se você tentar acessar uma variável let ou const antes de sua declaração no código, você receberá um erro ReferenceError.
// Tecnicamente, o interpretador de JavaScript ainda "conhece" a variável antes da declaração dela, mas ela não pode ser usada.  Dizemos que a variável está na "temporal dead zone" (TDZ).

// Por que essa diferença?

// A introdução de let e const no ECMAScript 6 (ES6) teve como objetivo fornecer um comportamento mais previsível e evitar os problemas comuns associados ao hoisting do var.
// A "temporal dead zone" força os desenvolvedores a declarar suas variáveis antes de usá-las, o que ajuda a prevenir erros e torna o código mais fácil de entender.
// Principais diferenças e boas práticas:

// var:
// É elevada (hoisted).
// Pode levar a comportamentos inesperados.
// Escopo de função ou global.
// let:
// Não é elevada (hoisted).
// Escopo de bloco.
// Permite reatribuição.
// const:
// Não é elevada (hoisted).
// Escopo de bloco.
// Não permite reatribuição.
// Boas práticas:
// Sempre declare suas variáveis let e const no topo de seu escopo.
// Use const para variáveis que não serão reatribuídas.
// Use let para variáveis que precisarão ser reatribuídas.
// Evite usar var para um código mais limpo e previsível.

//------------------------------------------------------------------------------------
// Exercício 6: Criando uma função dentro de um bloco e tentando acessá-la fora**

// Dentro de um bloco `if (true) {}`, declare uma função `insideBlock`.

// Depois, tente chamá-la **fora do bloco** e veja se funciona.

if (true) {
  function insideBlock() {
    console.log("Funciona?");
  }
}

insideBlock(); // ✅ Funciona em JavaScript não estrito

// Output:
// Funciona?

// A função mostra no console "Funciona", porque primeiro ela entra no if que está como true, se mudar para falso não entra no if e diz que não é uma função.

//insideBlock is not a function => com false

// Melhoria:
// O que é o Modo Estrito ('use strict')?

// O modo estrito é uma diretiva que você pode colocar no início de um script ou função para colocar o código JavaScript em um contexto "mais seguro".
// Ele impõe regras mais rigorosas, ajudando a detectar erros comuns e práticas ruins.
// Como o Modo Estrito Afeta as Funções

// Em JavaScript padrão (não estrito), as declarações de função dentro de blocos (como blocos if, for ou while) podem ser acessíveis fora desses blocos, o que pode levar a comportamentos confusos.
// No modo estrito, esse comportamento é restringido:
// As declarações de função dentro de blocos são limitadas ao escopo desse bloco. Isso significa que elas não são acessíveis fora do bloco.

// É uma boa prática usar o modo estrito em seu código para evitar erros e melhorar a qualidade do código.

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

mainFunction(); // ✅ Funciona por causa do hoisting

// Output:
// Função auxiliar chamada!

// Mostra a msg no console, porque ele chama primeiro a função mainFunction() executa a chamada da outra função helperFunction que está a msg.

// Melhoria:

// Declarações de Funções (Function Declarations)

// As declarações de funções são elevadas (hoisted) completamente. Isso significa que tanto a declaração da função quanto a sua implementação são movidas para o topo do escopo.
// Isso permite que você chame a função antes de sua declaração no código.

// Expressões de Funções (Function Expressions)

// As expressões de funções, por outro lado, são tratadas como variáveis.
// Se você usar var para declarar a variável que armazena a função, apenas a declaração da variável será elevada, não a função em si.
// Se for usado let ou const a função não sofrerá hoisting.
// Isso significa que você não pode chamar a função antes de sua atribuição.

//Por que a diferença?

// A diferença no comportamento de hoisting entre declarações e expressões de funções reside na forma como o interpretador JavaScript processa o código.
// As declarações de funções são processadas antes da execução do código, enquanto as expressões de funções são processadas durante a execução.

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

// Melhoria:
// O hoisting da innerFunction ocorre dentro do escopo da outerFunction. Isso significa que innerFunction só pode ser chamada dentro da outerFunction ou em qualquer função aninhada dentro da outerFunction.
// O escopo da innerFunction é local para a outerFunction. Ela não está disponível fora da outerFunction.
// O hoisting de funções permite que as funções sejam chamadas antes de suas declarações no código, desde que estejam dentro do mesmo escopo.

// Em resumo:
// O hoisting garante que tanto outerFunction quanto innerFunction estejam disponíveis para serem chamadas antes de suas declarações textuais no código.
// innerFunction é elevada dentro do escopo da outerFunction, demonstrando como o hoisting funciona em funções aninhadas.

//------------------------------------------------------------------------------------
// Exercício 9: Comparando function declaration e function expression**

// Declare uma função chamada `sumNumbers` usando **function declaration** e chame-a antes da declaração.

// Depois, crie a mesma função usando **function expression** e tente chamá-la antes da sua definição.

// Veja a diferença no comportamento.

console.log(sumNumbers(4, 4)); // ✅ 8 (Function Declaration)

function sumNumbers(num1, num2) {
  return num1 + num2;
}

//console.log(sumNumbers(4, 4));

//const sumNumbers = function (num1, num2) { ❌ Erro: Identifier 'sumNumbers' has already been declared
//   return num1 + num2;
//
// };

// Output:
// 8
//Ocorre o hoisting pois são funções. => Funções declaradas

// 2 - Output:
// Não ocorre o hoisting pois ele tem a palavra reservada antes da função => função com expressão.

// Melhoria:

//Hoisting e Prioridade:

// As declarações de função são elevadas (hoisted) e têm prioridade sobre as declarações de variáveis com o mesmo nome.
// Quando o interpretador encontra function sumNumbers(...), ele cria a função e a coloca no escopo antes de executar qualquer código.
// Por isso, quando o interpretador encontra a linha com o const, ele já sabe que sumNumbers já foi declarado.

// Em Resumo
// Você não pode redeclarar um identificador usando const ou let se ele já foi declarado no mesmo escopo.
// Declarações de função são elevadas e têm prioridade, o que impede a redeclaração com const ou let.
// Se fosse usado var ao invés de const o código iria funcionar, pois var permite redeclaração. Porém, isso é considerado uma má pratica.

//------------------------------------------------------------------------------------

// Exercício 10: Criando uma função com `var` e acessando antes e depois da atribuição**

// Declare uma variável `doSomething` com `var`, mas **não atribua nada a ela** ainda.

// Depois, tente chamá-la como uma função.

// Em seguida, atribua a `doSomething` uma função que exibe `"Fazendo algo..."`.

// Veja o erro que ocorre antes da atribuição.

var doSomething;
console.log(doSomething); // ✅ undefined

doSomething(); //❌ TypeError: doSomething is not a function

doSomething = function () {
  console.log("Fazendo algo");
};

// doSomething();  ✅ Agora funciona

// Output:
// TypeError: doSomething is not a function

// Não ocorre o hoisting ele encontra a palavra reservada antes da função.

// Melhoria:

// Quando você usa var para declarar uma variável, a declaração da variável é elevada para o topo do escopo.
// Isso significa que a variável existe no escopo antes da execução do código.

// Inicialização como undefined:
// Durante o hoisting, a variável é inicializada com o valor undefined.

// Isso significa que, se você tentar acessar a variável antes da linha onde ela é atribuída a um valor, você obterá undefined.

// Atribuição Posterior:
// A atribuição real da função à variável ocorre apenas quando a linha de código correspondente é executada.
// Até esse ponto, a variável existe, mas não contém a função.

// Pontos-chave:

// Com var, o hoisting eleva a declaração da variável e a inicializa com undefined.
// A atribuição real da função ocorre durante a execução do código.
// Isso pode levar a erros se você tentar chamar a função antes de sua atribuição.
// É importante lembrar que o uso de let e const evitam esse tipo de problema.

//----------------------------------**********------------------------------------------

// Resumo das melhorias:

// Resumo do Hoisting em JavaScript

// O que é Hoisting:
// É o comportamento do JavaScript de mover declarações de variáveis e funções para o topo do seu escopo antes da execução do código.

// Function Declarations:
// São completamente elevadas (hoisted), permitindo que sejam chamadas antes de sua definição.

// Function Expressions:
// Não são elevadas da mesma forma.

// Com var, apenas a declaração da variável é elevada, mas a função permanece onde está.
// Com let e const não existe hoisting.

// Variáveis com var:
// São elevadas e inicializadas com undefined.
// A atribuição real do valor ocorre durante a execução do código.

// Variáveis com let e const:
// Não são elevadas da mesma forma.
// Permanecem em uma "zona morta temporária" (TDZ) até serem declaradas.
// Testes Extras e Diferenças

// Redeclaração:
// Tentar redeclarar uma função ou variável com const ou let no mesmo escopo resulta em erro.
// Com var, a redeclaração é permitida, mas não recomendada.
// Escopo de Bloco:
// Funções declaradas em blocos (if, for, etc.) são limitadas ao escopo do bloco no modo estrito ('use strict').

// Erros Comuns:
// Chamar uma function expression antes da atribuição resulta em TypeError.
// Chamar uma variavel declarada com let ou const antes da declaração resulta em ReferenceError.

// Sugestões de Melhoria

// Clareza na Distinção:
// Enfatizar a diferença entre declarações e expressões de função.
// Usar exemplos claros para ilustrar o comportamento do hoisting em cada caso.
// Boas Práticas:
// Incentivar o uso de let e const para evitar problemas com hoisting.
// Recomendar a declaração de variáveis e funções no topo do escopo para maior clareza.
// Sempre utilizar o "use strict".
// Demonstração Visual:
// Considerar o uso de diagramas ou representações visuais para explicar o hoisting.
// Exercícios Práticos:
// Fornecer exercícios que exijam a previsão do comportamento do hoisting em diferentes cenários.
// Explicação da "Temporal Dead Zone" (TDZ):
// Explicar detalhadamente o conceito da TDZ e como ela afeta as variáveis let e const.
