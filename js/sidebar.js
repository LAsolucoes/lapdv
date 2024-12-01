function toggleSubMenu(menuId) {
  const subMenuSidebar = document.getElementById(menuId);
  subMenuSidebar.classList.toggle("hidden");
}
document.getElementById("menu_cadastros").addEventListener("click", () => toggleSubMenu('cadastros'));

document.getElementById("menu_estoque").addEventListener("click" , () => toggleSubMenu('estoque'))

document.getElementById('menu_vendas').addEventListener('click' , () => toggleSubMenu('vendas'))



function carregarConteudo(pagina) {
    $('#conteudo-content').load(pagina); // Carrega o conteúdo do arquivo na div
}

document.querySelectorAll('.submenu-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        const pagina = this.getAttribute('href'); // Obtém o valor do href
        carregarConteudo(pagina); // Chama a função para carregar o conteúdo
    });
});

