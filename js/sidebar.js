/* FUNÇÃO QUE ABRE E FECHA OS SUBMENU DO SIDEBAR */
function openCloseMenuSidebar(menuId) {
  const subMenuSidebar = document.getElementById(menuId);
  if (subMenuSidebar) {
    subMenuSidebar.classList.toggle("hidden");
  }
}

// Função para carregar o sidebar dinamicamente
document.addEventListener('DOMContentLoaded', function() {
  // Verificar se não estamos na página do PDV
  if (window.location.pathname !== '/pdv.html') {
    const sidebarContainer = document.querySelector('#sidebar-container');

    // Verificar se o #sidebar-container existe no DOM
    if (sidebarContainer) {
      // Carregar o conteúdo do sidebar.html
      fetch('/templates/sidebar.html') // Caminho relativo ao arquivo do sidebar
        .then(response => response.text())
        .then(data => {
          // Definir o conteúdo de #sidebar-container com o conteúdo carregado
          sidebarContainer.innerHTML = data;

          // Após o sidebar ser carregado, adicionar os event listeners
          document.getElementById("menu_cadastros")?.addEventListener("click", () => openCloseMenuSidebar('cadastros'));
          document.getElementById("menu_estoque")?.addEventListener("click", () => openCloseMenuSidebar("estoque"));
          document.getElementById("menu_vendas")?.addEventListener("click", () => openCloseMenuSidebar("vendas"));
          document.getElementById("menu_financeiro")?.addEventListener("click", () => openCloseMenuSidebar("financeiro"));
          document.getElementById("menu_mesas")?.addEventListener("click", () => openCloseMenuSidebar("mesas"));
          document.getElementById("menu_comandas")?.addEventListener("click", () => openCloseMenuSidebar("comandas"));
          document.getElementById("menu_relatorios")?.addEventListener("click", () => openCloseMenuSidebar("relatorios"));
          document.getElementById("menu_configuracoes")?.addEventListener("click", () => openCloseMenuSidebar("configuracoes"));
        })
        .catch(error => {
          console.error("Erro ao carregar o conteúdo do sidebar:", error);
        });
    } else {
      console.error("#sidebar-container não encontrado no DOM.");
    }
  }
});
