 function visualizarSenhaInput() {
  let iconVisualizarSenha = document.getElementById("icon-visualizar-senha");
  let iconOcutarSenha = document.getElementById("icon-ocutar-senha");
  let inputSenhaLogin = document.getElementById("senha-login");

  if (inputSenhaLogin.type === "password") {
    inputSenhaLogin.type = "text";
    iconVisualizarSenha.style.display = "none";
    iconOcutarSenha.style.display = "block";
  }
}
document.getElementById("icon-visualizar-senha").addEventListener("click", visualizarSenhaInput);

function ocutarSenhaInput() {
  let iconVisualizarSenha = document.getElementById("icon-visualizar-senha");
  let iconOcutarSenha = document.getElementById("icon-ocutar-senha");
  let inputSenhaLogin = document.getElementById("senha-login");

  if (inputSenhaLogin.type === "text") {
    inputSenhaLogin.type = "password";
    iconOcutarSenha.style.display = "none";
    iconVisualizarSenha.style.display = "block";
  }
}document.getElementById("icon-ocutar-senha").addEventListener("click", ocutarSenhaInput);



/* /* TOGGLE CHECKBOX ATIVO */
 /* function checkboxAtivo() {
  console.log(checkboxAtivo)
    let inputCheckboxAtivo = document.getElementById('ativo');
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
          elementosHtml.readOnly = false;
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
          elementosHtml.readOnly = true;
          inputCheckboxAtivo.disabled = false;
          feedbackInativo.style.display = "block"
        }
      });
    }
 } 
 */


 