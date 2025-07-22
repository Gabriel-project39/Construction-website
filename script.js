document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("menu-open-button");
  const closeBtn = document.getElementById("menu-close-button");
  const menu = document.getElementById("menu");

  openBtn.addEventListener("click", () => {
    menu.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
  });
});

