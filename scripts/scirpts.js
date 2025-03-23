// GSAP Animations
gsap.from(".hero-content", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".cta", { opacity: 0, y: 50, duration: 1, delay: 1 });

// ScrollTrigger Animations
gsap.utils.toArray(".about, .projects, .contact").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
});

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});