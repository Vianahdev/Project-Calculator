function calcular(tipo, valor) {
  if (tipo === "acao") {
    if (valor === "C") {
      document.querySelector("input#display").value = ""
    }

    if (
      valor === "+" ||
      valor === "-" ||
      valor === "/" ||
      valor === "*" ||
      valor === "."
    ) {
      document.querySelector("input#display").value += valor
    }

    if (valor === '='){
      let l_valorCampo = eval(document.querySelector("input#display").value);
      
      document.querySelector("input#display").value = l_valorCampo;
    }


  } else if (tipo === "valor") {
    document.querySelector("input#display").value += valor
  }
}
