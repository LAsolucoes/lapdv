function tipoTaxaCartoes() {
  let selectTipoTaxaCartao = document.getElementById("tipo-taxa");

  if (selectTipoTaxaCartao.value) {
    document.getElementById("selecione-tipo").disabled = false;
    document.getElementById("selecione-tipo").focus();
  } else {
    document.getElementById("selecione-tipo").disabled = true;
    document.getElementById("selecione-tipo").value = "";
    document.getElementById("valor-dinheiro").value = "";
    document.getElementById("valor-dinheiro").disabled = true;
    document.getElementById("valor-porcentagem").value = "";
    document.getElementById("valor-porcentagem").disabled = true;
    document.getElementById("selecione-bandeira").disabled = true;
    document.getElementById("selecione-bandeira").value = "";
    document.getElementById("selecione-bandeira").value = true;
  }
}

function selecioneValorPorcentagem() {
  let selectValorPorcentagem = document.getElementById("selecione-tipo").value;
  if (selectValorPorcentagem === "porcentagem") {
    document.getElementById("valor-porcentagem").disabled = false;
    document.getElementById("valor-porcentagem").focus();
    document.getElementById("valor-dinheiro").value = "";
    document.getElementById("valor-dinheiro").disabled = true;
    document.getElementById("selecione-bandeira").disabled = false;
  } else if (selectValorPorcentagem === "dinheiro"){
    document.getElementById("valor-dinheiro").disabled = false;
    document.getElementById("valor-dinheiro").focus();
    document.getElementById("valor-porcentagem").value = "";
    document.getElementById("valor-porcentagem").disabled = true;
    document.getElementById("selecione-bandeira").disabled = false;
  } else {
    document.getElementById("valor-porcentagem").disabled = true;
    document.getElementById("valor-dinheiro").disabled = true;
    document.getElementById("selecione-bandeira").disabled = true;
    document.getElementById("valor-porcentagem").value = "";
    document.getElementById("valor-dinheiro").value = "";
    document.getElementById("selecione-bandeira").value = "";
  }
}
