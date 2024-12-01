function cadastrarUsuario() {
  let inputName = document.getElementById("name").value;
  let inputLogin = document.getElementById("login").value;
  let inputSenha = document.getElementById("senha").value;
  let inputEmail = document.getElementById("email").value;
  let inputRotaPadrao = document.getElementById("rota-padrao").value;
  let selectListadePrecos = document.getElementById("lista-de-preco").value;
  let checkboxAdmin = document.getElementById("user-admin").checked;
  let checkboxGerente = document.getElementById("user-gerente").checked;
  let checkboxOpCaixa = document.getElementById("user-op-caixa").checked;
  let checkboxPermitirDescontos = document.getElementById("permitir-descontos").checked;
  let inputSenhaPermitirDescontos = document.getElementById(
    "senha-permitir-desconto"
  ).value;

  if (!inputName || !inputLogin || !inputSenha || !inputEmail) {
    alert("Preencha os Campos Minimos Obrigatorios");
    return;
  }
  if (checkboxPermitirDescontos && inputSenhaPermitirDescontos === "") {
    alert("Cadastre a senha para desconto obrigatoria , ou desbalite a opção permitir descontos para continuar !!! " );
    document.getElementById("senha-permitir-desconto").focus();
    return;
  }

  let tabelaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  tabelaUsuarios.push({
    name: inputName,
    login: inputLogin,
    senha: inputSenha,
    email: inputEmail,
    rota: inputRotaPadrao,
    listaPrecos: selectListadePrecos,
    admin: checkboxAdmin,
    gerente: checkboxGerente,
    opCaixa: checkboxOpCaixa,
    descontos: checkboxPermitirDescontos,
    senhaDesconto: inputSenhaPermitirDescontos
  });

  
  localStorage.setItem("usuarios", JSON.stringify(tabelaUsuarios));
  limparCampos()
 
 
}document.getElementById("salvar").addEventListener("click", cadastrarUsuario);



function checkedCheckbox(value) {
  let inputCheckbox = document.querySelectorAll("input[type='checkbox']");

  inputCheckbox.forEach((checkbox) => {
    checkbox.checked = value;
  });
}checkedCheckbox();


function limparCampos(){
    let inputName = document.getElementById("name")
    let inputLogin = document.getElementById("login")
    let inputSenha = document.getElementById("senha")
    let inputEmail = document.getElementById("email");
    let inputRotaPadrao = document.getElementById("rota-padrao")
    let selectListadePrecos = document.getElementById("lista-de-preco");
    let checkboxAdmin = document.getElementById("user-admin")
    let checkboxGerente = document.getElementById("user-gerente")
    let checkboxOpCaixa = document.getElementById("user-op-caixa")
    let checkboxPermitirDescontos = document.getElementById("permitir-descontos")
    let inputSenhaPermitirDescontos = document.getElementById("senha-permitir-desconto")
  
    
    inputName.value = ""
    inputLogin.value = ""
    inputSenha.value = ""
    inputEmail.value = ""
    inputRotaPadrao.value = ""
    selectListadePrecos.value = ""
    checkboxAdmin.value = ""
    checkboxGerente.value = ""
    checkboxOpCaixa.value = ""
    checkboxPermitirDescontos.value = ""
    inputSenhaPermitirDescontos.value = ""
}

