const openMenu = document.getElementById("openMenu");
const menu = document.getElementById("menu");


openMenu.addEventListener("click", function() {
  if (openMenu) {
    menu.classList.toggle("active");
  };
});
