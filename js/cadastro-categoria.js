function addNovaCategoria() {
    let inputNameCategoria = document.getElementById("name-new-category").value;
  
    // Verifica se o nome da categoria foi preenchido
    if (!inputNameCategoria) {
      alert("Preencha os Campos Obrigatorios");
      document.getElementById("name-new-category").focus();
      return; // Impede a execução do código se o campo não estiver preenchido
    }
  
    // Coleta todos os checkboxes
    let inputCheckboxes = document.querySelectorAll("input[type='checkbox']");
    let checkboxesAtivos = [];
  
    // Verifica quais checkboxes estão marcados e adiciona ao array checkboxesAtivos
    inputCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkboxesAtivos.push(checkbox.value); // Você pode salvar o valor do checkbox ou apenas um true/false
      }
    });
  
    // Obtém o array de categorias do localStorage ou cria um vazio
    let tabelaCategoria = JSON.parse(localStorage.getItem("categoria")) || [];
  
    // Adiciona a nova categoria à tabela
    tabelaCategoria.push({
      name: inputNameCategoria,
      ativo: checkboxesAtivos // Salva os checkboxes marcados
    });
  
    // Salva a tabela de categorias no localStorage
    localStorage.setItem("categoria", JSON.stringify(tabelaCategoria));
  
    // Limpa os campos após salvar
    limparCampos();
  }
  
  // Função que limpa os campos após o salvamento
  function limparCampos() {
    document.getElementById("name-new-category").value = '';
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(checkbox => checkbox.checked = false); // Desmarca todos os checkboxes
  }
  
  // Adiciona o evento de click no botão "salvar"
  document.getElementById("salvar").addEventListener("click", addNovaCategoria);
  