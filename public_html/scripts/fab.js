var botonFab = document.querySelector(".boton-fab");

window.addEventListener("scroll", function () {
  if (window.scrollY > 250) {
    botonFab.style.display = "flex";
  } else {
    botonFab.style.display = "none";
  }
});

botonFab.addEventListener("click", function (evento) {
  evento.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
