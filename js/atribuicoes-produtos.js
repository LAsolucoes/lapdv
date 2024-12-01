function descontoProduto() {
  let checkboxDescontoProduto = document.getElementById("desconto-produto");
  let divTipoDesconto = document.getElementById("tipo-desconto");
 
  if (checkboxDescontoProduto.checked === true) {
    divTipoDesconto.style.display = "block";
    document.getElementById("selecionarTipoDesconto").focus();
    

  } else {
    divTipoDesconto.style.display = "none";
    document.getElementById("selecionarTipoDesconto").value = "";
    document.getElementById("descontoReal").value = "";
    document.getElementById("descontoPorcentagem").value = "";
  }
}
function tipoDesconto() {
  let tipoDesconto = document.getElementById("selecionarTipoDesconto").value;
  let descontoReal = document.getElementById("descontoReal");
  let descontoPorcentagem = document.getElementById("descontoPorcentagem");

  if (tipoDesconto === "1") {
    descontoReal.disabled = false;
    descontoPorcentagem.disabled = true;
    descontoPorcentagem.value = "";
    descontoReal.focus()
 
} else if (tipoDesconto === "2") {
    descontoReal.disabled = true;
    descontoPorcentagem.disabled = false;
    descontoReal.value = "";
    descontoPorcentagem.focus()

} else {
    descontoPorcentagem.disabled = true;
    descontoReal.disabled = true;
    descontoReal.value = "";
    descontoPorcentagem.value = "";
  }
} 



function comissaoProduto() {
  let checkboxComissaoProduto = document.getElementById("comissao-do-produto");
  let divComissaoProduto = document.getElementById("comissao-produto");

  if (checkboxComissaoProduto.checked === true) {
    divComissaoProduto.style.display = "block";
    document.getElementById("tipo-comissao").focus();
  } else {
    divComissaoProduto.style.display = "none";
    document.getElementById("tipo-comissao").value = "";
    document.getElementById("comissaoReal").value = "";
    document.getElementById("comissaoPorcentagem").value = "";
  }
}
function tipoComissao() {
  let selecaoTipoComissao = document.getElementById('tipo-comissao').value
  let comissaoPorcentagem = document.getElementById('comissaoPorcentagem')
  let comissaoReal = document.getElementById('comissaoReal')

  if (selecaoTipoComissao == "1") {
      comissaoReal.disabled = false
      comissaoPorcentagem.disabled = true
      comissaoPorcentagem.value = ""  
      comissaoReal.focus()
            
  
  
    } else if (selecaoTipoComissao == "2") {
      comissaoReal.disabled = true
      comissaoPorcentagem.disabled = false
      comissaoReal.value = ""  
      comissaoPorcentagem.focus()
         
  } else {
      comissaoPorcentagem.disabled = true
      comissaoReal.disabled = true
      comissaoPorcentagem.value =""
      comissaoReal.value = ""

  }
}



function infoDetalhesProduto(){
  let checkboxDetalhesProduto = document.getElementById('detalhesProduto')
  let divDetalhesProduto = document.getElementById('detalhes-produto')

  if (checkboxDetalhesProduto.checked === true) {
    divDetalhesProduto.style.display = "block"
    document.getElementById('ref-balanca').focus()

    
  } else {
    divDetalhesProduto.style.display = "none"
    document.getElementById('ref-balanca').value = ""
     document.getElementById('largura').value = ""
      document.getElementById('altura').value = ""
       document.getElementById('complemento').value = ""
        document.getElementById('peso-liquido').value = ""
         document.getElementById('peso-bruto').value = ""
    
  }
}

function atribuicoesComposicao() {
  /* corrigir */
  let inputComposicao = document.getElementById("composicao");
  let produtoComposicao = document.getElementById("produtosComposicao");
  let selecionarProdutoComposicao = document.getElementById(
    "selecionarProdutoComposicao"
  );
  let qtdComposicao = document.getElementById("qtdComposicao");
  let precoCustoComposicao = document.getElementById("precoCustoComposicao");
  let precoVendaComposicao = document.getElementById("precoVendaComposicao");

  if (inputComposicao.checked === true) {
    produtoComposicao.style.display = "block";
    selecionarProdutoComposicao.focus();
  } else if (inputComposicao.checked === false) {
    produtoComposicao.style.display = "none";
    qtdComposicao.value = "";
    precoCustoComposicao.value = "";
    precoVendaComposicao.value = "";
  }
}
/* corrigir */
function atribuicoesVariaveis() {
  let inputVariacoes = document.getElementById("variacoes");
  let produtoVariacoes = document.getElementById("produtosVariacoes");
  let variacoesDescricao = document.getElementById("variacoesDescricao");
  let variacoesCodBarras = document.getElementById("variacoesCodBarras");
  let variacoesPrecoCusto = document.getElementById("variacoesPrecoCusto");
  let variacoesMargem = document.getElementById("variacoesMargem");
  let variacoesPrecoVenda = document.getElementById("variacoesPrecoVenda");
  let variacoesEstoqueAtual = document.getElementById("variacoesEstoqueAtual");
  let variacoesEstoqueMinimo = document.getElementById(
    "variacoesEstoqueMinimo"
  );

  if (inputVariacoes.checked === true) {
    produtoVariacoes.style.display = "block";
    variacoesDescricao.focus();
  } else if (inputVariacoes.checked === false) {
    produtoVariacoes.style.display = "none";
    variacoesCodBarras.value = "";
    variacoesPrecoCusto.value = "";
    variacoesMargem.value = "";
    variacoesPrecoVenda.value = "";
    variacoesEstoqueAtual.value = "";
    variacoesEstoqueMinimo.value = "";
  }
}
function precoPromocionalProduto() {
  let inputPrecoPromocional = document.getElementById("precoPromocional");
  let valorPromocional = document.getElementById("valorPromocional");
  let inputPrecoVenda = document.getElementById('precoVenda')

  if (inputPrecoPromocional.checked === true) {
    valorPromocional.style.display = "block";
    document.getElementById('valorAtual').value = inputPrecoVenda.value
    document.getElementById("qtdMinima").focus();
  } else {
    valorPromocional.style.display = "none";
    document.getElementById("qtdMinima").value = "";
    document.getElementById("valorPrecoPromocional").value = "";
    document.getElementById("qtdMaxima").value = "";
    document.getElementById("validadePromocao").value = "";
  }
}

function alertaValidade() {
  console.log(alertaValidade);
  let inputLoteVencimento = document.getElementById("lote-vencimento");
  let validade = document.getElementById("validade");

  if (inputLoteVencimento.checked === true) {
    validade.style.display = "block";
    document.getElementById("numero-lote").focus();
  } else {
    validade.style.display = "none";
    document.getElementById("numero-lote").value = "";
    document.getElementById("data-validade").value = "";
    document.getElementById("alerta-dias").value = "";
  }
}

function produtoTipoPizza() {
  let inputTipoPizza = document.getElementById("tipo-pizza");
  let divProdutoTipoPizza = document.getElementById("produto-tipo-pizza");

  if (inputTipoPizza.checked === true) {
    divProdutoTipoPizza.style.display = "block";
    document.getElementById("pequena").focus();
  } else {
    divProdutoTipoPizza.style.display = "none";
    document.getElementById("pequena").value = "";
    document.getElementById("media").value = "";
    document.getElementById("grande").value = "";
    document.getElementById("familia").value = "";
  }
}

function gerenciarEstoqueProduto() {
  let inputGerenciarEstoque = document.getElementById("gerenciar-estoque");
  let inputEstoqueAtual = document.getElementById("estoque-atual");

  if (inputGerenciarEstoque.checked === true) {
    alert(
      "Ao Habilitar GERENCIAR ESTOQUE, será necessario ter estoque sufuciente para realizar vendas do Produto. "
    );
    inputEstoqueAtual.readOnly = false;
  } else {
    alert(
      "Ao Desabilitar essa opção o Produto nao gerenciara o estoque e sera um produto livre para venda "
    );
    inputEstoqueAtual.readOnly = true;
  }
}

function produtoInativo() {
  let inputCheckboxAtivo = document.getElementById("ativo");
  let componetens = document.querySelectorAll("input , select , button");
  let feedbackInativo = document.getElementById("feedback-inativo");

  if (inputCheckboxAtivo.checked === true) {
    componetens.forEach(function (elementosHtml) {
      elementosHtml.readOnly = false;

      if (
        elementosHtml.tagName === "SELECT" ||
        elementosHtml.tagName === "BUTTON" ||
        elementosHtml.type === "checkbox"
      )
        elementosHtml.disabled = false;
        feedbackInativo.style.display = "none"
      feedbackInativo.querySelector("p").innerHTML = "";
    });
  } else {
    componetens.forEach(function (elementosHtml) {
      elementosHtml.readOnly = true;
      if (
        elementosHtml.tagName === "SELECT" ||
        elementosHtml.tagName === "BUTTON" ||
        elementosHtml.type === "checkbox"
      ) {
        elementosHtml.disabled = true;
        inputCheckboxAtivo.disabled = false;
        feedbackInativo.style.display = "block"
        feedbackInativo.querySelector("p").innerHTML =
          "* Produto Inativo ! * <br> Cadastro disponivel somente para leitura. Se necessário realizar alguma alteração, Habilite a opção 'ATIVO'. ";
      }
    });
  }
}
