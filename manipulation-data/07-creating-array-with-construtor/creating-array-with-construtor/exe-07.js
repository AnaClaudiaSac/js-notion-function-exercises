// Exercício 1: Criar um array vazio usando o construtor
// Crie uma função chamada createEmptyArray que retorna um array vazio usando new Array().

function createEmptyArray() {
  return new Array();
}

console.log(createEmptyArray());

// Output:
// []

//-----------------------**********---------------------------

// Explicação;

// Resumo:

// Em JavaScript, você pode criar arrays de duas maneiras principais:

// Literal: Usando colchetes []. Esta é a forma mais comum e recomendada.

// JavaScript

// const meuArrayLiteral = []; // Cria um array vazio
// const outroArrayLiteral = [1, 2, 3]; // Cria um array com elementos
// Construtor (new Array()): Usando a palavra-chave new seguida do construtor Array().

// Como funciona o Construtor new Array()?

// O comportamento do construtor Array() varia dependendo dos argumentos que você passa para ele:

// Sem argumentos: Se você chamar new Array() sem nenhum argumento, ele cria um array vazio, exatamente como o literal [].

// const arrayVazioConstrutor = new Array();
// console.log(arrayVazioConstrutor); // Saída: []
// Com um único argumento numérico: Se você passar um único argumento que seja um número inteiro não negativo, o construtor Array() cria um array com esse número como seu comprimento inicial, mas sem nenhum elemento definido. As posições do array estarão "vazias" (em termos de valor).

// Com dois ou mais argumentos: Se você passar dois ou mais argumentos para o construtor Array(), esses argumentos se tornarão os elementos do array na ordem em que foram passados.

// Por que o Literal [] é Geralmente Preferível?

// Conciso e Legível: A sintaxe literal [] é mais curta e mais fácil de ler e entender rapidamente.
// Menos Ambiguidade: O comportamento do construtor Array() com um único argumento numérico pode ser confuso e levar a erros. O literal [] não tem essa ambiguidade.
// Desempenho Ligeiramente Melhor: Em alguns casos, a criação de arrays literais pode ter um desempenho ligeiramente melhor.

// Em resumo:
// O construtor new Array() é uma forma de criar arrays em JavaScript.
// Sem argumentos, cria um array vazio.
// Com um único argumento numérico, cria um array com um comprimento específico, mas sem elementos definidos (o que pode ser confuso).
// Com dois ou mais argumentos, cria um array com esses argumentos como seus elementos.
// A forma literal [] é geralmente preferível por ser mais concisa, legível e menos propensa a ambiguidades.
// Embora seja importante entender a existência e o funcionamento do construtor Array(), na prática, você provavelmente usará a sintaxe literal [] na maioria

//------------------------------------------------------------------------------------------

// Exercício 2: Criar um array com 3 posições vazias
// Crie uma função chamada createThreeEmptySlots que cria um array com 3 posições vazias usando o construtor.

function createThreeEmptySlots() {
  return new Array(3);
}

console.log(createThreeEmptySlots());

// Output:
// [ <3 empty items> ]

//-----------------------**********---------------------------

// Explicação:
// Com um único argumento numérico: Se você passar um único argumento que seja um número inteiro não negativo, o construtor Array() cria um array com esse número como seu comprimento inicial, mas sem nenhum elemento definido. As posições do array estarão "vazias" (em termos de valor).

//----------------------------------------------------------------------------------------------

// Exercício 3: Criar um array com valores definidos
// Crie uma função chamada createFruitsArray que retorna um array com 3 frutas usando new Array("maçã", "banana", "uva").

function createFruitsArray() {
  return new Array("maça", "banana", "uva");
}

console.log(createFruitsArray());

// Output:
// [ 'maça', 'banana', 'uva' ]

//----------------------------------------------------------------------------------------------

// Exercício 4: Acessar o primeiro item de um array criado com o construtor
// Crie uma função chamada getFirstItem que cria um array com 3 cores e retorna o primeiro item.

function getFirstItem() {
  const colors = new Array("vermelho", "azul", "branco");
  return colors[0];
}

console.log(getFirstItem());

// Output;
// vermelho

//-----------------------**********---------------------------

// Explicação:

// Em arrays (em muitas linguagens de programação, incluindo JavaScript), a primeira posição sempre tem o índice 0.

// Em resumo:

// Índice Zero: O primeiro elemento de um array é acessado utilizando o índice 0.
// Acesso: Para obter o valor do primeiro item de um array chamado meuArray, você usaria a sintaxe meuArray[0].

//----------------------------------------------------------------------------------------------
// Exercício 5: Criar um array de números e retornar o último item
// Crie uma função chamada getLastNumber que cria um array com 5 números e retorna o último número.

function getLastNumber() {
  const numbers = new Array(10, 20, 30, 40, 50);
  return numbers[numbers.length - 1];
}

console.log(getLastNumber());

// Output:
// 50

//-----------------------**********---------------------------

// Explicação:

// Numeros.length nos dá o total de elementos no array (que é 5 neste caso).
// Como os índices do array começam em 0, o índice do último elemento é sempre tamanho - 1 (ou seja, 5 - 1 = 4).
// numeros[4] acessa o elemento que está no índice 4, que é o último número do nosso array (50).
// A palavra-chave return faz com que a função devolva esse último número.

//----------------------------------------------------------------------------------------------

// Exercício 6: Verificar o tamanho (length) de um array criado com new Array
// Crie uma função chamada arrayLength que cria um array com 4 elementos e retorna a quantidade de itens.

function arrayLength() {
  const meuArray = new Array("maçã", "banana", "laranja", "uva");
  return meuArray.length;
}

console.log(arrayLength());

// Output:
// 4

//-----------------------**********---------------------------

// Explicação:
// criamos um array chamado meuArray utilizando o construtor new Array() e o inicializamos com quatro elementos do tipo string (textos).
// return meuArray.length;:
// meuArray.length é uma propriedade que retorna o número de elementos que o array meuArray possui. Neste caso, ele retornará o valor 4.
// A palavra-chave return faz com que a função devolva esse número.
// console.log(arrayLength());: Essa linha de código chama a função arrayLength() e exibe o valor que ela retorna no console (que será 4).

//---------------------------------------------------------------------------------------------
// Exercício 8: Criar um array com números e somar os dois primeiros
// Crie uma função chamada sumFirstTwo que cria um array com 2 números usando o construtor e retorna a soma deles.
function sumFirstTwo() {
  const numbers = new Array(10, 20);
  let firstNumber = numbers[0];
  let secondNumber = numbers[1];

  const soma = firstNumber + secondNumber;
  return soma;
}

console.log(sumFirstTwo());

// Output:
// 30

//-----------------------**********---------------------------

// Explicação:

// function sumFirstTwo() { ... }: Definimos a função chamada sumFirstTwo.
// let numeros = new Array(10, 20);: Criamos um array chamado numeros com dois elementos: 10 e 20, utilizando o construtor new Array().
// let primeiroNumero = numeros[0];: Acessamos o primeiro elemento do array (no índice 0) e o armazenamos na variável primeiroNumero.
// let segundoNumero = numeros[1];: Acessamos o segundo elemento do array (no índice 1) e o armazenamos na variável segundoNumero.
// let soma = primeiroNumero + segundoNumero;: Realizamos a adição das duas variáveis e armazenamos o resultado na variável soma.
// return soma;: A função retorna o valor da variável soma.
// console.log(sumFirstTwo());: Chamamos a função e exibimos o resultado (30) no console.

//----------------------------------------------------------------------------------------------

// Exercício 9: Criar um array com nomes e verificar se um nome existe
// Crie uma função chamada nameExists que cria um array com 3 nomes e verifica se o nome "Anna" existe no array. Retorna true ou false.

function nameExists() {
  const names = ["José", "Maria", "Anna"];
  let nameExists = names.includes("Anna");
  return nameExists;
}

console.log(nameExists());

// Output:
// true

//-----------------------**********---------------------------

// Explixação:

// Para resolver este problema, podemos seguir estes passos:

// Criar um array com nomes: Dentro da função, inicializaremos um array com três nomes (strings).
// Verificar se "Anna" existe: Usaremos um método do array para verificar se a string "Anna" está presente nesse array.
// Retornar true ou false: A função deverá retornar true se "Anna" for encontrada no array, e false caso contrário.
// JavaScript oferece um método muito útil para verificar se um elemento existe em um array: o método includes(colocar o nome).

//----------------------------------------------------------------------------------------------

// Exercício 10: Criar um array e transformar em string
// Crie uma função chamada arrayToString que cria um array com 3 comidas e retorna o array convertido em uma string separada por vírgulas.

function arrayToString() {
  const foods = ["pizza", "lasanha", "esfiha"];
  let stringFoods = foods.join(",");
  return stringFoods;
}

console.log(arrayToString());

// Output:
// pizza,lasanha,esfiha

//-----------------------**********---------------------------

// Explicação:
// Transformando Array em String com join(',')

//  Para transformar um array em uma única string, você usa o método join(). Dentro dos parênteses do join(), você especifica qual caractere ou conjunto de caracteres você quer usar para separar os itens na string resultante.

// Vírgula como separador: Para separar os itens por vírgula, você passa uma vírgula (,) como argumento para o método join():

// Resultado: A variável stringDeFrutas agora conterá uma única string com todos os elementos do array original, separados por vírgula:

// Em essência: O método join(',') pega todos os elementos de um array e os "cola" em uma única string, colocando uma vírgula entre cada um deles.

// É como se você pegasse os itens da lista e os escrevesse em uma linha, colocando uma vírgula depois de cada item para separá-los!
