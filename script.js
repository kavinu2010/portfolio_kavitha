// Burger Menu Toggle
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  // Burger Animation
  burger.classList.toggle("toggle");
});

// Contact Form Handling with EmailJS
// Make sure to include EmailJS SDK in index.html or via script tag
// For this example, we'll load it via script tag in HTML

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Initialize EmailJS with your user ID
    emailjs.init("kavinu2010");

    // Send the form data
    emailjs.sendForm("service_rx5v2ip", "template_m59zsjn", this).then(
      function () {
        document.getElementById("form-status").textContent =
          "Message sent successfully!";
        document.getElementById("contact-form").reset();
      },
      function (error) {
        document.getElementById("form-status").textContent =
          "Failed to send message. Please try again.";
        console.error("FAILED...", error);
      }
    );
  });
