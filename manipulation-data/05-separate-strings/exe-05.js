// Exercício 1: Separar uma frase em palavras
// Crie uma função chamada splitSentence que recebe uma frase e retorna um array com cada palavra separada.

// ℹ️ Dica: Use o método .split(" ") para dividir a string pelos espaços.

function splitSentence(phrase) {
  return phrase.split(" ");
}

console.log(splitSentence("Olá mundo!"));
console.log(splitSentence("Hoje é um lindo dia"));
console.log(splitSentence("Meu nome é Anna, gosto de estudar Javascript!"));
console.log(splitSentence("Eu amo muito meu Amor"));

// Output:
// [ 'Olá', 'mundo!' ]
// [ 'Hoje', 'é', 'um', 'lindo', 'dia' ]
// [
//   'Meu',
//   'nome',
//   'é',
//   'Anna,',
//   'gosto',
//   'de',
//   'estudar',
//   'Javascript!'
// ]
// [ 'Eu', 'amo', 'muito', 'meu', 'Amor' ]

// Explicação:

// O método split() em JavaScript é uma ferramenta poderosa para manipular strings. Ele permite que você divida uma string em um array de substrings, usando um separador especificado.

// Como funciona:

// Separador: Você fornece um separador (uma string ou expressão regular) como argumento para o método split().
// Divisão: O método procura ocorrências do separador na string original.
// Array de substrings: A string é dividida em substrings nos pontos onde o separador é encontrado.
// Retorno: O método retorna um novo array contendo as substrings.
// Parâmetros:

// separador (opcional): A string ou expressão regular que indica onde a string deve ser dividida. Se omitido, a string inteira será transformada em um array com um único elemento.
// limite (opcional): Um número inteiro que especifica o número máximo de substrings a serem incluídas no array retornado.
// Observações:

// Se o separador for uma string vazia (""), a string original será dividida em caracteres individuais.
// O método split() não modifica a string original. Ele retorna um novo array com as substrings.
// Em resumo:

// O método split() é essencial para manipular strings em JavaScript. Ele permite que você divida strings em partes menores, facilitando o processamento e a análise de dados textuais.

//---------------------------------------------------------------------------------
// Exercício 2: Separar uma string por vírgulas
// Crie uma função chamada splitByComma que recebe uma lista de itens separada por vírgula e retorna um array com os itens separados.

function splitByComma(items) {
  return items.split(",");
}

console.log(splitByComma("banana, maçã, uva, laranja, abacate"));
console.log(splitByComma("carro, moto, bicicleta"));
console.log(splitByComma("estudar, aprender, trabalhar"));
console.log(splitByComma("chuva, pipoca, filme"));

// Output:

// [ 'banana', ' maçã', ' uva', ' laranja', ' abacate' ]
// [ 'carro', ' moto', ' bicicleta' ]
// [ 'estudar', ' aprender', ' trabalhar' ]
// [ 'chuva', ' pipoca', ' filme' ]

//---------------------------------------------------------------------------------

// Exercício 3: Separar um nome completo em nome e sobrenome
// Crie uma função chamada splitFullName que recebe um nome completo e retorna um array com o primeiro nome e o sobrenome.

function splitFullName(fullName) {
  const nameParts = fullName.split(" ");
  const [firstName, ...lastNameParts] = nameParts;
  return [firstName, lastNameParts.join(" ")];
}

console.log(splitFullName("Antonio Silva"));
console.log(splitFullName("Maria Souza"));
console.log(splitFullName("Ana Sacute"));
console.log(splitFullName("Gabriel Barbosa"));

// Output:
// [ 'Antonio', 'Silva' ]
// [ 'Maria', 'Souza' ]
// [ 'Ana', 'Sacute' ]
// [ 'Gabriel', 'Barbosa' ]

// Explicação:
// O método join() em JavaScript é uma função poderosa para manipular arrays, transformando seus elementos em uma única string. Aqui está um resumo das principais características e como você pode usá-lo:

// O que o join() faz:

// Converte arrays em strings: Ele pega todos os elementos de um array e os junta em uma string.
// Personaliza o separador: Você pode escolher qual caractere ou sequência de caracteres usar para separar os elementos na string resultante. Se você não especificar um separador, o join() usa vírgulas (",") por padrão.
// O método join() não modifica o array original. Ele cria uma nova string com os elementos do array.
// Se um elemento do array for undefined ou null, ele será convertido em uma string vazia na string resultante.

// Em resumo:

// O join() é uma ferramenta versátil para formatar dados de arrays em strings, oferecendo controle sobre como os elementos são separados. Isso é útil em diversas situações, como exibir dados em interfaces de usuário, criar strings para URLs ou formatar dados para armazenamento.

//---------------------------------------------------------------------------------

// Exercício 4: Separar um texto em linhas
// Crie uma função chamada splitByLine que recebe um texto contendo quebras de linha (\n) e retorna um array com cada linha separada.

function splitByLine(text) {
  const lines = text.split("\n");
  return lines;
}

const text = "Primeira linha\nSegunda linha\nTerceira linha\nQuarta Linha";
console.log(splitByLine(text));
const text1 = "Uma\nDuas\nTres\nQuatro\nCinco\nSeis\nSete\nOito";
console.log(splitByLine(text1));

// Output:
// [ 'Primeira linha', 'Segunda linha', 'Terceira linha', 'Quarta Linha' ]
// [
//   'Uma',   'Duas',
//   'Tres',  'Quatro',
//   'Cinco', 'Seis',
//   'Sete',  'Oito'
// ]

// Explicação:
// O método split() é uma ferramenta poderosa para manipular strings em JavaScript. Ele pode ser usado com qualquer separador, não apenas '\n'.
// Caso a string passada para a função não tenha nenhuma quebra de linha, a função irá retornar um array com apenas um elemento, que será a string original.

//---------------------------------------------------------------------------------
// Exercício 5: Obter a primeira palavra de uma string
// Crie uma função chamada getFirstWord que recebe uma frase e retorna apenas a primeira palavra.

// ℹ️ Dica: Use .split(" ")[0] para pegar o primeiro item do array.

function getFirstWord(phrase) {
  return phrase.split(" ")[0];
}

console.log(getFirstWord("Olá mundo!"));
console.log(getFirstWord("Javascript é incrível!"));
console.log(getFirstWord("Primeiro item"));
console.log(getFirstWord("Peguei tudo que queria!"));

// Output:
// Olá
// Javascript
// Primeiro
// Peguei

//Explicação:
// O que o .split() faz?

// O método .split() é usado em strings para dividi-las em um array de substrings, com base em um separador especificado. No seu caso, o separador é um espaço em branco (" ").

// 2. Como funciona o [0]?

// Em JavaScript, arrays são indexados a partir de 0. Isso significa que o primeiro elemento de um array está na posição 0, o segundo na posição 1, e assim por diante. Ao usar [0] após o .split(), você está acessando o primeiro elemento do array resultante.

//---------------------------------------------------------------------------------

// Exercício 6: Obter a última palavra de uma string
// Crie uma função chamada getLastWord que recebe uma frase e retorna apenas a última palavra.

// ℹ️ Dica: Use .split(" ") e pegue o último item do array.

function getLastWord(phrase) {
  const words = phrase.split(" ");
  const lastWord = words[words.length - 1];
  return lastWord;
}

console.log(getLastWord("Olá mundo!"));
console.log(getLastWord("Programação é divertida"));
console.log(getFirstWord("Estudando Javascript"));
console.log(getLastWord("Meu foco é programar em React Native"));

// Output:
// mundo!
// divertida
// Estudando
// Native

// Explicação:
// O que faz o .split(" ")?

// Dividindo Strings: O método .split() é usado em strings para quebrá-las em um array de substrings.
// Delimitador: O argumento " " dentro do split() especifica que a string deve ser dividida sempre que um espaço em branco for encontrado.
// Resultado: O resultado é um array onde cada elemento é uma palavra da string original.

// Como pegar o último item do array?

// Arrays em JavaScript são indexados a partir de 0. Isso significa que o primeiro elemento está no índice 0, o segundo no índice 1 e assim por diante.
// Para acessar o último elemento, você pode usar a propriedade length do array para obter o número total de elementos e, em seguida, subtrair 1 para obter o índice do último elemento.

// Usos práticos:

// Extraindo nomes de arquivos: Se você tiver um caminho de arquivo como uma string, poderá usar essa técnica para extrair o nome do arquivo.
// Processando entrada do usuário: Se você estiver recebendo entrada do usuário como uma string, poderá usar essa técnica para analisar a entrada e extrair as informações relevantes.
// Manipulação de texto: Em geral, essa técnica é útil sempre que você precisar dividir uma string em palavras e trabalhar com a última palavra.

//---------------------------------------------------------------------------------

// Exercício 7: Separar um número de telefone
// Crie uma função chamada splitPhoneNumber que recebe um número de telefone no formato (XX) XXXX-XXXX e retorna um array com o DDD e o número separados.

function splitPhoneNumber(phoneNumber) {
  const clearPhoneNumber = phoneNumber.replace(/[()]/g, "");
  return clearPhoneNumber.split(" ");
}

console.log(splitPhoneNumber("(41) 99999-1234"));
console.log(splitPhoneNumber("(11) 98765-4321"));
console.log(splitPhoneNumber("(99) 99999-9999"));
console.log(splitPhoneNumber("(22) 22222-2222"));

// Output:
// [ '41', '99999-1234' ]
// [ '11', '98765-4321' ]
// [ '99', '99999-9999' ]
// [ '22', '22222-2222' ]

// Explicação:
// Método replace()

// O que é o replace()?

// O método replace() é uma função em JavaScript usada para substituir partes de uma string por outra string ou por um padrão definido por uma expressão regular.

// Como funciona?

// O método replace() recebe dois argumentos:

// O valor a ser substituído: Pode ser uma string simples ou uma expressão regular.
// O novo valor: A string que substituirá o valor encontrado.

// /g é um modificador (flag) usado em expressões regulares (regex) dentro do método replace(). Ele tem um papel específico:

// g significa "global": Quando o modificador g é incluído em uma expressão regular, ele instrui o mecanismo de regex a procurar todas as ocorrências de um padrão dentro da string, em vez de parar após encontrar a primeira correspondência.
// /[()]/ é a expressão regular que corresponde a qualquer caractere ( ou ).
// /g é o modificador global.
// "" é a string de substituição.
// Portanto, essa linha remove todas as ocorrências de parênteses da string phoneNumber. Sem o g, apenas a primeira ocorrência de ( ou ) seria removida.
// clearPhoneNumber.split(" "):
// Essa linha divide a string resultante (sem os parênteses) em um array de substrings, usando o espaço (" ") como delimitador.
// Portanto, o /g garante que todos os parênteses sejam removidos, independentemente de quantas vezes apareçam na string se fosse o caso.

//---------------------------------------------------------------------------------

// Exercício 8: Separar um e-mail em nome de usuário e domínio
// Crie uma função chamada splitEmail que recebe um e-mail e retorna um array com o nome de usuário e o domínio.

// ℹ️ Dica: Use .split("@") para dividir o e-mail.

function splitEmail(email) {
  return email.split("@");
}

console.log(splitEmail("gabriel@email.com"));
console.log(splitEmail("usuario@dominio.com.br"));
console.log(splitEmail("anna@sacute.com"));
console.log(splitEmail("anna.sacute@sacute.com"));

// Output:
// [ 'gabriel', 'email.com' ]
// [ 'usuario', 'dominio.com.br' ]
// [ 'anna', 'sacute.com' ]
// [ 'anna.sacute', 'sacute.com' ]

//---------------------------------------------------------------------------------

// Exercício 9: Separar um caminho de arquivo
// Crie uma função chamada splitFilePath que recebe um caminho de arquivo e retorna um array com cada parte do caminho separada.

// ℹ️ Dica: Use .split("/") para dividir por barras.

function splitFilePath(filePath) {
  return filePath.split("/");
}

console.log(splitFilePath("/home/usuario/documentos/arquivo.txt"));
console.log(splitFilePath("C:/Users/Gabriel/Desktop/foto.jpg"));
console.log(splitFilePath("C:/Documents/Javascript/aulas"));
console.log(splitFilePath("A:/Anna/Javascript/React Native"));

// Output:
// [ '', 'home', 'usuario', 'documentos', 'arquivo.txt' ]
// [ 'C:', 'Users', 'Gabriel', 'Desktop', 'foto.jpg' ]
// [ 'C:', 'Documents', 'Javascript', 'aulas' ]
// [ 'A:', 'Anna', 'Javascript', 'React Native' ]

// OBS: no primeiro console.log a home fica sem barras mas no exemplo do exercicio no trello e está com a barra, qual está certo?

//---------------------------------------------------------------------------------

// Exercício 10: Separar uma data no formato "DD/MM/AAAA"
// Crie uma função chamada splitDate que recebe uma data no formato "DD/MM/AAAA" e retorna um array com o dia, mês e ano separados.

function splitDate(date) {
  return date.split("/");
}

console.log(splitDate("12/03/2024"));
console.log(splitDate("01/01/2000"));
console.log(splitDate("22/02/2022"));
console.log(splitDate("08/08/2008"));

// Output:
// [ '12', '03', '2024' ]
// [ '01', '01', '2000' ]
// [ '22', '02', '2022' ]
// [ '08', '08', '2008' ]
