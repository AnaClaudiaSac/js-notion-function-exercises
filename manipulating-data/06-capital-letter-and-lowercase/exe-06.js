// Resumo 1 : Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), e ao contrário, também é possível usar o toLowerCase() para transformar uma string em todas letras minúsculas.

// Ex:
function upperCase(word) {
  return word.toUpperCase();
}

console.log(upperCase("eu me chamo anna"));
// Output: EU ME CHAMO ANNA
function loweCase(word) {
  return word.toLowerCase();
}

console.log(loweCase("MEU NOME É ANNA"));
// Output: meu nome é anna

// Resumo 2 :

// Em JavaScript, a manipulação de letras maiúsculas e minúsculas é essencial para diversas tarefas, desde a formatação de texto até a comparação de strings. Aqui está um resumo dos principais métodos e conceitos:

// Métodos principais:

// toUpperCase():
// Converte todos os caracteres de uma string para letras maiúsculas.
// Exemplo: "hello".toUpperCase() retorna "HELLO".
// toLowerCase():
// Converte todos os caracteres de uma string para letras minúsculas.
// Exemplo: "WORLD".toLowerCase() retorna "world".
// Casos de uso comuns:

// Normalização de strings:
// Converter strings para o mesmo caso (maiúsculas ou minúsculas) antes da comparação, para evitar discrepâncias devido à diferença de caixa.
// Formatação de texto:
// Alterar a caixa de strings para exibição consistente, como em títulos ou nomes.
// Validação de entrada:
// Garantir que a entrada do usuário esteja em um formato específico, como todas as letras maiúsculas ou minúsculas.
// Outras considerações:

// toLocaleUpperCase() e toLocaleLowerCase():
// Versões dos métodos toUpperCase() e toLowerCase() que respeitam as convenções de caixa de letras de diferentes localidades.
// CSS:
// Para fins de exibição, o CSS também oferece a propriedade text-transform, que pode ser usada para alterar a caixa de texto sem modificar a string original.
// Em resumo, JavaScript fornece métodos poderosos para manipular letras maiúsculas e minúsculas, permitindo que os desenvolvedores controlem a formatação e a comparação de strings de forma eficaz.
