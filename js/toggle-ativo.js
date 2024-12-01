/* TOGGLE CHECKBOX ATIVO */
function checkboxAtivo() {
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
   } document.getElementById('ativo').addEventListener('change' , checkboxAtivo)
  