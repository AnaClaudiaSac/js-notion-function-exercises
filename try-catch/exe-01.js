// Exercício 1: Verificar número positivo
// Crie uma função checkPositive que recebe um número.
// Se o número for negativo, lance um erro (throw) com a mensagem "Número negativo não permitido".
// Use try...catch para capturar o erro e exibi-lo no console.

function checkPositive(number) {
  if (number < 0) {
    throw "Número negativo não permitido";
  }
}

try {
  checkPositive(-1);
} catch (e) {
  console.log(e);
}

// Output:
// Número negativo não permitido

//----------------------------------**********----------------------

// Explicação:

// Captura de Erro (try...catch): O bloco try tenta executar o código que pode falhar. Se um erro for "lançado" dentro do try, a execução do try é imediatamente interrompida, e o controle é passado para o bloco catch.
// Manipulação do Erro (catch (e)): O catch recebe o "erro" que foi lançado (neste caso, a string "Número negativo não permitido") e permite que você o manipule de alguma forma, como exibir uma mensagem amigável para o usuário, registrar o erro, etc.

//---------------------------------------------------------------------------------------------

// Exercício 2: Divisão segura
// Crie uma função safeDivide(a, b) que divide a por b.
// Se b for 0, lance um erro com a mensagem "Divisão por zero não é permitida".
// Use try...catch para capturar o erro e imprimir a mensagem.

function safeDivide(a, b) {
  if (b === 0) {
    throw "Divisão por zero não é permitida";
  }
  return a / b;
}
try {
  safeDivide(4, 0);
} catch (e) {
  console.log(e);
}

// Output:
// Divisão por zero não é permitida

//---------------------------------------------------------------------------------------------

// Exercício 3: Verificar nome não vazio
// Crie uma função validateName(name) que lança um erro se o nome for uma string vazia.
// Se for válido, exiba "Nome aceito".
// Trate o erro com try...catch.

function validateName(name) {
  if (name === "") {
    throw "Nome é obrigatório";
  }
}

try {
  validateName(""); // Se vier com nome preenchido vem a msg "nome aceito"!
  console.log("Nome aceito");
} catch (e) {
  console.log(e);
}

// Output:
// Nome é obrigatório

//---------------------------------------------------------------------------------------------

// Exercício 4: Conversão de número
// Crie uma função parseToNumber(value) que tenta converter o valor para número.
// Se o valor não for convertível (ex: "abc"), lance um erro com a mensagem "Valor inválido para conversão".
// Use try...catch para lidar com isso.

function parseToNumber(value) {
  const number = Number(value);
  if (isNaN(number)) {
    throw "Valor inválido para conversão";
  }
  return number;
}
try {
  parseToNumber("abcd");
  console.log("Valor válido"); // Caso de acerto!
} catch (e) {
  console.log(e);
}

// Output:
// Valor inválido para conversão

//---------------------------------------------------------------------------------------------

// Exercício 5: Verificar idade
// Crie uma função checkAge(age) que lança um erro se a idade for menor que 0 ou maior que 130.
// Caso contrário, exiba "Idade válida".
// Trate o erro com try...catch.

function checkAge(age) {
  if (age < 0 || age > 130) {
    throw "Idade Inválida";
  }
}

try {
  checkAge(160);
  console.log("Idade válida");
} catch (e) {
  console.log(e);
}

// Output:
// Idade Inválida

//---------------------------------------------------------------------------------------------
// Exercício 6: Login de usuário
// Crie uma função login(user) que só permite o login se o nome do usuário for "admin".
// Caso contrário, lance um erro com a mensagem "Usuário não autorizado".
// Use try...catch para capturar o erro.

function login(user) {
  if (user !== "admin") {
    throw "Usuário não autorizado";
  }
}
try {
  login("junho");
  console.log("Usuário autorizado");
} catch (e) {
  console.log(e);
}

// Output:
// Usuário não autorizado

//---------------------------------------------------------------------------------------------
// Exercício 7: Validar senha
// Crie uma função validatePassword(password) que lança um erro se a senha tiver menos de 6 caracteres.
// Caso contrário, exiba "Senha válida".
// Use try...catch para tratar o erro.

function validatePassword(password) {
  if (password < 6) {
    throw "Senha inválida";
  }
}
try {
  validatePassword(2);
  console.log("Senha Válida");
} catch (e) {
  console.log(e);
}

// Output:
// Senha inválida

//---------------------------------------------------------------------------------------------

// Exercício 8: Calcular raiz quadrada
// Crie uma função safeSqrt(number) que retorna a raiz quadrada de um número.
// Se o número for negativo, lance um erro com a mensagem "Número inválido para raiz quadrada".
// Trate o erro com try...catch.

function safeSqrt(number) {
  if (number < 0) {
    throw "Número inválido para raiz quadrada";
  }
  return Math.sqrt(number);
}
try {
  safeSqrt(-1);
} catch (e) {
  console.log(e);
}

// Output:
// Número inválido para raiz quadrada

//---------------------------------------------------------------------------------------------

// Exercício 9: Validar tipo de dado
// Crie uma função checkType(value) que lança um erro se o valor não for do tipo string.
// Use typeof e throw, e trate o erro com try...catch.

function checkType(value) {
  if (typeof value !== "string") {
    throw "Tipo inválido: esperado string";
  }
}

try {
  checkType(1234);
  console.log("Tipo válido");
} catch (e) {
  console.log(e);
}

// Output:
// Tipo inválido: esperado string

//---------------------------------------------------------------------------------------------

// Exercício 10: Verificar campos obrigatórios
// Crie uma função submitForm(nome, email) que verifica se ambos os campos foram preenchidos.
// Se algum estiver vazio, lance um erro com a mensagem "Todos os campos devem ser preenchidos".
// Use try...catch para lidar com o erro e exibir a mensagem corretamente

function submitForm(nome, email) {
  if (nome === "" && email === "") {
    throw "Todos os campos devem ser preenchidos";
  }
}
try {
  submitForm("", "");
} catch (e) {
  console.log(e);
}

// Output:
/*Todos os campos devem ser preenchidos*/
