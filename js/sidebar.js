/* função que abre e fecha o submenu da categoria do sidebar */

function toggleSubMenu(menuId) {
  const subMenuSidebar = document.getElementById(menuId);
  subMenuSidebar.classList.toggle("hidden");
}
document
  .getElementById("menu_cadastros")
  .addEventListener("click", () => toggleSubMenu("cadastros"));
document
  .getElementById("menu_estoque")
  .addEventListener("click", () => toggleSubMenu("estoque"));
document
  .getElementById("menu_vendas")
  .addEventListener("click", () => toggleSubMenu("vendas"));




/* // Carregar o sidebar dinamicamente
  document.addEventListener('DOMContentLoaded', function() {
        // Verificar se não estamos na página do PDV
        if (window.location.pathname !== '/pdv.html') {
          const sidebarContainer = document.getElementById('sidebar-container');
  
          // Carregar o conteúdo do sidebar.html
          fetch('/pages/sidebar.html')
            .then(response => response.text())
            .then(data => {
              sidebarContainer.innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar o sidebar:', error));
        }
      }); */


    
 





const menuSidebarOpen = document.querySelector(".sidebar");
const divContent = document.querySelector(".content");
const btnFecharMenuSidebar = document.querySelector(".btn-close");
function fecharSidebar() {
  menuSidebarOpen.style.width = "70px";
}
btnFecharMenuSidebar.addEventListener("click", fecharSidebar);





/* function carregarConteudo(pagina) {
  $("#conteudo-content").load(pagina); // Carrega o conteúdo do arquivo na div
}

document.querySelectorAll(".submenu-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    const pagina = this.getAttribute("href"); // Obtém o valor do href
    carregarConteudo(pagina); // Chama a função para carregar o conteúdo
  });
}); */