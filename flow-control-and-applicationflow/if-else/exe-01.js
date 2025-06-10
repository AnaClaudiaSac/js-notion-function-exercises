// Exercício 1: Sistema de login com usuário e senha
// Crie uma função login que recebe dois parâmetros: usuario e senha.
// Apenas o usuário "admin" com a senha "1234" pode acessar.
// Imprima:

function login(username, password) {
  if (username === "admin" && password === "1234") {
    return "Welcome admin";
  } else {
    return "Incorrect username or password";
  }
}
console.log(login("admin", "1234"));
console.log(login("add", "123"));

// Output:
// Welcome admin
// Incorrect username or password

//---------------------------------------------------------------------------------------------

// Exercício 2: Calculadora de IMC
// Crie uma função checkIMC que recebe peso (em kg) e altura (em metros).
// Calcule o IMC: peso / (altura * altura)
// Imprima:

// "Abaixo do peso" se IMC < 18.5

// "Peso normal" se entre 18.5 e 24.9

// "Sobrepeso" entre 25 e 29.9

// "Obesidade" se 30 ou mais

function checkIMC(weight, height) {
  const imc = weight / (height * height);
  console.log("imc", imc);
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Sobrepeso";
  } else;
  return "Obesidade";
}
console.log(checkIMC(40, 1.55));
console.log(checkIMC(50, 1.8));
console.log(checkIMC(60, 1.7));
console.log(checkIMC(70, 1.6));
console.log(checkIMC(200, 1.5));
console.log(checkIMC(220, 1.8));

// Output:
// imc 16.649323621227886
// Abaixo do peso
// imc 15.432098765432098
// Abaixo do peso
// imc 20.761245674740486
// Peso normal
// imc 27.343749999999996
// Sobrepeso
// imc 88.88888888888889
// Obesidade
// imc 67.90123456790123
// Obesidade

//-----------------------------------------------------------------------------------------------

// Exercício 3: Simulador de caixa eletrônico
// Crie uma função sacar que recebe saldo e valorSaque.

// Se valorSaque for menor ou igual ao saldo, subtraia e mostre o novo saldo

// Se não houver saldo suficiente, mostre "Saldo insuficiente"

// Se valorSaque for menor ou igual a zero, mostre "Valor inválido"

//saldo = 100
//saque = 80

function sacar(saldo, valorSaque) {
  if (valorSaque <= 0) {
    console.log("Valor Inavalido", valorSaque);
  } else if (valorSaque <= saldo) {
    console.log("saldo", saldo);
    console.log("valorSaque", valorSaque);
    const NovoSaldo = saldo - valorSaque;
    console.log("NovoSaldo", NovoSaldo); // Novo Saldo
  } else if (saldo < valorSaque) {
    console.log("saldo Insuficiente", saldo);
    console.log("valorSaque", valorSaque);
  }
}

sacar(0, 100);
sacar(100, 80);
sacar(20, 0);
sacar(80, 80);

// Output:
// saldo Insuficiente 0
// valorSaque 100

// saldo 100
// valorSaque 80
// NovoSaldo 20

// Valor Inavalido 0

// saldo 80
// valorSaque 80
// NovoSaldo 0

//---------------------------------------------------------------------------------------------

// Exercício 4: Cálculo de desconto progressivo
// Crie uma função calcularPrecoFinal que recebe preco e quantidade.
// Aplique os seguintes descontos:

// Até 5 unidades: sem desconto

// 6 a 10 unidades: 10%

// Mais de 10: 20%
// Imprima o valor final com desconto.

//0.9; Paga 90%  == 10% desconto  ou (90 / 100) ou ((100 - 10) / 100)
//0.8; Paga 80%  == 20% deconto   ou (80 / 100) ou ((100 - 20) / 100)

function calcularPrecoFinal(price, amount) {
  let finalPrice = 0;
  if (amount <= 5) {
    finalPrice = price * amount;
    console.log("finalPrice", finalPrice);
  } else if (amount >= 6 && amount <= 10) {
    finalPrice = price * amount * 0.9;
    console.log("finalPrice", finalPrice);
  } else if (amount > 10) {
    finalPrice = price * amount * 0.8;
    console.log("final price", finalPrice);
  }
}

calcularPrecoFinal(80, 20);
calcularPrecoFinal(50, 20);
calcularPrecoFinal(2, 5);
calcularPrecoFinal(10, 8);

// Output:
// final price 1280
// final price 800
// finalPrice 10
// finalPrice 72

//---------------------------------------------------------------------------------------------
// Exercício 5: Verificar se três lados formam um triângulo
// Crie uma função isTriangle que recebe 3 números: a, b, c.

// Verifique se é possível formar um triângulo com essas medidas (a + b > c, etc.)

// Depois, diga se é:

// Equilátero (3 lados iguais)

// Isósceles (2 lados iguais)

// Escaleno (todos diferentes)

// Se não formar um triângulo, imprima "Lados inválidos"

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    console.log("Resposta: Forma um Triangulo");

    if (a === b && b === c) {
      return "Triangulo Equilátero";
    } else if (a === b || a === c || b === c) {
      return "Triangulo Isósceles";
    } else {
      return "Triangulo Escaleno";
    }
  } else {
    return "Resposta: Não forma um triangulo => Lados inválidos";
  }
}

console.log(isTriangle(10, 10, 10));
console.log(isTriangle(10, 20, 20));
console.log(isTriangle(8, 8, 10));
console.log(isTriangle(1, 3, 5));

// Outupt:
// Resposta: Forma um Triangulo
// Triangulo Equilátero
// Resposta: Forma um Triangulo
// Triangulo Isósceles
// Resposta: Forma um Triangulo
// Triangulo Isósceles
// Resposta: Não forma um triangulo => Lados inválidos

//---------------------------------------------------------------------------------------------
// Exercício 6: Validação de CPF com 11 dígitos
// Crie uma função validarCPF que recebe uma string.
// Valide:

// Se a string tem exatamente 11 caracteres numéricos, imprima "CPF válido"

// Caso contrário, "CPF inválido"
// Função para validar se o CPF tem exatamente 11 dígitos numéricos

function validarCPF(cpf) {
  const cpfValidar = String(cpf);
  if (cpfValidar.length === 11) {
    return "CPF válido";
  } else {
    return "CPF inválido";
  }
}

console.log(validarCPF(12345678911));
console.log(validarCPF(124568));
console.log(validarCPF("12345678911"));

// Output:
// CPF válido
// CPF inválido
// CPF válido

//---------------------------------------------------------------------------------------------

// Exercício 7: Sistema de notas com bônus
// Crie uma função calcularNotaFinal que recebe notaBase e frequencia (em %).

// Se a frequência for menor que 75%, a nota final é 0

// Caso contrário:

// Se nota >= 8 e frequência = 100%, acrescente 1 ponto (nota máxima é 10)

// Imprima a nota final

function calcularNotaFinal(notaBase, frequencia) {
  let notaFinal = 0;
  if (frequencia < 75) {
    notaFinal = 0;
  } else {
    notaFinal = notaBase;
    if (notaBase >= 8 && frequencia === 100) {
      notaFinal += 1;
    }
    if (notaFinal > 10) {
      notaFinal = 10;
    }
  }
  console.log("Nota Final", notaFinal);
  return notaFinal;
}

console.log(calcularNotaFinal(9, 100));
console.log(calcularNotaFinal(6, 100));
console.log(calcularNotaFinal(6, 93));
console.log(calcularNotaFinal(9, 100));
console.log(calcularNotaFinal(4, 80));
console.log(calcularNotaFinal(10, 100));

// Output:
// Nota Final 10
// 10
// Nota Final 6
// 6
// Nota Final 6
// 6
// Nota Final 10
// 10
// Nota Final 4
// 4
// Nota Final 10
// 10

//---------------------------------------------------------------------------------------------

// Exercício 8: Classificação de risco
// Crie uma função classificarRisco que recebe três parâmetros booleanos: fumante, sedentario, diabetico.

// Se todos forem true: "Risco alto"

// Se dois forem true: "Risco moderado"

// Se um ou nenhum: "Risco baixo"

function classificarRisco(fumante, sedentario, diabetico) {
  //true + true + false = 1 + 1 + 0 = 2   => JS converte true para 1 e false para 0
  const risco = fumante + sedentario + diabetico;
  if (risco === 3) {
    return "Risco alto";
  } else if (risco === 2) {
    return "Risco moderado";
  } else {
    return "Risco baixo";
  }
}

console.log(classificarRisco(true, true, true));
console.log(classificarRisco(true, true, false));
console.log(classificarRisco(true, false, false));
console.log(classificarRisco(false, false, false));

// Output:
// Risco alto
// Risco moderado
// Risco baixo
// Risco baixo

// OBS : A primeira opção que eu pensei foi um array e passar para boolean com Filter deu certo, mas simplifiquei o exercicío.
//  EX: const Risco = [fumante, sedentario, diabetico].filter(Boolean)
//mdn web docs.
// Gemini e exercicios anteriores!

// Todos os outros valores são "truthy"

// Qualquer número diferente de zero (positivo ou negativo)
// Qualquer string que não esteja vazia (ex: "true", "false", "0")
// Arrays (mesmo vazios! [] é truthy)
// Objetos (mesmo vazios! {} é truthy)

// Os Valores "Falsy" :
// Existem apenas alguns valores que são "falsy" em JavaScript:

// false (o próprio booleano false)
// 0 (o número zero)
// "" (uma string vazia)
// null
// undefined
// NaN (Not a Number)

//---------------------------------------------------------------------------------------------
// Exercício 10: Autorização de viagem
// Crie uma função podeViajar que recebe idade, temAutorizacao (boolean) e acompanhaResponsavel (boolean).

// Se tiver 18 anos ou mais: "Pode viajar"

// Se for menor, só pode viajar se temAutorizacao for true ou acompanhaResponsavel for true

// Caso contrário: "Viagem não autorizada"

function podeViajar(idade, temAutorização, acompanhaResponsavel) {
  if (idade >= 18) {
    return "Pode viajar!";
  } else if (
    (idade < 18 && temAutorização === true) ||
    acompanhaResponsavel === true
  ) {
    return "Pode viajar, tem autorização ou acompanhado de responsável.";
  } else {
    return "Viagem não autorizada!";
  }
}

console.log(podeViajar(18));
console.log(podeViajar(16, true, false));
console.log(podeViajar(15, false, true));
console.log(podeViajar(12));

// Output:
// Pode viajar!
// Pode viajar, tem autorização ou acompanhado de responsável.
// Pode viajar, tem autorização ou acompanhado de responsável.
// Viagem não autorizada
