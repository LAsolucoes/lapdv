/* função que abre e fecha o submenu da categoria do sidebar */

function toggleSubMenu(menuId) {
  const subMenuSidebar = document.getElementById(menuId);
  subMenuSidebar.classList.toggle("hidden");
}
document
  .getElementById("menu_cadastros").addEventListener("click", () => toggleSubMenu("cadastros"));
document
  .getElementById("menu_estoque").addEventListener("click", () => toggleSubMenu("estoque"));
document
  .getElementById("menu_vendas").addEventListener("click", () => toggleSubMenu("vendas"));






const menuSidebarOpen = document.querySelector(".sidebar");
const btnFecharMenuSidebar = document.querySelector(".btn-close");


function fecharSidebar(event) {
  menuSidebarOpen.style.width = "70px";
  console.log("click")
}
btnFecharMenuSidebar.addEventListener("click", fecharSidebar);