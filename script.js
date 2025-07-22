document.addEventListener("DOMContentLoaded", () => {
  const menuOpenBtn = document.getElementById("menu-open-button");
  const menuCloseBtn = document.getElementById("menu-close-button");
  const navMenu = document.getElementById("nav-menu");

  menuOpenBtn.addEventListener("click", () => {
    navMenu.style.display = "block";
  });

  menuCloseBtn.addEventListener("click", () => {
    navMenu.style.display = "none";
  });
});
