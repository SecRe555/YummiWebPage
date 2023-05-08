const btnDescargar = document.getElementById("descargar");
const navbar = document.getElementById("navbar__list-items");
const menu = document.getElementById("menu_hamburger");
const closebtn = document.getElementById("menu_close");
const menu_lateral = document.getElementById("sidebar");

if (window.innerWidth < 525) {
  navbar.style.display = "none";
  menu.style.display = "flex";
} else {
  navbar.style.display = "flex";
  menu.style.display = "none";
}

btnDescargar.addEventListener("click", () => {
  alert("No he subido el apk no comas ansias");
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 525) {
    navbar.style.display = "none";
    menu.style.display = "flex";
  } else {
    navbar.style.display = "flex";
    menu.style.display = "none";
  }
});

menu.addEventListener("click", () => {
  menu.style.display = "none";
  closebtn.style.display = "flex";
  menu_lateral.style.display = "block";
});

closebtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closebtn.style.display = "none";
  menu_lateral.style.display = "none";
});
