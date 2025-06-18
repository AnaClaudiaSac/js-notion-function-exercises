//ℹ️ Dica: Use .split(".") primeiro.

// imput: "111.222.333-44"
//output: ["111", "222', "333", "44"]

function splitCPF(cpf) {
  //"111.222.333-44"
  const myCPF = cpf.split("."); // ["111","222", "333-44"]
  const lastPart = myCPF[2].split("-"); // ["333","44"]
  const first = myCPF[0]; // "111"
  const second = myCPF[1]; // "222"
  const third = lastPart[0]; // "333"
  const fourthy = lastPart[1]; // "44"

  const finalArray = [first, second, third, fourthy]; // ["111", "222", "333","44"]
  return finalArray;
}

console.log(splitCPF("111.222.333-44"));
console.log(splitCPF("449.763.198-22"));

function splitCPFV2(cpf) {
  // "449.763.198-22"

  return cpf.replace("-", ".").split("."); // ["449", "763", "198", "22"]
}

console.log(splitCPFV2("111.222.333-44"));
console.log(splitCPFV2("449.763.198-22"));
