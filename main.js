//NAVIGATION
// This script adds an "active" class to the current page link in the navigation menu
document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".MenuFlexitem a");
  const currentUrl = window.location.pathname.replace(/\/$/, ""); // Remove trailing slash

  menuLinks.forEach(link => {
    const linkHref = link.getAttribute("href").replace(/\/$/, ""); // Remove trailing slash
    if (linkHref === currentUrl) {
      link.classList.add("active");
    }
  });
});

//FORM NAVIGATION
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("fieldset");
  const nextButtons = document.querySelectorAll(".next-section");

  // Initially hide all sections except the first
  sections.forEach((section, index) => {
    if (index !== 0) {
      section.style.display = "none";
    }
  });

  // Add event listeners to "Next" buttons
  nextButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Validate the current section
      const inputs = sections[index].querySelectorAll("input, select, textarea");
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.checkValidity()) {
          isValid = false;
          input.reportValidity();
        }
      });

      // If valid, show the next section
      if (isValid && index + 1 < sections.length) {
        sections[index].style.display = "none";
        sections[index + 1].style.display = "block";
      }
    });
  });
});