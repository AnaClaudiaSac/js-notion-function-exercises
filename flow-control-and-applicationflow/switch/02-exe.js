// Exercício 1: Dia da semana
// Crie uma função dayOfWeek que recebe um número de 1 a 7.
// Use switch para exibir o dia correspondente:

// 1 = Domingo
// 2 = Segunda ...
/// 7 = Sábado
// Se for diferente de 1 a 7, mostre "Dia inválido"

function dayOfWeek(number) {
  switch (number) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda";
    case 3:
      return "Terça";
    case 4:
      return "Quarta";
    case 5:
      return "Quinta";
    case 6:
      return "Sexta";
    case 7:
      return "Sábado";
    default:
      return "Dia inválido";
  }
}

console.log(dayOfWeek(1));
console.log(dayOfWeek(4));
console.log(dayOfWeek(6));
console.log(dayOfWeek(8));

// Output:
// Domingo
// Quarta
// Sexta
// Dia inválido

//Observação:

// Fiz a pergunta depois do exercicío pronto, porque de eu não ter usado o break.

// Resposta:

// Retorno Direto (return): Ao usar return dentro de cada case, você evita a necessidade de break;. Isso é uma prática limpa e comum quando a única ação do case é retornar um valor. A função para de executar assim que encontra o return.

//---------------------------------------------------------------------------------------------

// Exercício 2: Tipo de comida favorita
// Crie uma função favoriteFood que recebe uma string com o nome de uma comida.
// Use switch para exibir:

// "pizza" → "Comida italiana!"
// "sushi" → "Comida japonesa!"
// "hamburguer" → "Comida americana!"
// Qualquer outra → "Comida desconhecida"

function favoriteFood(food) {
  switch (food) {
    case "pizza":
      return "Comida Italiana";
    case "sushi":
      return "Comida japoneza";
    case "hamburger":
      return "Comida americana";
    case "coxinha":
      return "Comida brasileira";
    case "esfiha":
      return "Comida árabe";
    case "pastel de nata":
      return "Comida portuguesa";
    default:
      return "Comida descconhecida";
  }
}

console.log(favoriteFood("pizza"));
console.log(favoriteFood("sushi"));
console.log(favoriteFood("coxinha"));
console.log(favoriteFood("esfiha"));
console.log(favoriteFood("arroz"));

// Output:
// Comida Italiana
// Comida japoneza
// Comida brasileira
// Comida árabe
// Comida descconhecida

//--------------------------------------------------------------------------------------------
// Exercício 3: Nível de usuário
// Crie uma função userLevel que recebe um número:

// 1 → "Usuário comum"
// 2 → "Administrador"
// 3 → "Super Administrador"
// Qualquer outro → "Nível não reconhecido"

function userLevel(number) {
  switch (number) {
    case 1:
      return "Usuário Comum";
    case 2:
      return "Administrador";
    case 3:
      return "Super Administrador";
    default:
      return "Nível não recochecido";
  }
}

console.log(userLevel(1));
console.log(userLevel(3));

// Output:
// Usuário Comum
// Super Administrador

//---------------------------------------------------------------------------------------------

// Exercício 4: Nota em letras
// Crie uma função gradeMessage que recebe uma letra (A, B, C, D ou F).
// Use switch para mostrar a mensagem correspondente:

// A → "Excelente"
// B → "Muito bom"
// C → "Bom"
// D → "Regular"
// F → "Reprovado"
// Qualquer outro → "Nota inválida"

function gradeMessage(letra) {
  switch (letra) {
    case "A":
      return "Excelente";
    case "B":
      return "Muito bom";
    case "C":
      return "Bom";
    case "D":
      return "Regular";
    case "F":
      return "Reprovado";
    default:
      return "Nota Inválida";
  }
}

console.log(gradeMessage("A"));
console.log(gradeMessage("C"));
console.log(gradeMessage("F"));
console.log(gradeMessage("G"));

// Output:
// Excelente
// Bom
// Reprovado
// Nota Inválida

//---------------------------------------------------------------------------------------------

// Exercício 5: Escolha de operação matemática
// Crie uma função calculator que recebe dois números e um símbolo: "+", "-", "*" ou "/".
// Use switch para realizar a operação correta e mostrar o resultado.
// Se o operador for inválido, mostre "Operação inválida"

function calculator(number1, operator, number2) {
  let result = 0;
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      return "Operação Inválida";
  }

  return result;
}

console.log(calculator(4, "+", 4));
console.log(calculator(8, "-", 2));
console.log(calculator(5, "*", 2));
console.log(calculator(4, "/", 2));

// Output:
// 8
// 6
// 10
// 2

//---------------------***********----------------------------

function calculator2(number1, operator, number2) {
  switch (operator) {
    case "+":
      return number1 + number2;

    case "-":
      return number1 - number2;

    case "*":
      return number1 * number2;

    case "/":
      return number1 / number2;

    default:
      return "Operação Inválida";
  }
}

console.log(calculator2(4, "+", 4));
console.log(calculator2(8, "-", 2));
console.log(calculator2(5, "*", 2));
console.log(calculator2(4, "/", 2));

// Output:
// 8
// 6
// 10
// 2

//---------------------------------------------------------------------------------------------
// Exercício 6: Nome do mês
// Crie uma função monthName que recebe um número de 1 a 12.
// Use switch para retornar o nome do mês correspondente (Janeiro a Dezembro).
// Se for um número inválido, retorne "Mês inválido"

function monthName(number) {
  switch (number) {
    case 1:
      return "Janeiro";
    case 2:
      return "Fevereiro";
    case 3:
      return "Março";
    case 4:
      return "Abril";
    case 5:
      return "Maio";
    case 6:
      return "Junho";
    case 7:
      return "Julho";
    case 8:
      return "Agosto";
    case 9:
      return "Setembro";
    case 10:
      return "Outubro";
    case 11:
      return "Novembro";
    case 12:
      return "Dezembro";
    default:
      return "Mês Inválido";
  }
}

console.log(monthName(1));
console.log(monthName(4));
console.log(monthName(8));
console.log(monthName(12));
console.log(monthName(88));

// Output:
// Janeiro
// Abril
// Agosto
// Dezembro
// Mês Inválido

//---------------------------------------------------------------------------------------------

// Exercício 7: Escolha de plano
// Crie uma função choosePlan que recebe um código de plano:
// "B" → "Plano Básico"
// "P" → "Plano Padrão"
// "A" → "Plano Avançado"
// Qualquer outro → "Plano inexistente"

function choosePlan(code) {
  switch (code) {
    case "B":
      return "Plano Básico";
    case "P":
      return "Plano Padrão";
    case "A":
      return "Plano Avançado";
    default:
      return "Plano Inesxistente";
  }
}

console.log(choosePlan("A"));
console.log(choosePlan("I"));

// Output:
// Plano Avançado
// Plano Inesxistente

//---------------------------------------------------------------------------------------------
// Exercício 8: Classificação por idade
// Crie uma função ageGroup que recebe a idade e use switch(true) para classificar:

// Até 12 → "Criança"
// 13 a 17 → "Adolescente"
// 18 a 59 → "Adulto"
// 60 ou mais → "Idoso"
// Dica: esse é um uso diferente de switch(true) — mais avançado, mas legal para aprender.

function ageGroup(age) {
  switch (true) {
    case age <= 12:
      return "Criança";
    case age >= 13 && age <= 17:
      return "Adolescente";
    case age >= 18 && age <= 59:
      return "Adulto";
    case age >= 60:
      return "Idoso";
    default:
      return "Idade inválida";
  }
}

console.log(ageGroup(8));
console.log(ageGroup(17));
console.log(ageGroup(28));
console.log(ageGroup(50));
console.log(ageGroup(88));

// Output:
// Criança
// Adolescente
// Adulto
// Adulto
// Idoso

//---------------------------------------------------------------------------------------------
// Exercício 9: Fruta favorita
// Crie uma função fruitPrice que recebe o nome de uma fruta e imprime o valor:
// "banana" → R$ 2,00
// "maçã" → R$ 3,00
// "laranja" → R$ 2,50
// qualquer outra → "Fruta não disponível"

function fruitPrice(fruit) {
  switch (fruit) {
    case "Banana":
      return "R$ 2,00";
    case "Maça":
      return "R$3,00";
    case "Laranja":
      return "R$2,50";
    default:
      return "Fruta não disponível";
  }
}

console.log(fruitPrice("Banana"));
console.log(fruitPrice("Abacaxi"));

// Output:
// R$ 2,00
// Fruta não disponível

//---------------------------------------------------------------------------------------------
// Exercício 10: Turno do dia
// Crie uma função turnoSaudacao que recebe uma letra:
// "M" → "Bom dia!"
// "T" → "Boa tarde!"
// "N" → "Boa noite!"
// Qualquer outro → "Turno inválido"

function turnoSaudacao(letter) {
  switch (letter) {
    case "M":
      return "Bom dia!";
    case "T":
      return "Boa tarde!";
    case "N":
      return "Boa noite!";
    default:
      return "Turno inválido";
  }
}

console.log(turnoSaudacao("M"));
console.log(turnoSaudacao("B"));
