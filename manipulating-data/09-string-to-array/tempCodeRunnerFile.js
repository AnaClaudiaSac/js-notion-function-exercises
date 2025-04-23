function splitCPF(cpf) {
  // Primeiro separamos por pontos
  const partesPorPonto = cpf.split(".");

  // O último elemento contém "789-00", que precisa ser separado
  const ultimoElemento = partesPorPonto[2];
  const partesPorHifen = ultimoElemento.split("-");

  // Montamos o array final com todas as partes
  return [
    partesPorPonto[0], // 123
    partesPorPonto[1], // 456
    partesPorHifen[0], // 789
    partesPorHifen[1], // 00
  ];
}

console.log(splitCPF("123.456.789-00"));
// ["123", "456", "789-00"]
