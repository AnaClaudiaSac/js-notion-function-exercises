// Exercício 1: Verificar se uma palavra existe na frase
// Crie uma função chamada hasWord que recebe uma frase e uma palavra, e retorna true se a palavra estiver na frase, e false se não estiver.

function hasWord(phrase, word) {
  return phrase.includes(word);
}

console.log(hasWord("Hoje está um lindo dia", "lindo"));
console.log(hasWord("Aprender JavaScript é divertido", "chato"));
console.log(hasWord("Meu nome é Anna, adoro filmes e séries", "anna"));
console.log(hasWord("Meu nome é Anna, adoro filmes e séries", "Anna"));

// Output:
// true
// false
// false
// true

//-------------------**********------------------------

// Explicação:

// Em JavaScript, o método includes() é usado para verificar se um array ou string contém um determinado elemento. Aqui está um resumo conciso:

// Propósito: Determina se um valor específico existe dentro de um array ou string.
// Retorno: Retorna true se o valor for encontrado, e false caso contrário.
// Uso:
// Em arrays: array.includes(elemento)
// Em strings: string.includes(substring)
// Recursos adicionais:
// pode-se também passar um segundo parametro, para indicar de qual indice a busca deve iniciar.
// É sensível a maiúsculas e minúsculas.
// Em essência, includes() é uma maneira direta de verificar a presença de um item em uma coleção de dados em JavaScript.

// Resumo:

// Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.

//----------------------------------------------------------------------------------------

// Exercício 2: Encontrar a posição de uma palavra na frase
// Crie uma função chamada wordPosition que recebe uma frase e uma palavra, e retorna a posição (índice) onde a palavra aparece pela primeira vez.
// Se não encontrar, retorne -1.

function wordPosition(phrase, word) {
  return phrase.indexOf(word);
}

console.log(wordPosition("A casa é azul", "casa"));
console.log(wordPosition("A casa é azul", "verde"));
console.log(wordPosition("A Anna gosta de filmes e séries", "Ana"));
console.log(wordPosition("Estudar javascript é muito bom", "Estudar"));
console.log(wordPosition("Olá, mundo!", "!"));

// Output;
// 2
// -1
// -1
// 0
// 10

// Explicação:
// O método indexOf() é usado para encontrar a primeira ocorrência de um valor especificado dentro de uma string ou array.
// Funcionamento:

// Se o valor for encontrado, indexOf() retorna o índice da primeira ocorrência.
// Se o valor não for encontrado, indexOf() retorna -1.
// A pesquisa diferencia maiúsculas de minúsculas.
// Uso em Strings:

// Em strings, indexOf() procura por uma substring e retorna o índice do primeiro caractere da substring.

// Uso em Arrays:

// Em arrays, indexOf() procura por um elemento e retorna o índice desse elemento.
// Parâmetro opcional:

// indexOf() pode receber um segundo parâmetro opcional, que especifica o índice a partir do qual a pesquisa deve começar.
// Em resumo:

// indexOf() é uma ferramenta útil para encontrar a posição de valores em strings e arrays.
// É importante lembrar que a indexação em JavaScript sempre começa em 0.

//----------------------------------------------------------------------------------------
// Exercício 3: Verificar se a frase começa com uma palavra específica
// Crie uma função chamada startsWithWord que verifica se a frase começa com determinada palavra.

//1- Função errada;
function startsWithWord(phrase, word) {
  return phrase.includes(word);
}

console.log(startsWithWord("Bom dia, tudo bem?", "Bom")); // true
console.log(startsWithWord("Hoje é segunda-feira", "Ontem")); // false

// Explicação:
// O método includes() é usado para verificar se um array ou string contém um determinado elemento. Aqui está um resumo conciso:

// Propósito: Determina se um valor específico existe dentro de um array ou string.
// Retorno: Retorna true se o valor for encontrado, e false caso contrário.

//OBS: No exercicio este método não é eficaz, pois ele retorna o valor encontrado na frase. E o exercicio pede se a frase começa com determinada palavra.
//-----------------------------*******---------------------------------
//2 - Função correta:

function startsWithWord(phrase, word) {
  return phrase.startsWith(word);
}

console.log(startsWithWord("Bom dia, tudo bem?", "Bom"));
console.log(startsWithWord("Hoje é segunda-feira", "Ontem"));
console.log(startsWithWord("Adoro pão com ovos", "ovos"));
console.log(startsWithWord("Treino todos os dias", "Treino"));

// Output:
// true
// false
// false
// true

//-----------------------------*******---------------------------------

//OBS: Método startsWith mais eficaz.

// Explicação:

// Método startsWith
// O método startsWith é usado para verificar se uma string começa com uma sequência específica de caracteres. Ele é uma função nativa do JavaScript introduzida no ECMAScript 6 (ES6).
// string.startsWith(searchString, position)
// Parâmetros
// searchString (obrigatório): A sequência de caracteres que você deseja verificar se está no início da string.
// position (opcional): A posição na string em que a verificação deve começar. O valor padrão é 0.
// Valor de Retorno
// O método retorna um valor booleano:

// true se a string começa com a sequência especificada.
// false caso contrário.
// Exemplos
// JavaScript
// const frase = "Olá, mundo!";

// console.log(frase.startsWith("Olá")); // true
// console.log(frase.startsWith("mundo")); // false
// console.log(frase.startsWith("mundo", 5)); // true (verifica a partir da posição 5)

// Compatibilidade
// O método startsWith é amplamente suportado em navegadores modernos, mas pode não estar disponível em navegadores mais antigos. Para garantir compatibilidade, você pode usar um polyfill.

// Conclusão
// O método startsWith é uma maneira simples e eficiente de verificar se uma string começa com uma determinada sequência de caracteres, oferecendo uma alternativa mais legível e intuitiva em comparação com métodos mais antigos como indexOf.

//----------------------------------------------------------------------------------------

// Exercício 4: Verificar se a frase termina com uma palavra específica
// Crie uma função chamada endsWithWord que verifica se a frase termina com determinada palavra.

// 1- Função errada: Devolve número
function endsWithWord(phrase, word) {
  return phrase.lastIndexOf(word);
}

console.log(endsWithWord("Hoje é segunda-feira", "segunda-feira"));
console.log(endsWithWord("Hoje é segunda-feira", "domingo"));
console.log(endsWithWord("Olá Mundo!", "Olá"));

// Output:
// 7
// -1
// 0

//-----------------------------*******---------------------------------

// Explicação:
// Método lastIndexOf
// string.lastIndexOf(searchValue, fromIndex)
// Parâmetros
// searchValue (obrigatório): A sequência de caracteres que você deseja encontrar na string.
// fromIndex (opcional): A posição na string onde a busca deve começar, contando de trás para frente. O valor padrão é o comprimento da string.
// Valor de Retorno
// O método retorna um número:

// O índice da última ocorrência do valor especificado.
// -1 se o valor não for encontrado.

// Exemplos
// Encontrando a última ocorrência de um caractere:
// JavaScript
// const frase = "Olá, mundo! Mundo, olá!";

// console.log(frase.lastIndexOf("Mundo")); // 12
// console.log(frase.lastIndexOf("mundo")); // 5
// console.log(frase.lastIndexOf("Olá")); // 18
// console.log(frase.lastIndexOf("Hello")); // -1 (não encontrado)
// Usando o parâmetro fromIndex:
// JavaScript
// const frase = "Olá, mundo! Mundo, olá!";

// console.log(frase.lastIndexOf("mundo", 10)); // 5 (busca até o índice 10)
// console.log(frase.lastIndexOf("Mundo", 10)); // -1 (busca até o índice 10, mas "Mundo" está depois)
// Diferenças entre indexOf e lastIndexOf
// indexOf retorna a primeira ocorrência do valor especificado na string.
// lastIndexOf retorna a última ocorrência do valor especificado na string.
// Exemplos comparativos:
// JavaScript
// const frase = "Olá, mundo! Mundo, olá!";

// console.log(frase.indexOf("mundo")); // 5 (primeira ocorrência)
// console.log(frase.lastIndexOf("mundo")); // 5 (última ocorrência, que é a mesma nesse caso)

// console.log(frase.indexOf("Olá")); // 0 (primeira ocorrência)
// console.log(frase.lastIndexOf("Olá")); // 18 (última ocorrência)
// Conclusão
// O método lastIndexOf é útil quando você precisa encontrar a última ocorrência de um valor em uma string, especialmente quando o valor pode ocorrer várias vezes. A opção de usar o parâmetro fromIndex permite restringir a busca a uma parte específica da string.

//-----------------------------*******---------------------------------

// 2 - Função correta: Devolve Booleano

function endsWithWord(phrase, word) {
  return phrase.endsWith(word);
}

console.log(endsWithWord("Hoje é segunda-feira", "segunda-feira"));
console.log(endsWithWord("Hoje é segunda-feira", "domingo"));
console.log(endsWithWord("Adoro viajar e conhecer lugares novos", "novos"));
console.log(
  endsWithWord(
    "Amo comer Waffles no café da manhã com doce de leite!",
    "Waffles"
  )
);

// Output:
// true
// false
// true
// false

//--------------------------*******---------------------------------

// Explicação:
// Método endsWith
// O método endsWith é usado para verificar se uma string termina com uma sequência específica de caracteres.

// Sintaxe
// JavaScript
// string.endsWith(searchString, length)
// Parâmetros
// searchString (obrigatório): A sequência de caracteres que você deseja verificar se está no final da string.
// length (opcional): O comprimento da string a ser considerada na verificação. O valor padrão é o comprimento total da string.
// Valor de Retorno
// O método retorna um valor booleano:

// true se a string termina com a sequência especificada.
// false caso contrário.

// Exemplos
// JavaScript
// const frase = "Olá, mundo!";

// console.log(frase.endsWith("mundo!")); // true
// console.log(frase.endsWith("Olá")); // false
// console.log(frase.endsWith("mundo", 9)); // true (considera apenas os 9 primeiros

// Conclusão
// O método endsWith é uma maneira simples e eficiente de verificar se uma string termina com uma determinada sequência de caracteres, oferecendo uma alternativa mais legível e intuitiva em comparação com métodos mais antigos como lastIndexOf.

//----------------------------------------------------------------------------------------

// Exercício 5: Contar quantas vezes uma palavra aparece na frase
// Crie uma função chamada countWordOccurrences que conta quantas vezes uma palavra aparece dentro da frase.

function countWordOccurrences(phrase, word) {
  const lowercaseSentence = phrase.toLowerCase();
  const lowercaseWord = word.toLowerCase();
  const parts = lowercaseSentence.split(lowercaseWord);
  return parts.length - 1;
}

console.log(countWordOccurrences("gato cachorro gato gato", "gato"));
console.log(countWordOccurrences("banana maçã banana", "banana"));
console.log(countWordOccurrences("Gosto muito, muito de animais", "muito"));
console.log(countWordOccurrences("Olá Mundo! Mundo! Eu venci!", "mundo!"));

// Output:
// 3
// 2
// 2
// 2

//--------------------------*******---------------------------------

// Explicação:
// Transformação para letras minúsculas: Tanto a frase quanto a palavra são convertidas para letras minúsculas para garantir que a contagem não seja sensível a maiúsculas e minúsculas.
// Divisão da frase: A função split é usada para dividir a frase em partes, usando a palavra como delimitador.
// Contagem das partes: O número de ocorrências da palavra será igual ao tamanho do array resultante menos 1, já que a divisão cria um array com uma parte adicional entre cada ocorrência da palavra.
// Uso
// Você pode chamar a função contarOcorrencias passando a frase e a palavra que deseja contar.
// A função retornará o número de vezes que a palavra aparece na frase.

// Quando você usa o método split para dividir uma string em partes, ele cria um array (lista) de substrings. A divisão é feita sempre que a palavra que você está contando aparece na string.
// Usamos length - 1 porque o método split cria um array com uma parte a mais do que o número de vezes que a palavra aparece na frase. Ao subtrair 1 do comprimento do array, obtemos o número exato de ocorrências da palavra.

//-----------------------------------------------------------------------------------------------

// Exercício 6: Verificar se uma palavra está em maiúsculas
// Crie uma função chamada isUppercaseWord que recebe uma palavra e verifica se todos os caracteres estão em maiúsculas.

function isUppercaseWord(word) {
  return word === word.toUpperCase();
}

console.log(isUppercaseWord("OLÁ"));
console.log(isUppercaseWord("Olá"));
console.log(isUppercaseWord("escreva tudo letra em maiúscula."));
console.log(isUppercaseWord("ESCREVA TUDO EM LETRA MAIÚSCULA "));

// Output:
// true
// false
// false
// true

// Explicação:
// Fiz apenas uma comparação usando === estritamente igual letra minúscula é igual a letra MAIÚSCULA assim retornando Boolean

//-----------------------------------------------------------------------------------------------

// Exercício 7: Obter todas as palavras que contêm uma letra específica
// Crie uma função chamada wordsWithLetter que recebe uma frase e uma letra, e retorna um array com as palavras que contêm essa letra.

function wordsWithLetter(phrase, letter) {
  const words = phrase.split(" ");
  const wordsContainingLetter = words.filter((word) => word.includes(letter));
  return wordsContainingLetter;
}

console.log(wordsWithLetter("Hoje o sol está forte", "o"));
console.log(wordsWithLetter("Aprender é legal", "z"));
console.log(wordsWithLetter("Quero ir para lugar onde tenha cachoeira!", "u"));
console.log(wordsWithLetter("Adoro pão de queijo e café", "e"));

// Output:
// [ 'Hoje', 'o', 'sol', 'forte' ]
// []
// [ 'Quero', 'lugar' ]
// [ 'de', 'queijo', 'e' ]

//--------------------------*******---------------------------------

// Explicação:

// 1. filter()
// Cria um novo array com todos os elementos que passam em um teste implementado por uma função fornecida.
// Como funciona:
// Itera sobre cada elemento do array original.
// Executa uma função de teste (callback) para cada elemento.
// Se a função de teste retornar true, o elemento é incluído no novo array.
// Se retornar false, o elemento é ignorado.
// Exemplo:

// const numeros = [1, 5, 10, 15, 20];
// const numerosFiltrados = numeros.filter(numero => numero > 10);
// console.log(numerosFiltrados); // Saída: [15, 20]

// 2. includes()
// Determina se um array contém um determinado elemento, retornando true ou false conforme apropriado.
// Como funciona:
// Procura pelo elemento especificado dentro do array.
// Retorna true se o elemento for encontrado, false caso contrário.
// Exemplo:

// const frutas = ["maçã", "banana", "laranja"];
// console.log(frutas.includes("banana")); // Saída: true
// console.log(frutas.includes("uva")); // Saída: false
// Combinação de filter() e includes()

// É comum usar includes() dentro de filter() para filtrar arrays com base na presença de certos valores:

// const palavras = ["sol", "lua", "estrela", "planeta"];
// const palavrasFiltradas = palavras.filter(palavra => palavra.includes("la"));
// console.log(palavrasFiltradas); // Saída: ["estrela", "planeta"]
// Em resumo:

// filter(): filtra um array com base em uma condição, criando um novo array.
// includes(): verifica se um array contém um valor específico, retornando um booleano.

//-----------------------------------------------------------------------------------------------

// Exercício 8: Encontrar a primeira palavra que começa com uma letra específica
// Crie uma função chamada findFirstByLetter que retorna a primeira palavra da frase que começa com uma letra específica.
// Se nenhuma palavra começar com essa letra, retorne null.

function findFirstByLetter(phrase, letter) {
  const words = phrase.split(" ");
  const foundWord = words.find(
    (words) => words[0].toLowerCase() === letter.toLowerCase()
  );
  return foundWord != undefined ? foundWord : null;
}

console.log(findFirstByLetter("Hoje vamos estudar lógica", "e")); // "estudar"
console.log(findFirstByLetter("Nada encontrado aqui", "z")); // null
console.log(
  findFirstByLetter("Gosto muito de comer Korn Flakes com danone ou leite", "m")
);
console.log(findFirstByLetter("Estou focada em estudar javascript", "e"));

// Output:
// estudar
// null
// muito
// Estou

//--------------------------*******---------------------------------

// Explicação:
// Esse comando utiliza o operador ternário para verificar se a variável foundWord possui um valor definido (ou seja, não é undefined). Se foundWord tiver um valor (diferente de undefined), ele é retornado; caso contrário, retorna null.

// O método find() é uma função de array do JavaScript que retorna o primeiro elemento do array que satisfaz uma condição especificada por uma função callback. Se nenhum elemento atender à condição, ele retorna undefined.

// Em resumo:

// Executa a função callback para cada elemento do array.
// Retorna o primeiro elemento para o qual a callback retorna um valor truthy.
// Interrompe a iteração quando encontra o elemento que atende à condição.
// Se nenhum elemento atende a condição, retorna undefined.

//----------------------------------------------------------------------------------------------
// Exercício 9: Destacar uma palavra na frase
// Crie uma função chamada highlightWord que recebe uma frase e uma palavra, e retorna a mesma frase com a palavra destacada entre asteriscos *.

function highlightWord(phrase, word) {
  const highlightedSentence = phrase.replaceAll(word, `*${word}*`);
  return highlightedSentence;
}

console.log(highlightWord("Eu gosto de café", "café"));
console.log(highlightWord("Javascript é legal", "é"));
console.log(highlightWord("Eu me chamo Anna", "Anna"));
console.log(highlightWord("Adoro filmes e seriados", "filmes"));

// Output:
// Eu gosto de *café*
// Javascript *é* legal
// Eu me chamo *Anna*
// Adoro *filmes* e seriados

//--------------------------*******---------------------------------

// Explicação:
// Como foi usado para destacar a palavra:

// O método replaceAll(palavra,*${palavra}*) funciona da seguinte maneira:

// Ele procura todas as ocorrências da string contida na variável palavra dentro da string frase.
// Para cada ocorrência encontrada, ele a substitui pelo segundo argumento, que é o template literal `*${palavra}*`.
// Devido ao template literal, o valor da variável palavra é inserido entre dois asteriscos.

// Em resumo, o *${palavra}* dentro do replaceAll() cria dinamicamente a string que será usada para substituir a palavra original, garantindo que a palavra seja envolvida por asteriscos na frase resultante. Os templates literais tornam essa construção de strings com variáveis muito mais clara e concisa do que a concatenação tradicional.

//----------------------------------------------------------------------------------------------

// Exercício 10: Substituir uma palavra por outra na frase

// Crie uma função chamada replaceWord que recebe uma frase, uma palavra antiga e uma nova, e retorna a frase com a substituição feita.
function replaceWord(phrase, oldWord, newWord) {
  const modifiedSentence = phrase.replaceAll(oldWord, newWord);
  return modifiedSentence;
}

console.log(replaceWord("Hoje está chovendo", "chovendo", "ensolarado"));
console.log(replaceWord("Eu amo pizza", "pizza", "hambúrguer"));
console.log(replaceWord("Agora a tarde está muito frio", "frio", "quente"));
console.log(replaceWord("Eu gosto de roupas coloridas", "coloridas", "pretas"));

// Output:
// Hoje está ensolarado
// Eu amo hambúrguer
// Agora a tarde está muito quente
// Eu gosto de roupas pretas

//--------------------------*******---------------------------------

// Explicação:

// Primeira ocorrência: Este método substitui apenas a primeira ocorrência da searchValue (o valor que você quer substituir) que ele encontrar na string.
// Tipos de searchValue: A searchValue pode ser tanto uma string literal (como "palavra") quanto um objeto RegExp (para buscas mais complexas com padrões).
// Substituição com string ou função: O newValue (o valor pelo qual você quer substituir) pode ser uma string literal ou uma função que gera a nova substring.
// Exemplo do replace():

// const texto = "O rato roeu a roupa do rato.";
// const novoTexto1 = texto.replace("rato", "esquilo");
// console.log(novoTexto1); // Saída: O esquilo roeu a roupa do rato.

// const novoTexto2 = texto.replace(/rato/g, "esquilo"); // Usando RegExp para substituir todas as ocorrências (flag 'g' - global)
// console.log(novoTexto2); // Saída: O esquilo roeu a roupa do esquilo.
// replaceAll(searchValue, newValue):

// Todas as ocorrências: Este método substitui todas as ocorrências da searchValue que ele encontrar na string.
// Tipos de searchValue: A partir do ECMAScript 2021, a searchValue pode ser tanto uma string literal quanto um objeto RegExp. No entanto, se você usar um RegExp, a flag global g (para "global") é obrigatória. Se você tentar usar um RegExp sem a flag g, um erro (TypeError) será lançado.
// Substituição com string ou função: Similar ao replace(), o newValue pode ser uma string literal ou uma função que gera a nova substring.
// Exemplo do replaceAll():

// const texto = "O rato roeu a roupa do rato.";
// const novoTexto1 = texto.replaceAll("rato", "esquilo");
// console.log(novoTexto1); // Saída: O esquilo roeu a roupa do esquilo.

// const novoTexto2 = texto.replaceAll(/rato/g, "esquilo"); // Usando RegExp com a flag 'g'
// console.log(novoTexto2); // Saída: O esquilo roeu a roupa do esquilo.

// A linha abaixo geraria um erro (TypeError) porque a RegExp não tem a flag 'g':
// const erroTexto = texto.replaceAll(/rato/, "esquilo");
// Em resumo:

// Use replace() quando você precisa substituir apenas a primeira ocorrência de uma substring ou quando você precisa de funcionalidades mais complexas com RegExp sem necessariamente substituir todas as ocorrências.
// Use replaceAll() quando o objetivo é substituir todas as ocorrências de uma substring de forma direta. Se usar RegExp com replaceAll(), lembre-se sempre da flag g.
// No contexto dos exercícios anteriores, usamos replaceAll() porque o objetivo era destacar ou substituir todas as vezes que a palavra aparecia na frase.

// Nesse último exercícico ele usa o replaceAll() por baixo dos panos para garantir que todas as mudanças sejam feitas.
