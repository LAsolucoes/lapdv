function tipoListaPrecos() {
  let selectIncrementoReducao =
    document.getElementById("Incremento-reducao").value;

  if (selectIncrementoReducao === "1" || selectIncrementoReducao === "2") {
    document.getElementById("selecione-tipo").disabled = false;
    document.getElementById('selecione-tipo').focus()
  } else {
    document.getElementById("selecione-tipo").disabled = true;
    document.getElementById("valor-dinheiro").disabled = true;
    document.getElementById("valor-porcentagem").disabled = true;
    document.getElementById("selecione-tipo").value = "";
    document.getElementById("valor-dinheiro").value = "";
    document.getElementById("valor-porcentagem").value = "";
  }
}
function tipoValorPrecos() {
  let selectValorPorcentagem = document.getElementById("selecione-tipo").value;
  if (selectValorPorcentagem === "dinheiro") {
    document.getElementById("valor-dinheiro").disabled = false;
    document.getElementById("valor-porcentagem").disabled = true;
    document.getElementById("valor-porcentagem").value = "";
    document.getElementById('valor-dinheiro').focus()
  
} else if (selectValorPorcentagem === "porcentagem") {
    document.getElementById("valor-dinheiro").disabled = true;
    document.getElementById("valor-porcentagem").disabled = false;
    document.getElementById("valor-dinheiro").value = "";
    document.getElementById('valor-porcentagem').focus()
  
  } else {
    document.getElementById("valor-dinheiro").disabled = true;
    document.getElementById("valor-porcentagem").disabled = true;
    document.getElementById("valor-dinheiro").value = "";
    document.getElementById("valor-porcentagem").value = "";
  }
}

function ListaPrecoInativo() {
  let inputCheckboxAtivo = document.getElementById("ativo");
  let componetens = document.querySelectorAll("input , select , button");
  let feedbackInativo = document.getElementById("feedback-inativo");

  if (inputCheckboxAtivo.checked === true) {
    componetens.forEach(function (elementosHtml) {
      elementosHtml.readOnly = false;

      if (
        elementosHtml.tagName === "SELECT" ||
        elementosHtml.tagName === "BUTTON" ||
        elementosHtml.type === "checkbox" ||
        elementosHtml.type === "radio"
      )
        elementosHtml.disabled = false;
      feedbackInativo.querySelector("p").innerHTML = "";
      feedbackInativo.style.display = "none";
    });
  } else {
    componetens.forEach(function (elementosHtml) {
      elementosHtml.readOnly = true;
      if (
        elementosHtml.tagName === "SELECT" ||
        elementosHtml.tagName === "BUTTON" ||
        elementosHtml.type === "checkbox" ||
        elementosHtml.type === "radio"
      ) {
        elementosHtml.disabled = true;
        inputCheckboxAtivo.disabled = false;
        feedbackInativo.style.display = "block";
        feedbackInativo.querySelector("p").innerHTML =
          "* Lista de Preço Inativo ! * <br> Cadastro disponivel somente para leitura. Se necessário realizar alguma alteração, Habilite a opção 'ATIVO'. ";
      }
    });
  }
}
