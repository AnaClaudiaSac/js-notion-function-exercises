// Exercício 1: Adicionar um item no final do array
// Crie uma função chamada addItemToEnd que adiciona um novo item ao final de um array de frutas.

function addItemToEnd() {
  const fruits = ["maçã", "banana", "uva"];
  fruits.push("morango");
  return fruits;
}

console.log(addItemToEnd());

// Output:
// [ 'maçã', 'banana', 'uva', 'morango' ]

//-----------------------**********--------------------------

// Explicação:

// O método push() em JavaScript é usado para adicionar um ou mais elementos ao final de um array.

// Principais características:

// Modifica o array original: push() altera diretamente o array ao qual é aplicado, adicionando os novos elementos no final.
// Retorna o novo comprimento: O valor de retorno do método push() é o novo número de elementos (o novo comprimento) do array após a adição.
// Adiciona em ordem: Se você passar múltiplos argumentos para push(), eles serão adicionados ao array na ordem em que aparecem.
// Pode adicionar qualquer tipo de dado: Você pode adicionar elementos de qualquer tipo de dado (strings, números, objetos, outros arrays, etc.) ao array usando push().
// Em resumo:

// Use push() quando você precisar acrescentar itens ao final de um array e quiser saber o novo tamanho desse array. Lembre-se que ele muda o array original.

//-------------------------------------------------------------------------------------

// Exercício 2: Adicionar um item no início do array
// Crie uma função chamada addItemToStart que adiciona um novo item no começo de um array de nomes.

function addItemToStart() {
  const names = ["Ana", "João"];
  names.unshift("Lucas");
  return names;
}

console.log(addItemToStart());

// Output:
// [ 'Lucas', 'Ana', 'João' ]

//-----------------------**********--------------------------

// Explicação:
// O método unshift() em JavaScript é usado para adicionar um ou mais elementos ao início de um array.

// Principais características:

// Modifica o array original: Assim como push(), unshift() altera diretamente o array ao qual é aplicado, inserindo os novos elementos no começo.
// Retorna o novo comprimento: O valor de retorno de unshift() é o novo número de elementos (o novo comprimento) do array após a inserção.
// Adiciona em ordem: Se você passar múltiplos argumentos para unshift(), eles serão adicionados ao array na ordem em que aparecem, de forma que o primeiro argumento se torna o novo primeiro elemento.
// Desloca os elementos existentes: Ao adicionar elementos no início, todos os elementos que já estavam no array são deslocados para um índice maior.
// Em resumo:

// Utilize unshift() quando você precisa inserir itens no começo de um array e deseja saber o novo tamanho desse array. Tenha em mente que ele modifica o array original e realiza um deslocamento dos elementos já existentes, o que pode ser menos eficiente para arrays grandes em comparação com push().

//-------------------------------------------------------------------------------------

// Exercício 3: Remover o último item do array
// Crie uma função chamada removeLastItem que remove o último item de um array de cores.
function removeLastItem() {
  const colors = ["vermelho", "verde", "azul"];
  colors.pop();
  return colors;
}

console.log(removeLastItem());

// Output:
// [ 'vermelho', 'verde' ]

//-----------------------**********--------------------------

// Explicação:

// O método pop() em JavaScript é usado para remover o último elemento de um array.

// Principais características:

// Modifica o array original: pop() altera diretamente o array ao qual é aplicado, removendo o elemento do final e diminuindo o comprimento do array em 1.
// Retorna o elemento removido: O valor de retorno do método pop() é o elemento que foi removido do array. Se o array estiver vazio, pop() retorna undefined.
// Não aceita argumentos: O método pop() não recebe nenhum argumento. Ele sempre remove o último elemento.
// Em resumo:

// Use pop() quando você precisa remover o último item de um array e deseja obter o valor desse item removido. Lembre-se que ele muda o array original.

//-------------------------------------------------------------------------------------

// Exercício 4: Remover o primeiro item do array
// Crie uma função chamada removeFirstItem que remove o primeiro item de um array de cidades.

function removeFirstItem() {
  const cities = ["São Paulo", "Curitiba", "Recife"];
  cities.shift();
  return cities;
}

console.log(removeFirstItem());

// Output:
// ["Curitiba", "Recife"];

//-----------------------**********--------------------------

// Explicação:
// O método shift() em JavaScript é usado para remover o primeiro elemento de um array.

// Principais características:

// Modifica o array original: shift() altera diretamente o array ao qual é aplicado, removendo o elemento do início e deslocando todos os elementos restantes para um índice menor. O comprimento do array diminui em 1.
// Retorna o elemento removido: O valor de retorno do método shift() é o elemento que foi removido do array. Se o array estiver vazio, shift() retorna undefined.
// Não aceita argumentos: O método shift() não recebe nenhum argumento. Ele sempre remove o primeiro elemento.
// Em resumo:

// Utilize shift() quando você precisa remover o item do começo de um array e deseja obter o valor desse item removido. Tenha em mente que ele modifica o array original e realiza um deslocamento de todos os elementos, o que pode ser menos eficiente para arrays grandes em comparação com pop().

//-------------------------------------------------------------------------------------

// Exercício 5: Inverter a ordem de um array
// Crie uma função chamada reverseArray que inverte os itens de um array de números.

function reverseArray() {
  const numbers = [1, 2, 3];
  numbers.reverse();
  return numbers;
}

console.log(reverseArray());

// Output:
// [ 3, 2, 1 ]

//-----------------------**********--------------------------

// Explicação:
// O método reverse() em JavaScript é usado para inverter a ordem dos elementos de um array.

// Principais características:

// Modifica o array original (in-place): reverse() altera diretamente o array ao qual é aplicado, reorganizando os elementos de forma que o último se torna o primeiro, o penúltimo se torna o segundo, e assim por diante.
// Não retorna um novo array: Ao contrário de alguns outros métodos de array, reverse() não cria e retorna um novo array. Ele retorna uma referência ao array original que foi modificado.
// Não aceita argumentos: O método reverse() não recebe nenhum argumento.

// Em resumo:
// Utilize reverse() quando você precisa reverter a ordem dos elementos dentro de um array existente. Lembre-se que ele modifica o array original. Se você precisa manter o array original intacto, é necessário criar uma cópia antes de aplicar o reverse().

//-------------------------------------------------------------------------------------

// Exercício 6: Juntar dois arrays
// Crie uma função chamada joinArrays que junta dois arrays: um com frutas e outro com legumes.

function joinArrays() {
  const fruits = ["maçã", "banana"];
  const vegetable = ["cenoura", "batata"];
  const sum = fruits.concat(vegetable);
  return sum;
}

console.log(joinArrays());

// Output:
// [ 'maçã', 'banana', 'cenoura', 'batata' ]

//-----------------------**********--------------------------

//Expkicação:
// O método concat() em JavaScript é usado para juntar dois ou mais arrays (ou valores) em um novo array.

// Principais características:

// Cria um novo array: concat() não modifica os arrays originais. Ele sempre retorna um novo array contendo os elementos dos arrays concatenados.
// Aceita múltiplos argumentos: Você pode passar um ou mais arrays (ou valores individuais) como argumentos para concat(). Eles serão adicionados ao novo array na ordem em que são fornecidos.
// Concatena valores: Além de arrays, concat() também pode concatenar valores individuais (como números, strings, booleanos) diretamente ao novo array.
// Arrays planos: Se você passar um array como argumento, seus elementos serão adicionados ao novo array (o array é "aplanado" em um nível).
// Em resumo:

// Utilize concat() quando você precisa combinar os elementos de dois ou mais arrays (ou adicionar valores a um array) sem alterar os arrays originais. O resultado é sempre um novo array com todos os elementos combinados.

//-------------------------------------------------------------------------------------

// Exercício 7: Ordenar um array de números
// Crie uma função chamada sortNumbers que ordena um array de números em ordem crescente.

function sortNumbers() {
  const numbers = [5, 2, 9, 1];
  numbers.sort((a, b) => a - b);
  return numbers;
}
console.log(sortNumbers());

// Output:
// [ 1, 2, 5, 9 ]

//-----------------------**********--------------------------

// Explicação:

// O método sort() em JavaScript é usado para ordenar os elementos de um array no local (ou seja, ele modifica o array original).

// Comportamento Padrão (Sem Função de Comparação):

// Por padrão, sort() converte todos os elementos do array em strings e os compara de acordo com a ordem dos pontos de código Unicode.
// Isso significa que a ordenação pode não ser a esperada para números. Por exemplo, [10, 2, 1].sort() resultaria em [1, 10, 2] porque "1" vem antes de "2" e "10" começa com "1".
// Usando uma Função de Comparação (Para Ordenação Personalizada):

// Para ordenar elementos de forma diferente (como números em ordem crescente ou decrescente, ou strings de forma não alfabética), você pode fornecer uma função de comparação como argumento para o sort() method.

// Sintaxe: array.sort(funcaoDeComparacao)
// Função de Comparação: Esta função aceita dois argumentos (geralmente chamados a e b) que representam dois elementos quaisquer do array a serem comparados. Ela deve retornar um valor:
// Menor que zero (< 0): Se a deve vir antes de b.
// Zero (0): Se a e b são considerados iguais em relação à ordenação.
// Maior que zero (> 0): Se a deve vir depois de b.
// Exemplos com Função de Comparação:

// Ordenar números em ordem crescente:

// const numeros = [3, 1, 4, 1, 5, 9, 2, 6];
// numeros.sort((a, b) => a - b); // Retorna negativo se a < b, positivo se a > b
// console.log(numeros); // Saída: [1, 1, 2, 3, 4, 5, 6, 9]

// Ordenar números em ordem decrescente:

// const numerosDecrescente = [3, 1, 4, 1, 5, 9, 2, 6];
// numerosDecrescente.sort((a, b) => b - a); // Inverte a lógica da crescente
// console.log(numerosDecrescente); // Saída: [9, 6, 5, 4, 3, 2, 1, 1]
// Ordenar strings alfabeticamente (sensível a maiúsculas e minúsculas):

// const palavras = ["zebra", "Formiga", "cachorro", "Bola"];
// palavras.sort(); // Comportamento padrão (Unicode)
// console.log(palavras); // Saída: ["Bola", "Formiga", "cachorro", "zebra"]
// Ordenar strings alfabeticamente (insensível a maiúsculas e minúsculas):

// const palavrasInsensivel = ["zebra", "Formiga", "cachorro", "Bola"];
// palavrasInsensivel.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// console.log(palavrasInsensivel); // Saída: ["Bola", "cachorro", "Formiga", "zebra"]

// Para uma ordenação alfabética básica de palavras (sensível a maiúsculas e minúsculas), basta chamar arrayDePalavras.sort().

// Em resumo:
// O método sort() é uma ferramenta poderosa para ordenar arrays em JavaScript. Entender seu comportamento padrão (ordenação de strings Unicode) e como usar a função de comparação é crucial para realizar ordenações personalizadas de números, strings ou objetos com base em critérios específicos. Lembre-se que sort() modifica o array original. Se você precisa preservar o array original, crie uma cópia antes de usar sort().

//-------------------------------------------------------------------------------------

// Exercício 8: Ordenar um array de strings (alfabeticamente)
// Crie uma função chamada sortWords que ordena um array de palavras em ordem alfabética.
function sortWords() {
  const fruits = ["banana", "uva", "abacaxi"];
  fruits.sort();
  return fruits;
}

console.log(sortWords());

// Output:
// [ 'abacaxi', 'banana', 'uva' ]

//-----------------------**********--------------------------

//Explicação:

// Para uma ordenação alfabética básica de palavras (sensível a maiúsculas e minúsculas), basta chamar arrayDePalavras.sort().

//-------------------------------------------------------------------------------------

// Exercício 9: Transformar um array em uma string com vírgulas
// Crie uma função chamada arrayToString que transforma um array de comidas em uma string separada por vírgulas.

function arrayToString() {
  const food = ["pizza", "hambúrguer", "sushi"];
  const stringFood = food.join(" , ");
  return stringFood;
}

console.log(arrayToString());

// Output:
// pizza , hambúrguer , sushi

//-----------------------**********--------------------------

// Explicação:

// Método join():

// O método join() cria e retorna uma nova string concatenando todos os elementos de um array. Você pode especificar um separador que será usado entre cada elemento na string resultante. Se você não fornecer um separador, o padrão é uma vírgula (,).

// Em resumo:

// O método join() é a maneira mais simples e direta de transformar um array em uma string onde os elementos são separados por um delimitador especificado (ou vírgula por padrão). Ele não modifica o array original, mas retorna uma nova string.

//-------------------------------------------------------------------------------------

// Exercício 10: Remover um item específico do array
// Crie uma função chamada removeItem que remove a palavra "banana" de um array de frutas.

function removeItem() {
  const fruits = ["maçã", "banana", "uva"];
  fruits.splice(1, 1);
  return fruits;
}

console.log(removeItem());

// Output:
// [ 'maçã', 'uva' ]

//-----------------------**********--------------------------

// Explicação:

// O método splice() em JavaScript é usado para modificar o conteúdo de um array, removendo, substituindo ou adicionando elementos no local.

// Principais características:

// Modifica o array original: splice() altera diretamente o array ao qual é aplicado.
// Pode remover elementos: Você especifica o índice de início e o número de elementos a serem removidos.
// Pode adicionar elementos: Você pode inserir novos elementos a partir de um determinado índice, sem necessariamente remover outros.
// Retorna um array dos elementos removidos: O método splice() retorna um novo array contendo os elementos que foram removidos (se houver algum). Se nenhum elemento for removido, retorna um array vazio.
// splice() é uma ferramenta versátil para remover, substituir e inserir elementos em qualquer posição de um array, com a importante característica de alterar o array original e retornar os elementos removidos.

//-------------------------------------------------------------------------------------
//  Método Método slice()

// O método slice() em JavaScript é usado para criar uma nova cópia superficial (shallow copy) de uma parte de um array. O array original não é modificado.

// Principais características:

// Não modifica o array original: slice() sempre retorna um novo array.
// Cria uma cópia superficial: Se os elementos do array original forem objetos, a cópia conterá referências aos mesmos objetos. Modificar o objeto na cópia afetará o objeto original (e vice-versa).
// Aceita dois argumentos opcionais:
// begin (opcional): O índice onde a cópia começará (inclusivo). Se omitido, a cópia começará do índice 0. Pode ser um índice negativo para começar a contar a partir do final do array.
// end (opcional): O índice onde a cópia terminará (exclusivo). Os elementos até este índice, mas não incluindo ele, serão copiados. Se omitido, a cópia terminará no final do array. Também pode ser um índice negativo para indicar uma posição a partir do final do array.
// Sintaxe:

// array.slice(begin, end);
// Em resumo:

// slice() é útil quando você precisa extrair uma parte de um array em um novo array sem alterar o array original. Você pode especificar o início e o fim da porção que deseja copiar. Se nenhum argumento for fornecido, slice() cria uma cópia superficial de todo o array.
