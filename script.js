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

  const track = document.querySelector(".services-track");
  const cards = document.querySelectorAll(".services-card");

  let index = 0;
  let cardWidth = cards[0].offsetWidth + 16;

  function updateCardWidth() {
    cardWidth = cards[0].offsetWidth + 16;
  }

  function visibleCards() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function slideNext() {
    if (index < cards.length - visibleCards()) {
      index++;
    } else {
      index = 0; // loop back
    }
    track.style.transform = `translateX(${-index * cardWidth}px)`;
  }

  // Update card width on resize
  window.addEventListener("resize", () => {
    updateCardWidth();
    track.style.transform = `translateX(${-index * cardWidth}px)`;
  });

  // Auto-slide every 3 seconds
  setInterval(slideNext, 3000);

  




