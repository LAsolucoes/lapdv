/* FUNÇAÕ QUE ABRE E FECHA OS SUBMENU DO SIDEBAR */
 function openCloseMenuSidebar(menuId) {
  const subMenuSidebar = document.getElementById(menuId);
  subMenuSidebar.classList.toggle("hidden");
}



// Função para carregar o sidebar dinamicamente
document.addEventListener('DOMContentLoaded', function() {
  // Verificar se não estamos na página do PDV
  if (window.location.pathname !== '/pdv.html') {
    const sidebarContainer = document.querySelector('#sidebar-container');

    // Carregar o conteúdo do sidebar.html
    fetch('sidebar.html') // Caminho relativo ao arquivo do sidebar
      .then(response => response.text())
      .then(data => {
        sidebarContainer.innerHTML = data;

        // Após o sidebar ser carregado, adicionar os event listeners
        
document.getElementById("menu_cadastros").addEventListener("click" , ()=> openCloseMenuSidebar('cadastros'))
 document.getElementById("menu_estoque").addEventListener("click" , () => openCloseMenuSidebar("estoque"))
 document.getElementById("menu_vendas").addEventListener("click" , () => openCloseMenuSidebar("vendas"))
 document.getElementById("menu_financeiro").addEventListener("click" , () => openCloseMenuSidebar("financeiro"))
 document.getElementById("menu_mesas").addEventListener("click" , () => openCloseMenuSidebar("mesas"))
 document.getElementById("menu_comandas").addEventListener("click" , () => openCloseMenuSidebar("comandas"))
 document.getElementById("menu_relatorios").addEventListener("click" , () => openCloseMenuSidebar("relatorios"))
 document.getElementById("menu_configuracoes").addEventListener("click" , () => openCloseMenuSidebar("configuracoes"))
      })
      
      
  }
});





