// Exercício 1: Mostrar propriedades de um objeto
// Crie um objeto carro com as propriedades marca, modelo e ano. Use for...in para exibir o nome de cada propriedade no console.

let car = {
  marca: "Porsche",
  modelo: "911",
  ano: 2015,
};

for (let property in car) {
  console.log(property);
}

// Output:
// marca;
// modelo;
// ano;

//---------------------************---------------------------------

// Explicação:

// Declaração do Objeto:

// Você define um objeto car que tem três "caixas" (propriedades):
// Uma caixa com a etiqueta "marca" e dentro dela "Porsche".
// Outra caixa com a etiqueta "modelo" e dentro dela "911".
// Mais uma caixa com a etiqueta "ano" e dentro dela 2015.
// Início do for (let property in car):

// O JavaScript vê o for...in e entende: "Ah, preciso ir até o objeto car e me dar o nome de cada propriedade dele, uma por uma."
// Ele cria uma variável temporária, que você chamou de property.
// Primeira Iteração (Primeira "Caixa"):

// O JavaScript encontra a primeira propriedade do car. Vamos supor que seja a marca.
// Ele atribui a string "marca" à sua variável property.
// Agora, dentro do bloco do loop, property é "marca".
// console.log(property); é executado, e ele imprime:
// marca
// Segunda Iteração (Segunda "Caixa"):

// O loop continua. O JavaScript encontra a próxima propriedade, que é modelo.
// Ele atribui a string "modelo" à sua variável property. (O valor anterior de property é substituído).
// Agora, dentro do bloco do loop, property é "modelo".
// console.log(property); é executado, e ele imprime:
// modelo
// Terceira Iteração (Terceira "Caixa"):

// O loop continua. O JavaScript encontra a última propriedade, que é ano.
// Ele atribui a string "ano" à sua variável property.
// Agora, dentro do bloco do loop, property é "ano".
// console.log(property); é executado, e ele imprime:
// ano
// Fim do Loop:

// O JavaScript verifica: "Existem mais propriedades no objeto car?"
// A resposta é não.
// Então, o loop for...in termina.
// Comparando com Outros Loops:
// for tradicional (com i e .length): Anda por números (os índices 0, 1, 2...), e você precisa usar array[i] para pegar o valor.
// for...of: Anda diretamente pelos valores de um array (o "abacaxi", a "banana"), sem se preocupar com os índices.
// for...in: Anda pelos nomes das propriedades (as chaves) de um objeto ("marca", "modelo", "ano"). Para pegar o valor, você precisa usar objeto[chave] (como car[property]).
// A chave para entender o for...in é lembrar que a variável declarada (property no seu caso) sempre receberá o nome da chave como uma string.

//--------------------------------------------------------------------------------------------

// Exercício 2: Mostrar valores de um objeto
// Use for...in com o mesmo objeto do exercício anterior para exibir os valores das propriedades.

let carro = {
  marca: "Porsche",
  modelo: "911",
  ano: 2015,
};

for (let property in car) {
  console.log(car[property]);
}

// Output:
// Porsche
// 911
// 2015

//---------------------------------------------------------------------------------------------

// Exercício 3: Mostrar chave e valor
// Crie um objeto livro com as propriedades titulo, autor e paginas. Use for...in para mostrar no console:
// titulo: O Pequeno Príncipe
// autor: Antoine de Saint-Exupéry
// paginas: 98

let livro = {
  titulo: "O Pequeno Príncipe",
  autor: "Antoine de Saint-Exupéry",
  paginas: 98,
};

for (let property in livro) {
  //console.log(livro)
  console.log(property + ": " + livro[property]);
}

// Output:

// titulo: O Pequeno Príncipe
// autor: Antoine de Saint-Exupéry
// paginas: 98

//-------------------------************------------------------

//Explicação:
// for...in Correto: Utilizando o for...in de maneira ideal para acessar as chaves de um objeto.
// Acesso a Chave e Valor: o nome da propriedade (property) quanto o seu valor (livro[property]) dentro do loop.
// Concatenação Eficaz: A concatenação de strings (+) é usada para unir o nome da propriedade, os dois pontos e o valor em uma única frase. Alternativamente, poderia ser usado também um template literal EX: console.log(${property}: ${livro[property]});
// Output Alinhado: A saída do código (titulo: O Pequeno Príncipe, autor: Antoine de Saint-Exupéry, paginas: 98) corresponde exatamente ao que foi pedido no enunciado.

//---------------------------------------------------------------------------------------------

// Exercício 4: Contar quantas propriedades um objeto tem
// Crie um objeto aluno com algumas propriedades. Use for...in para contar quantas propriedades ele possui e exibir no final.

let aluno = {
  nome: "Pedro",
  idade: 16,
  altura: 1.7,
  peso: 60,
};

let count = 0;
for (let property in aluno) {
  count++;
}
console.log("Quantidade de propriedades:", count);

// Output:
// Quantidade de propriedades: 4

//----------------------*********---------------------

//Explicação:

//let count = 0; // Um contador para as propriedades, inicializado em zero.

// O loop 'for...in' vai iterar sobre cada CHAVE (nome da propriedade) do objeto 'aluno'.
// A cada repetição, a variável 'property' receberá o nome de uma propriedade.
//for (let property in aluno) {
//count++; // A cada vez que o loop encontra uma propriedade, o contador é incrementado em 1.
//}

// Após o loop terminar (quando todas as propriedades foram contadas),
// o valor final do 'count' é exibido no console.
//console.log("Quantidade de propriedades:", count); // Saída: Quantidade de propriedades: 4

//---------------------------------------------------------------------------------------------

// Exercício 5: Verificar se uma chave existe
// Crie um objeto usuario e use for...in para verificar se a chave "email" existe.

let user = {
  login: "admin",
  email: "contato@useradm",
};

// 1 - for (let property in user) {
//   if (property === "email") {
//     console.log("A chave 'email' existe no objeto!");
//   }
// }

//Output:
//A chave 'email' existe no objeto!

// OBS: Esse modo só mostro se a chave email existir se não existir não mostra msg.

//-----------------------------*********--------------------------------

//No Ex. abaixo mostra ambas msgs

let emailEncontrado = false;
for (let property in user) {
  if (property === "email") {
    emailEncontrado = true;
    break;
  }
}

if (emailEncontrado) {
  console.log("A chave 'email' existe no objeto!");
} else {
  console.log("A chave 'email' não existe no objeto.");
}

//Output:
//A chave 'email' existe no objeto!

//Se tirar um aletra do "email ou a palavra":

//Output:
//A chave 'email' não existe no objeto

//---------------------------------------------------------------------------------------------

// Exercício 6: Copiar propriedades para outro objeto
// Crie um objeto produto1 com algumas propriedades. Use for...in para copiar essas propriedades para um novo objeto produto2.

let produto1 = {
  nome: "Notebook",
  preco: 8500,
  estoque: 10,
};

let produto2 = {};
for (let property in produto1) {
  produto2[property] = produto1[property];
}
console.log(produto2);

// Output:
// { nome: 'Notebook', preco: 8500, estoque: 10 }

//-------------------------**********---------------

//Explicação:

//let produto2 = {}; // O novo objeto, inicialmente vazio, para onde as propriedades serão copiadas.

// O loop 'for...in' vai percorrer cada CHAVE (nome da propriedade) do 'produto1'.
// A cada repetição, 'property' receberá o nome de uma propriedade (ex: "nome", "preco", "estoque").
//for (let property in produto1) {
// AQUI está a mágica da cópia:
// 1. 'produto2[property]': Do lado esquerdo, você está CRIANDO uma nova propriedade no 'produto2'
//com o MESMO nome que a 'property' atual do 'produto1'.
// 2. '= produto1[property]': Do lado direito, você está PEGANDO o VALOR da 'property'
//correspondente no 'produto1' e ATRIBUINDO-o à nova propriedade no 'produto2'.
//produto2[property] = produto1[property];
//}

// Após o loop terminar, 'produto2' terá todas as propriedades e valores de 'produto1'.
//console.log(produto2); // Saída: { nome: 'Notebook', preco: 8500, estoque: 10 }//

//---------------------------------------------------------------------------------------------
// Exercício 7: Somar valores numéricos de um objeto
// Crie um objeto notas com 3 matérias e notas numéricas. Use for...in para somar os valores e mostrar a média.

let materias = {
  Matemática: 10,
  Física: 10,
  Biologia: 9,
};

let soma = 0;
let quantidade = 0;
for (let property in materias) {
  soma += materias[property];
  quantidade++;
}
let media = soma / quantidade;
console.log("Média das notas:", media.toFixed(2));

// Output:
// Média das notas: 9.67

//--------------************-------------------

//Explicação:
//let soma = 0; // Variável para acumular a soma das notas, começa em zero.
//let quantidade = 0; // Variável para contar quantas notas (propriedades) existem, começa em zero.

// O loop 'for...in' vai percorrer cada CHAVE (nome da matéria) do objeto 'materias'.
// A cada repetição, 'property' receberá o nome de uma matéria.
//for (let property in materias) {
// Soma o VALOR da nota atual (materias[property]) à variável 'soma'.
//soma += materias[property];

/// Incrementa a 'quantidade' a cada vez que uma propriedade é processada.
/// Isso nos dá o número total de notas.
//quantidade++;
//}

// Depois que o loop termina, calcula a média dividindo a 'soma' pela 'quantidade' de notas.
//let media = soma / quantidade;

// Exibe a média no console, formatada com duas casas decimais usando '.toFixed(2)'.
//console.log("Média das notas:", media.toFixed(2));
//O uso de .toFixed(2) para formatar a média com duas casas decimais.

//---------------------------------------------------------------------------------------------

// Exercício 8: Exibir propriedades com valor do tipo string
// Crie um objeto com diferentes tipos de valores (string, número, boolean). Use for...in para exibir somente as propriedades cujo valor seja do tipo string.

let value = {
  nome: "Anna",
  idade: 28,
  ativo: true,
  cidade: "Limeira",
};

for (let property in value) {
  if (typeof value[property] === "string") {
    console.log(property + ": " + value[property]);
  }
}

// Output:
// nome: Anna
// cidade: Limeira

//------------------------**********-------------------

//O loop 'for...in' vai percorrer cada CHAVE (nome da propriedade) do objeto 'value'.
// A cada repetição, a variável 'property' receberá o nome de uma propriedade (ex: "nome", "idade", "ativo", "cidade").
//for (let property in value) {
// AQUI está a condição inteligente:
// 'typeof value[property]' verifica o TIPO de DADO do VALOR da propriedade atual.
// '===' "string"' compara se esse tipo é EXATAMENTE uma string.
//if (typeof value[property] === "string") {
// Se a condição for verdadeira (ou seja, se o valor for uma string),
// ele imprime o nome da propriedade e o seu valor, formatados.
//console.log(property + ": " + value[property]);}
//Em JavaScript, typeof é um operador unário que retorna uma string indicando o tipo de um operando. Ele é usado para determinar o tipo de uma variável, função, objeto ou qualquer outro valor em tempo de execução.

//---------------------------------------------------------------------------------------------
// Exercício 9: Concatenar os nomes de um objeto
// Crie um objeto pessoa com as propriedades nome, sobrenome, idade. Use for...in para formar a frase:

// Nome completo: Ana Silva

let person = {
  nome: "Ana",
  sobrenome: "Silva",
  idade: 48,
};

let nomeCompleto = "";
for (let property in person) {
  if (property === "nome" || property === "sobrenome") {
    nomeCompleto += person[property] + " ";
  }
}
console.log("Nome completo:", nomeCompleto);

// Output:
// Nome completo: Ana Silva

//-----------------------------**********----------------------

//let nomeCompleto = ""; // Variável para construir o nome completo, começa vazia.

// 1. Loop 'for...in': Percorre cada CHAVE (propriedade) do objeto 'person'.
//    A cada volta, 'property' será "nome", depois "sobrenome", e depois "idade".
//for (let property in person) {
// 2. Condição 'if': Verifica se a 'property' atual é "nome" OU "sobrenome".
//    O operador '||' (OU) faz com que a condição seja verdadeira se UMA OU AMBAS forem verdadeiras.
//if (property === "nome" || property === "sobrenome") {
// 3. Concatenação: Se a condição for verdadeira, adiciona o VALOR da propriedade
//    (person[property]) e um espaço (" ") à string 'nomeCompleto'.
//    - Na 1ª volta (property="nome"): nomeCompleto = "" + "Ana" + " " -> "Ana "
//    - Na 2ª volta (property="sobrenome"): nomeCompleto = "Ana " + "Silva" + " " -> "Ana Silva "
//nomeCompleto += person[property] + " ";}}

// 4. Exibição do Resultado: Após o loop terminar, exibe a string final.

//console.log("Nome completo:", nomeCompleto);

//---------------------------------------------------------------------------------------------

// Exercício 10: Criar função que lista propriedades de qualquer objeto
// Crie uma função listarPropriedades(objeto) que usa for...in para exibir todas as propriedades e valores de qualquer objeto passado como argumento.
function listarPropriedades(objeto) {
  for (let propriedade in objeto) {
    console.log(propriedade + ": " + objeto[propriedade]);
  }
}

let carro2 = {
  marca: "Porsche",
  modelo: "911",
  ano: 2016,
};
listarPropriedades(carro2);

// Output:
// marca: Porsche
// modelo: 911
// ano: 2016

//---------------------------*********---------------------

//Explicação:
//Criar alguns objetos para TESTAR a função:

// let carro2 = {
//   marca: "Porsche",
//   modelo: "911",
//   ano: 2016,
// };
// listarPropriedades(carro2);

//listarPropriedades(carro); // Chamamos a função e passamos o objeto 'carro'
