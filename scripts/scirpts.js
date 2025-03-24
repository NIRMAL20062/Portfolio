// script.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach(anchor => {
      anchor.addEventListener("click", function(event) {
          event.preventDefault();
          const section = document.querySelector(this.getAttribute("href"));
          section.scrollIntoView({ behavior: "smooth" });
      });
  });

  document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Thank you for your message! I'll get back to you soon.");
      this.reset();
  });

  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
  }, { threshold: 0.3 });
  
  sections.forEach(section => {
      observer.observe(section);
  });
});
