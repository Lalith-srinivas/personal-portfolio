const menuIcon = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show-links");
  });