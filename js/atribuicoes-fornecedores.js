function tipoFornecedores() {
    let radioTipoCnpj = document.getElementById("tipo-cnpj");
    let radioTipoCpf = document.getElementById("tipo-cpf");
    let divTipoPj = document.getElementById("tipo-pj");
    let divTipoPf = document.getElementById("tipo-pf");
  
    if (radioTipoCnpj.checked) {
      divTipoPj.style.display = "block";
      divTipoPf.style.display = "none";
      document.getElementById("label_cpf_cnpj").innerText = "CNPJ";
      document.getElementById("inputBuscarPF-PJ").placeholder = "00.000.000/0000-00";
      document.getElementById("btn-buscar-cnpj").style.display = "block";
      document.getElementById("data-nascimento").style.display = "none";
   
    } else if (radioTipoCpf.checked) {
      divTipoPf.style.display = "block";
      divTipoPj.style.display = "none";
      document.getElementById("label_cpf_cnpj").innerText = "CPF";
      document.getElementById("inputBuscarPF-PJ").placeholder = "000.000.000-00";
      document.getElementById("btn-buscar-cnpj").style.display = "none";
      document.getElementById("data-nascimento").style.display = "block";
    }
  }
  
  
  function limiteDisponivelForncedores() {
    let inputLimiteCredito = document.getElementById("limite-de-credito").value;
    let inputCreditoUtilizado =
      document.getElementById("credito-utilizado").value;
    let inputLimiteDisponivel = document.getElementById("limite-disponivel");
  
    if (isNaN(inputLimiteCredito) || isNaN(inputCreditoUtilizado)) {
      inputLimiteDisponivel.value = "Valor inválido";
      return;
    }
    let resultado = inputLimiteCredito - inputCreditoUtilizado;
    inputLimiteDisponivel.value = resultado.toFixed(2);
  }
  
  function fornecedorInativo() {
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
        feedbackInativo.style.display = "none"
      });
    } else {
      componetens.forEach(function (elementosHtml) {
        elementosHtml.readOnly = true;
        if (
          elementosHtml.tagName === "SELECT" ||
          elementosHtml.tagName === "BUTTON" ||
          elementosHtml.type === "checkbox"  ||
          elementosHtml.type === "radio"
        ) {
          elementosHtml.disabled = true;
          inputCheckboxAtivo.disabled = false;
          feedbackInativo.style.display = "block"
          feedbackInativo.querySelector("p").innerHTML =
            "* Fornecedor Inativo ! * <br> Cadastro disponivel somente para leitura. Se necessário realizar alguma alteração, Habilite a opção 'ATIVO'. ";
        }
      });
    }
  }