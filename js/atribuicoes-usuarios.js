function tipoAdmin() {
  let checkboxUsuarioAdmin = document.getElementById("user-admin");
  if (checkboxUsuarioAdmin.checked) {
      document.getElementById("user-gerente").checked = false;
      document.getElementById("user-op-caixa").checked = false;
      userTipoAdmin();
      userTipoGerente()
  }
}

function tipoGerente() {
  let checkboxUsuarioGerente = document.getElementById("user-gerente");
  if (checkboxUsuarioGerente.checked) {
      document.getElementById('user-admin').checked = false
      document.getElementById("user-op-caixa").checked = false;
      userTipoAdmin()
      userTipoGerente()
  }
}

function tipoCaixa() {
  let checkboxUsuarioOpCaixa = document.getElementById("user-op-caixa");
  if (checkboxUsuarioOpCaixa.checked) {
      document.getElementById('user-admin').checked = false
      document.getElementById("user-gerente").checked = false;
      userTipoAdmin();
      userTipoGerente()

  }
}
/* TOGGLE PERMITIR DESCONTO */
function permitirDescontos(){
  let checkboxPermitirDescontos = document.getElementById('permitir-descontos')
  if (checkboxPermitirDescontos.checked) {
   document.getElementById('senha-permitir-desconto').style.display = "block"
   document.getElementById('nome-senha-permitir-desconto').style.display = "block"
   document.getElementById('icon-visualizar-senha-descontos').style.display = "block"
   document.getElementById('senha-permitir-desconto').focus()
   } else if (checkboxPermitirDescontos.checked === false) {
   document.getElementById('senha-permitir-desconto').style.display = "none"
   document.getElementById('nome-senha-permitir-desconto').style.display = "none"
   document.getElementById('icon-visualizar-senha-descontos').style.display = "none"
   document.getElementById('icon-ocutar-senha-descontos').style.display = "none"
   document.getElementById('senha-permitir-desconto').value = ""
 
 
  }
}
/* VISUALIZAR SENHA INPUT PERMITIR DESCONTO */
function visualizarSenhaInput() {
  let iconVisualizarSenha = document.getElementById('icon-visualizar-senha-descontos')
  let iconOcutarSenha = document.getElementById('icon-ocutar-senha-descontos')
  let inputSenhaPermitirDesconto = document.getElementById('senha-permitir-desconto')

  if (inputSenhaPermitirDesconto.type === "password") {
    inputSenhaPermitirDesconto.type = "text"
    iconVisualizarSenha.style.display = "none"
    iconOcutarSenha.style.display = "block";
  } 

} document.getElementById('icon-visualizar-senha-descontos').addEventListener('click' , visualizarSenhaInput)

/* OCUTAR SENHA INPUT PERMITIR DESCONTO */
function ocutarSenhaInput(){
  let iconVisualizarSenha = document.getElementById('icon-visualizar-senha-descontos')
  let iconOcutarSenha = document.getElementById('icon-ocutar-senha-descontos')
  let inputSenhaPermitirDesconto =document.getElementById('senha-permitir-desconto')
  
  if (inputSenhaPermitirDesconto.type === "text") {
    inputSenhaPermitirDesconto.type = "password"
    iconOcutarSenha.style.display = "none"
    iconVisualizarSenha.style.display = "block"

  }

}document.getElementById('icon-ocutar-senha-descontos').addEventListener('click' , ocutarSenhaInput)
/* FIM */



/* TOGGLE ADMIN */
function userTipoAdmin() {
  let checkboxAdmin = document.getElementById("user-admin");
  let checkboxsPermissaoAdmin = [
    //CATEGORIA
    "permissao-categoria",
    "permissao-categoria-editar",
    "permissao-categoria-remover",
    "permissao-categoria-movimentacoes",
    //MARCAS
    "permissao-marcas",
    "permissao-marcas-editar",
    "permissao-marcas-remover",
    "permissao-marcas-movimentacoes",
    //PRODUTOS
    "permissao-produtos",
    "permissao-produtos-cadastrar",
    "permissao-produtos-importar",
    "permissao-produtos-exportar",
    "permissao-produtos-editar",
    "permissao-produtos-remover",
    "permissao-produtos-movimentacoes",
    "permissao-produtos-duplicar",
    "permissao-produtos-gerar-etiquetas",
    "permissao-produtos-editar-preco-custo",
    "permissao-produtos-editar-preco-venda",
    "permissao-produtos-editar-estoque-atual",
    //CLIENTES
    "permissao-clientes",
    "permissao-clientes-cadastrar",
    "permissao-clientes-importar",
    "permissao-clientes-exportar",
    "permissao-clientes-editar",
    "permissao-clientes-remover",
    "permissao-clientes-movimentacoes",
    "permissao-clientes-editar-limite-credito",
    //GRUPOS DE CLIENTES
    "permissao-grupo-clientes",
    "permissao-grupo-clientes-editar",
    "permissao-grupo-clientes-remover",
    "permissao-grupo-clientes-movimentacoes",
    //FUNCIONARIOS
    "permissao-fornecedores",
    "permissao-fornecedores-cadastrar",
    "permissao-fornecedores-editar",
    "permissao-fornecedores-remover",
    "permissao-fornecedores-movimentacoes",
    //LISTA DE PRECOS
    "permissao-lista-de-precos",
    "permissao-lista-de-precos-cadastrar",
    "permissao-lista-de-precos-editar",
    "permissao-lista-de-precos-remover",
    "permissao-lista-de-precos-movimentacoes",
    //USUÁRIOS
    "permissao-usuarios",
    "permissao-usuarios-cadastrar",
    "permissao-usuarios-editar",
    "permissao-usuarios-remover",
    "permissao-usuarios-movimentacoes",
    //TAXA DE CARTOES
    "permissao-taxa-cartoes",
    "permissao-taxa-cartoes-cadastrar",
    "permissao-taxa-cartoes-editar",
    "permissao-taxa-cartoes-remover",
    "permissao-taxa-cartoes-movimentacoes",
    //TAXA DE VENDAS
    "permissao-taxa-vendas",
    "permissao-taxa-vendas-cadastrar",
    "permissao-taxa-vendas-editar",
    "permissao-taxa-vendas-remover",
    "permissao-taxa-vendas-movimentacoes",
    //SERVICOS
    "permissao-servicos",
    "permissao-servicos-cadastrar",
    "permissao-servicos-editar",
    "permissao-servicos-remover",
    "permissao-servicos-movimentacoes",
    //CATEGORIA DE SERVIÇOS
    "permissao-categoria-de-servicos",
    "permissao-categoria-de-servicos-editar",
    "permissao-categoria-de-servicos-remover",
    "permissao-categoria-de-servicos-movimentacoes",
  ];

  checkboxsPermissaoAdmin.forEach((id) => {
    document.getElementById(id).checked = checkboxAdmin.checked;

  });
} document.getElementById("user-admin").addEventListener("click", userTipoAdmin);
/* FIM */
/* TOGGLE GERENTE */
function userTipoGerente(){
  let checkboxUsuarioGerente = document.getElementById("user-gerente")
  let checkboxsPermissaoGerente = [
     //CATEGORIA
     "permissao-categoria-editar",
     "permissao-categoria-remover",
    //MARCAS
    "permissao-marcas-editar",
    "permissao-marcas-remover",
   //PRODUTOS
    "permissao-produtos-cadastrar",
    "permissao-produtos-editar",
    "permissao-produtos-remover",
    "permissao-produtos-duplicar",
    "permissao-produtos-gerar-etiquetas",
    "permissao-produtos-editar-preco-custo",
    "permissao-produtos-editar-preco-venda",
    "permissao-produtos-editar-estoque-atual",
    //CLIENTES
    "permissao-clientes-cadastrar",
    "permissao-clientes-editar",
    "permissao-clientes-remover",
    "permissao-clientes-editar-limite-credito",
    //GRUPOS DE CLIENTES
    "permissao-grupo-clientes-editar",
    "permissao-grupo-clientes-remover",
    //FUNCIONARIOS
    "permissao-fornecedores-cadastrar",
    "permissao-fornecedores-editar",
    "permissao-fornecedores-remover",
    //LISTA DE PRECOS
    "permissao-lista-de-precos-editar",
    "permissao-lista-de-precos-remover",
    //CATEGORIA DE SERVIÇOS
   "permissao-categoria-de-servicos-editar",
    "permissao-categoria-de-servicos-remover",
   
    
  ]
  checkboxsPermissaoGerente.forEach(id => {
    document.getElementById(id).checked = checkboxUsuarioGerente.checked
  })
}document.getElementById('user-gerente').addEventListener('click' , userTipoGerente)
/* FIM */
/*CHECKBOX CATEGORIA*/
function categoriaPermisao() {
  let checkboxPermissaoCategoria = document.getElementById("permissao-categoria");
  let permisaoCheckboxs = [
    "permissao-categoria-editar",
    "permissao-categoria-remover",
    "permissao-categoria-movimentacoes",
  ];
  permisaoCheckboxs.forEach((id) => {
    document.getElementById(id).checked = checkboxPermissaoCategoria.checked;
  });
}
/* CHECKBOX MARCA */
function marcaPermissao() {
  let checkboxPermissaoMarca = document.getElementById("permissao-marcas");
  let checkboxsMarcas = [
    "permissao-marcas-editar",
    "permissao-marcas-remover",
    "permissao-marcas-movimentacoes",
  ];
  checkboxsMarcas.forEach((id) => {
    document.getElementById(id).checked = checkboxPermissaoMarca.checked;
  });
}
/* CHECKBOX PRODUTOS */
function produtosPermissao() {
  let checkboxPermissaoProdutos = document.getElementById("permissao-produtos");
  let checkboxsProdutos = [
    "permissao-produtos-cadastrar",
     "permissao-produtos-importar",
    "permissao-produtos-exportar",
    "permissao-produtos-editar",
    "permissao-produtos-remover",
    "permissao-produtos-movimentacoes",
    "permissao-produtos-duplicar",
    "permissao-produtos-gerar-etiquetas",
    "permissao-produtos-editar-preco-custo",
    "permissao-produtos-editar-preco-venda",
    "permissao-produtos-editar-estoque-atual",
  ];
  checkboxsProdutos.forEach((id) => {
    document.getElementById(id).checked = checkboxPermissaoProdutos.checked;
  });
}document.getElementById('permissao-produtos').addEventListener('click' , produtosPermissao)
/* FIM */
/* CHECKBOX CLIENTES */
function clientesPermissao() {
  let checkboxPermissaoClientes = document.getElementById("permissao-clientes");
  let checkboxsClientes = [
    "permissao-clientes-cadastrar",
    "permissao-clientes-importar",
    "permissao-clientes-exportar",
    "permissao-clientes-editar",
    "permissao-clientes-remover",
    "permissao-clientes-movimentacoes",
    "permissao-clientes-editar-limite-credito",
  ];
  checkboxsClientes.forEach((id) => {
   document.getElementById(id).checked = checkboxPermissaoClientes.checked;
  });
}
/* CHECKBOX GRUPO CLIENTES */
function grupoClientesPermissao() {
  let checkboxGrupoClientesPermissao = document.getElementById("permissao-grupo-clientes");
  let checkboxsGrupoClientes = [
    "permissao-grupo-clientes-editar",
    "permissao-grupo-clientes-remover",
    "permissao-grupo-clientes-movimentacoes",
  ];
  checkboxsGrupoClientes.forEach((id) => {
    document.getElementById(id).checked = checkboxGrupoClientesPermissao.checked;
  });
}
/* CHECKBOX FORNECEDORES */
function fornecedoresPermissao() {
  let checkboxPermissaoFornecedores = document.getElementById("permissao-fornecedores");
  let checkboxsFornecedores = [
    "permissao-fornecedores-cadastrar",
    "permissao-fornecedores-editar",
    "permissao-fornecedores-remover",
    "permissao-fornecedores-movimentacoes",
  ];
  checkboxsFornecedores.forEach((id) => {
    document.getElementById(id).checked = checkboxPermissaoFornecedores.checked;
  });
}
/* CHECKBOX LISTA DE PRECOS */
function listaDePrecosPermissao() {
  let checkboxPermissaoListaPrecos = document.getElementById("permissao-lista-de-precos");
  let checkboxsListaPrecos = [
    "permissao-lista-de-precos-cadastrar",
    "permissao-lista-de-precos-editar",
    "permissao-lista-de-precos-remover",
    "permissao-lista-de-precos-movimentacoes",
  ];
  checkboxsListaPrecos.forEach((id) => {
    document.getElementById(id).checked = checkboxPermissaoListaPrecos.checked;
  });
}

/* CHECKBOX USUÁRIOS */
function usuariosPermissao(){
  let checkboxPermissaoUsuarios = document.getElementById('permissao-usuarios')
 let checkboxsUsuarios = [
  "permissao-usuarios-cadastrar",
  "permissao-usuarios-editar",
  "permissao-usuarios-remover",
  "permissao-usuarios-movimentacoes"
] 
 checkboxsUsuarios.forEach((id) =>{
  document.getElementById(id).checked = checkboxPermissaoUsuarios.checked
 })

}document.getElementById('permissao-usuarios').addEventListener('change', usuariosPermissao)
/* FIM */
/* CHECKBOX TAXA DE CARTÕES */
function taxaCartoesPermissao(){
let checkboxPermissaoTaxaCartoes = document.getElementById('permissao-taxa-cartoes')
let checkboxsTaxaCartao = [
  "permissao-taxa-cartoes-cadastrar",
  "permissao-taxa-cartoes-editar",
  "permissao-taxa-cartoes-remover",
  "permissao-taxa-cartoes-movimentacoes",
]
checkboxsTaxaCartao.forEach((id) =>{
  document.getElementById(id).checked = checkboxPermissaoTaxaCartoes.checked
})
}document.getElementById('permissao-taxa-cartoes').addEventListener('change' , taxaCartoesPermissao)
/* FIM */
/* CHECKBOX TAXA DE VENDAS */
function taxaVendasPermissao(){
  let checkboxPermissaoTaxaVendas = document.getElementById('permissao-taxa-vendas')
  let checkboxsTaxaVendas = [
    "permissao-taxa-vendas-cadastrar",
    "permissao-taxa-vendas-editar",
    "permissao-taxa-vendas-remover",
    "permissao-taxa-vendas-movimentacoes",
  ]
  checkboxsTaxaVendas.forEach((id) =>{
    document.getElementById(id).checked = checkboxPermissaoTaxaVendas.checked
  })
}document.getElementById('permissao-taxa-vendas').addEventListener('change', taxaVendasPermissao)
/* FIM */
/* CHECKBOX SERVIÇOS */
function servicosPermissao(){
  let checkboxPermissaoServicos = document.getElementById('permissao-servicos')
  let checkboxsServicos = [
    "permissao-servicos-cadastrar",
    "permissao-servicos-editar",
    "permissao-servicos-remover",
    "permissao-servicos-movimentacoes",
  ]
  checkboxsServicos.forEach((id) =>
  document.getElementById(id).checked = checkboxPermissaoServicos.checked
  )
}document.getElementById('permissao-servicos').addEventListener('change' , servicosPermissao)
/* FIM */
/* CHECKBOX CATEGORIA DE SERVIÇOS */
function categoriaDeServicosPermissao() {
  let checkboxPermissaoCategoriaServicos = document.getElementById("permissao-categoria-de-servicos"
);
  let checkboxsCategoriaServicos = [
    "permissao-categoria-de-servicos-editar",
    "permissao-categoria-de-servicos-remover",
    "permissao-categoria-de-servicos-movimentacoes",
  ];

  checkboxsCategoriaServicos.forEach((id) => {
    document.getElementById(id).checked =
      checkboxPermissaoCategoriaServicos.checked;
  });
}


