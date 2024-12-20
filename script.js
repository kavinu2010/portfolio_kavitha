document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll(".section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      // Get the target section
      const targetSection = document.querySelector(link.getAttribute("href"));

      if (targetSection) {
        // For the "Home" button, ensure all sections remain visible
        if (targetSection.id === "home") {
          sections.forEach((section) => {
            section.style.display = "block"; // Show all sections
          });
        } else {
          // Hide all sections except the target one
          sections.forEach((section) => {
            section.style.display = "none";
          });
          targetSection.style.display = "block"; // Show the target section
        }
      }
    });
  });

  // Initially, display all sections
  sections.forEach((section) => {
    section.style.display = "block";
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
