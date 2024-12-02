const btnOpen = document.querySelector(".btn-close-sidebar");
const menuSidebar = document.querySelector(".sidebar");
const btnLogout = document.querySelector(".btn-logout");

function closeModalSidebar() {
  let meusSpan = document.querySelectorAll("span");
  meusSpan.forEach((element) => {
    element.style.display = "none";
  });
  menuSidebar.style.width = "75px";
  menuSidebar.style.textAlign = "center";
  menuSidebar.querySelector("ul").style.paddingRight = "10px";
  btnLogout.style.textAlign = "center";
  btnLogout.style.marginLeft = "0px";
  btnLogout.style.padding = "10px";
}

btnOpen.addEventListener("click", closeModalSidebar);
