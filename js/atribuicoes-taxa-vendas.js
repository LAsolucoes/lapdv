function tipoTaxaVendas() {
  let selectTipoTaxa = document.getElementById("tipo-taxa");
  if (selectTipoTaxa.value) {
    document.getElementById("tipo-incremento-reducao").disabled = false;
    document.getElementById("tipo-incremento-reducao").focus();
  } else {
    document.getElementById("tipo-incremento-reducao").disabled = true;
    document.getElementById("tipo-incremento-reducao").value = "";
    document.getElementById("selecione-tipo").disabled = true;
    document.getElementById("selecione-tipo").value = "";
    document.getElementById("valor-dinheiro").disabled = true;
    document.getElementById("valor-dinheiro").value = "";
    document.getElementById("valor-porcentagem").disabled = true;
    document.getElementById("valor-porcentagem").value = "";
  }
}

function tipoTaxaIncrementoReducao() {
  let selectIncrementoReducao = document.getElementById(
    "tipo-incremento-reducao"
  );

  if (selectIncrementoReducao.value) {
    document.getElementById("selecione-tipo").disabled = false;
    document.getElementById("selecione-tipo").focus();
  } else {
    document.getElementById("selecione-tipo").disabled = true;
    document.getElementById("selecione-tipo").value = "";
    document.getElementById("valor-dinheiro").disabled = true;
    document.getElementById("valor-dinheiro").value = "";
    document.getElementById("valor-porcentagem").disabled = true;
    document.getElementById("valor-porcentagem").value = "";
  }
}

function tipoTaxaValorPorcentagem() {
  let selectSelecioneTipo = document.getElementById("selecione-tipo").value;
  if (selectSelecioneTipo === "dinheiro") {
    document.getElementById("valor-dinheiro").disabled = false;
    document.getElementById("valor-dinheiro").focus();
    document.getElementById("valor-porcentagem").disabled = true;
    document.getElementById("valor-porcentagem").value = "";
  } else if (selectSelecioneTipo === "porcentagem") {
    document.getElementById("valor-porcentagem").disabled = false;
    document.getElementById("valor-porcentagem").focus();
    document.getElementById("valor-dinheiro").disabled = true;
    document.getElementById("valor-dinheiro").value = "";
  } else {
    document.getElementById("valor-porcentagem").disabled = true;
    document.getElementById("valor-porcentagem").value = "";
    document.getElementById("valor-dinheiro").disabled = true;
    document.getElementById("valor-dinheiro").value = "";
  }
}
