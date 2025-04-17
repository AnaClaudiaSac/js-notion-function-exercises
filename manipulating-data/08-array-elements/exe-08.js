// Exercício 1: Acessar o primeiro elemento do array
// Crie uma função chamada getFirstElement que retorna o primeiro elemento de um array de frutas.

function getFirstElement() {
  const myArray = ["maçã", "mamão", "banana"];
  return myArray[0];
}

console.log(getFirstElement()); // Exemplo: "maçã"

// Output:
// maçã

//------------------------------**********-----------------------------------

// Explicação:
// Para acessar o primeiro elemento de um array, você precisa usar o índice 0 (por exemplo, myArray[0]). Elecomeça no índice zero eois o um, dois ...

// Resumo sobre Elementos de Array em JavaScript
// Em JavaScript, um array é uma estrutura de dados que permite armazenar uma coleção ordenada de itens. Esses itens são chamados de elementos do array.

// Pontos chave sobre elementos de array:

// Tipos Variados: Um array pode conter elementos de diferentes tipos de dados (números, strings, booleanos, objetos, outros arrays, etc.).
// Indexação: Cada elemento em um array possui um índice, que é um número inteiro que representa a sua posição dentro do array. A indexação em JavaScript (e em muitas outras linguagens) começa em zero. Portanto, o primeiro elemento está no índice 0, o segundo no índice 1, e assim por diante.
// Acesso: Para acessar um elemento específico de um array, você usa o nome do array seguido pelo índice do elemento entre colchetes []. Por exemplo, se você tem um array chamado frutas, o primeiro elemento seria acessado como frutas[0].
// Propriedade length: Arrays possuem uma propriedade chamada length que retorna o número total de elementos presentes no array. É importante notar que o índice do último elemento será sempre length - 1.
// Mutabilidade: Arrays em JavaScript são mutáveis, o que significa que você pode modificar seus elementos após a criação, adicionando novos elementos, removendo elementos existentes ou alterando o valor de elementos específicos.
// Em resumo:

// Os elementos de um array são os itens individuais armazenados dentro dessa estrutura. Eles são acessados através de um índice numérico que começa em zero. Arrays podem conter diversos tipos de dados e sua propriedade length informa a quantidade de elementos. A capacidade de acessar e manipular esses elementos é fundamental para trabalhar com coleções de dados em JavaScript.

//----------------------------------------------------------------------------------------------
// Exercício 2: Acessar o último elemento do array
// Crie uma função chamada getLastElement que retorna o último elemento de um array de cores.

function getLastElement() {
  const myArray = ["branco", "vermelho", "azul"];
  return myArray[2];
}

console.log(getLastElement());

// Output:
// azul

//----------------------------------------------------------------------------------------------

// Exercício 3: Acessar um elemento específico pela posição
// Crie uma função chamada getSecondElement que retorna o segundo item de um array com 3 animais.

function getSecondElement() {
  const myArrayAnimals = ["cachorro", "gato", "calopsita"];
  return myArrayAnimals[1];
}

console.log(getSecondElement());

// Output:
// gato

//----------------------------------------------------------------------------------------------

// Exercício 4: Alterar um elemento do array
// Crie uma função chamada changeThirdItem que altera o terceiro item de um array de comidas e retorna o array atualizado.

function changeThirdItem() {
  myArrayFood = ["arroz", "feijão", "macarrão"];
  let indiceAlterar = 2;
  let novoValor = "lasanha";
  myArrayFood[indiceAlterar] = novoValor;
  return myArrayFood;
}

console.log(changeThirdItem());

// Output:
// [ 'arroz', 'feijão', 'lasanha' ]

//------------------------------**********-----------------------------------

// Explicação:

// Acessamos o elemento do array usando a notação de colchetes [] e o índice do elemento que queremos modificar (lembre-se que os índices em arrays começam em 0).
// Atribuímos um novo valor a essa posição do array usando o operador de atribuição =.
// A função alterarItemNoArray recebe o array, o índice a ser alterado e o novo valor. Ela modifica o array diretamente e então retorna a referência ao mesmo array (que agora está atualizado).
// 2. Criando um novo array com a alteração (sem modificar o original):

// Em algumas situações, você pode querer manter o array original intacto e criar um novo array com a modificação. Existem algumas maneiras de fazer isso:

// a) Usando o método map():

// O método map() cria um novo array com os resultados de uma função aplicada a cada elemento do array original. Podemos usá-lo para 1  criar um novo array onde o elemento no índice desejado é substituído pelo novo valor, enquanto os outros permanecem os mesmos.

// Usando também Usando o spread operator (...) e slice()
// Esta abordagem envolve criar uma cópia superficial do array original e inserir o novo valor no índice desejado.

// Qual abordagem usar?

// Se você pode e quer modificar o array original, a primeira abordagem (acessando o índice diretamente) é a mais simples e eficiente.
// Se você precisa manter o array original intacto e criar um novo array com a modificação, as abordagens usando map() ou o spread operator com slice() são as mais adequadas. A escolha entre elas pode depender da sua preferência pessoal ou da complexidade da lógica de alteração. Para uma simples substituição em um índice específico, o spread operator com slice() pode ser um pouco mais conciso.

//----------------------------------------------------------------------------------------------

// Exercício 5: Remover o primeiro elemento do array

// Crie uma função chamada removeFirstItem que remove o primeiro item de um array de números e retorna o array atualizado.
function removeFirstItem() {
  const numberArray = [10, 20, 30, 40, 50, 60, 70, 80];
  if (numberArray.length > 0) {
    numberArray.shift();
  }
  return numberArray;
}

console.log(removeFirstItem());

// Output:
// [
//   20, 30, 40, 50,
//   60, 70, 80
// ]

//------------------------------**********-----------------------------------

function removeFirstItem() {
  const copyArray = [10, 20, 30, 40, 50, 60, 70, 80];
  if (copyArray.length > 0) {
    copyArray.shift();
  }
  return copyArray;
}

console.log(removeFirstItem());

//-----------------------------------
// Output:
// [
//   20, 30, 40, 50,
//   60, 70, 80
// ]

//------------------------------**********-----------------------------------

// Explicação:

// removeFirstItem que aceita um array de números (arrayDeNumeros) como argumento.
// if (arrayDeNumeros.length > 0): Verifica se o array tem pelo menos um elemento antes de tentar remover. Isso evita erros em arrays vazios.
// arrayDeNumeros.shift();
// O método shift() é usado para remover o primeiro elemento de um array. Este método modifica o array original e retorna o elemento removido (que não estamos utilizando explicitamente aqui, pois o objetivo é retornar o array atualizado).
// return arrayDeNumeros, A função retorna o arrayDeNumeros, que agora estará sem o seu primeiro elemento (se ele originalmente continha algum).

// Observação:

// A função removeFirstItem modifica o array original. Se você precisar manter o array original intacto, você pode criar uma "cópia" do array dentro da função antes de usar.

// A escolha entre a versão que modifica o array original e a versão imutável depende dos requisitos específicos do seu código. Em muitos casos, modificar o array original diretamente é aceitável e mais eficiente. No entanto, em cenários onde a imutabilidade é importante (por exemplo, em programação funcional ou para facilitar o rastreamento de mudanças de estado), a versão que cria uma cópia é preferível.

//-----------------------------------------------------------------------------

// Exercício 6: Adicionar um novo elemento no final do array
// Crie uma função chamada addToEnd que adiciona um novo elemento no final de um array de nomes e retorna o novo array.

function addToEnd() {
  const arrayNames = ["Ana", "Lucas"];
  const nameToAdd = "João";

  arrayNames.push(nameToAdd);

  return arrayNames;
}

console.log(addToEnd());

// Output:
// [ 'Ana', 'Lucas', 'João' ]

//------------------------------**********-----------------------------------

//Explicação:

// O método push() em JavaScript é usado para adicionar um ou mais elementos ao final de um array. Ele modifica o array original e retorna o novo comprimento do array após a adição.

// Em resumo:
// Adiciona elementos ao final de um array.
// Modifica o array original.
// Retorna o novo número de elementos no array.

// Em essência, push() é a maneira padrão e mais simples de inserir novos itens no final de um array JavaScript, expandindo-o conforme necessário.

//----------------------------------------------------------------------------------------------

// Exercício 7: Adicionar um novo elemento no início do array
// Crie uma função chamada addToStart que adiciona um novo elemento no começo de um array de cores e retorna o novo array.

function addToStart() {
  const arrayColors = ["verde", "azul"];
  const colorAdd = "vermelho";
  arrayColors.unshift(colorAdd);
  return arrayColors;
}

console.log(addToStart());

// Output:
// [ 'vermelho', 'verde', 'azul' ]

//------------------------------**********-----------------------------------

// Explicação:

// O método unshift() em JavaScript é usado para adicionar um ou mais elementos ao início de um array. Ele modifica o array original e retorna o novo comprimento do array após a adição.

// Em resumo:
// Adiciona elementos no começo de um array.
// Modifica o array original.
// Retorna o novo número de elementos no array.
// Em essência, unshift() é o método correspondente a push(), mas operando na extremidade inicial do array, deslocando todos os elementos existentes para índices maiores.

//----------------------------------------------------------------------------------------------

// Exercício 8: Verificar se um elemento existe no array
// Crie uma função chamada hasElement que verifica se a palavra "banana" existe em um array de frutas. Retorna true ou false.

function hasElement() {
  const arrayFruits = ["maça", "banana", "mamão", "pera"];
  //const arrayFruits = ["maça", "mamão", "pera"];
  return arrayFruits.includes("banana");
}

console.log(hasElement());

// Output:
// true
// flase   => com o array sem a banana.

//------------------------------**********-----------------------------------

// Explicação:

// includes():

// Propósito: Verifica se um array contém um determinado elemento.
// Retorno: Retorna true se o elemento for encontrado, e false caso contrário.
// Uso: Ideal para verificar a existência exata de um valor em um array.
// Sintaxe: array.includes(elementoParaBuscar, indiceInicialOpcional)
// some():

// Propósito: Verifica se pelo menos um dos elementos em um array passa em um teste (fornecido por uma função de callback).
// Retorno: Retorna true se a função de callback retornar true para algum elemento, e false caso contrário.
// Uso: Mais flexível, permite verificar a existência com base em condições.
// Sintaxe: array.some(funcaoDeCallback(elemento, indiceOpcional, arrayOpcional))
// Em essência:

// includes() pergunta: "Este valor específico existe aqui?" (Retorna sim/não).
// some() pergunta: "Algum item aqui atende a esta regra?" (Retorna sim/não).

//----------------------------------------------------------------------------------------------

// Exercício 9: Contar quantos elementos existem no array
// Crie uma função chamada countElements que retorna a quantidade total de elementos em um array.

function countElements() {
  myArrayCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return myArrayCount.length;
}

console.log(countElements());

// Output:
// 10

//----------------------------------------------------------------------------------------------

// Explicação:

// A propriedade length de um array em JavaScript retorna um número inteiro que representa a quantidade de elementos contidos nesse array.

// Em essência:

// Conta quantos itens há no array.
// É uma propriedade, não um método (você acessa diretamente: meuArray.length).
// É atualizada automaticamente quando elementos são adicionados ou removidos (na maioria das operações).
// Para um array vazio, length é 0.

// Use .length sempre que precisar saber o tamanho de um array.

//----------------------------------------------------------------------------------------------

//Exercício 10: Substituir um elemento por outro

// Crie uma função chamada replaceItem que substitui o item "uva" por "morango" em um array de frutas e retorna o novo array.

function replaceItem() {
  myArrayFruit = ["maçã", "uva", "banana"];
  const FruitReplace = "morango";

  // Encontrar o índice do item "uva" no array
  const index = myArrayFruit.indexOf("uva");

  // Se "uva" for encontrado, substituir pelo "morango"
  if (index !== -1) {
    myArrayFruit[index] = FruitReplace;
  }

  return myArrayFruit;
}
console.log(replaceItem());

// Output:
// [ 'maçã', 'morango', 'banana' ]

//------------------------------**********-----------------------------------

// Explicação:

// O método indexOf() em JavaScript é usado para encontrar o primeiro índice em que um determinado elemento pode ser encontrado em um array.

// Em essência:

// Busca um elemento específico no array.
// Retorna o índice da primeira ocorrência do elemento encontrado.
// Retorna -1 se o elemento não for encontrado no array.
// A busca é feita da esquerda para a direita (do início para o fim).
// A comparação é feita usando igualdade estrita (===) e a comparação com !== (diferente de) também pode ser usada em conjunto com indexOf() para verificar se um elemento não existe em um array.

// Como funciona:

// Se o elemento que você está procurando não estiver presente no array, o método indexOf() retornará -1. Portanto, você pode usar a condição !== -1 para verificar se o elemento foi encontrado.
