// Exercício 1: Verificar se a pessoa tem mais de 18 anos e tem ingresso (&&)
// Crie uma função chamada canEnterParty que recebe idade e temIngresso, e retorna true somente se as duas condições forem verdadeiras.

function canEnterParty(age, hasTicket) {
  return age >= 18 && hasTicket === true;
}

console.log(canEnterParty(20, true));
console.log(canEnterParty(16, true));
console.log(canEnterParty(18, false));
console.log(canEnterParty(22, true));

// Output:
// true
// false
// false
// true

//---------------------------------------------------------------------------------------------

// Exercício 2: Verificar se a pessoa tem mais de 18 ou está acompanhada (||)
// Crie uma função chamada canEnterCinema que recebe idade e acompanhado, e retorna true se tiver 18 ou estiver acompanhado.

function canEnterCinema(age, accompanied) {
  return age === 18 || accompanied === true;
}

console.log(canEnterCinema(17, true)); // true
console.log(canEnterCinema(15, false)); // false
console.log(canEnterCinema(18, false));
console.log(canEnterCinema(22, true));

//Output:
// true
// false
// true
// true

//---------------------------------------------------------------------------------------------

// Exercício 3: Verificar se a pessoa não tem ingresso (!)
// Crie uma função chamada hasNoTicket que recebe temIngresso e retorna true se não tiver ingresso.

function hasNoTicket(hasTicket) {
  return hasTicket === false;
}

console.log(hasNoTicket(false));
console.log(hasNoTicket(true));

//Output:
// true
// false

//---------------------------------------------------------------------------------------------

// Exercício 4: Verificar se a senha está correta E o usuário está logado
// Crie uma função chamada canAccessSystem que recebe senhaCorreta e estaLogado e retorna true se ambos forem verdadeiros.

function canAccessSystem(correctPassword, isLoggedIn) {
  return correctPassword === true && isLoggedIn === true;
}

console.log(canAccessSystem(true, true));
console.log(canAccessSystem(true, false));

// Output:
// true
// false

//---------------------------------------------------------------------------------------------

// Exercício 5: Verificar se a pessoa é maior de idade OU tem autorização dos pais
// Crie uma função chamada canTravel que recebe idade e autorizado e retorna true se a idade for maior ou igual a 18 ou se tiver autorização.

function canTravel(age, authorized) {
  return age >= 18 || authorized === true;
}

console.log(canTravel(17, true)); // true
console.log(canTravel(15, false)); // false

// Output:
// true
// false

//---------------------------------------------------------------------------------------------
// Exercício 6: Usar ! para inverter o valor de uma variável
// Crie uma função chamada invertBoolean que recebe um valor booleano e retorna o contrário dele.
function invertBoolean(value) {
  return !value;
}

console.log(invertBoolean(true)); // false
console.log(invertBoolean(false)); // true

// Output:
// false
// true

//---------------------------------------------------------------------------------------------

// Exercício 7: Verificar se um número está entre 10 e 20 (&&)
// Crie uma função chamada isBetween10And20 que recebe um número e retorna true se estiver entre 10 e 20 (inclusive).

function isBetween10And20(number) {
  return number >= 10 && number <= 20;
}

console.log(isBetween10And20(15));
console.log(isBetween10And20(25));

// Output:
// true
// false

//---------------------------------------------------------------------------------------------

// Exercício 8: Verificar se a pessoa pode tirar CNH (>= 18) e tem documento (&&)
// Crie uma função chamada canGetLicense que recebe idade e temDocumento, e retorna true se ambos forem verdadeiros.

function canGetLicense(age, haveDocument) {
  return age >= 18 && haveDocument === true;
}

console.log(canGetLicense(18, true));
console.log(canGetLicense(16, false));
console.log(canGetLicense(20, false));
console.log(canGetLicense(22, true));

// Output:
// true
// false
// false
// true

//---------------------------------------------------------------------------------------------

// Exercício 9: Verificar se um usuário NÃO está bloqueado
// Crie uma função chamada isUserAllowed que recebe bloqueado e retorna true se não estiver bloqueado.

function isUserAllowed(blocked) {
  return !blocked;
}

console.log(isUserAllowed(false));
console.log(isUserAllowed(true));

// Output:
// true
// false

//---------------------------------------------------------------------------------------------

// Exercício 10: Verificar se a senha é válida (tem mais de 6 caracteres OU é senha mestra)
// Crie uma função chamada isPasswordValid que recebe senha e senhaMestra, e retorna true se a senha tiver mais de 6 caracteres ou for a senha mestra (true).

function isPasswordValid(password, masterPassword) {
  return password.length > 6 || masterPassword === true;
}

console.log(isPasswordValid("1234567", false)); // true
console.log(isPasswordValid("123", true)); // true
console.log(isPasswordValid("123", false)); // false
console.log(isPasswordValid(2345678, true));

//Output:
// true
// true
// false
// true
